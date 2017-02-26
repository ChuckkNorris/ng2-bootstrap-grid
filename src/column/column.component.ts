import { Component, OnInit, Input, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'column',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class ColumnComponent implements OnInit {
  // Sizes
  @Input() xs: number = null;
  @Input() sm: number = null;
  @Input() md: number = null;
  @Input() lg: number = null;
  @Input() xl: number = null;
  // Offset Left
  @Input() xsOffset: number = null;
  @Input() smOffset: number = null;
  @Input() mdOffset: number = null;
  @Input() lgOffset: number = null;
  // Offset Right
  // @Input() xsOffsetRight: number = null;
  // @Input() smOffsetRight: number = null;
  // @Input() mdOffsetRight: number = null;
  // @Input() lgOffsetRight: number = null;
  // Pull
  @Input() xsPull: number = null;
  @Input() smPull: number = null;
  @Input() mdPull: number = null;
  @Input() lgPull: number = null;
  // Push
  @Input() xsPush: number = null;
  @Input() smPush: number = null;
  @Input() mdPush: number = null;
  @Input() lgPush: number = null;


  constructor(private element: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.setSize();
    this.setOffset();
    this.setPull();
    this.setPush();
  }

  setSize() {
    let allZero = true;
    if (this.xs) {
      allZero = false; this.setColumnClass('col', this.xs);
    }
    if (this.sm) {
      allZero = false; this.setColumnClass('col-sm', this.sm);
    }
    if (this.md) {
      allZero = false; this.setColumnClass('col-md', this.md);
    }
    if (this.lg) {
      allZero = false; this.setColumnClass('col-lg', this.lg);
    }
     if (this.xl) {
      allZero = false; this.setColumnClass('col-xl', this.xl);
    }
    if (allZero) {
      this.setColumnClass('col-auto');
    }
  }

  setOffset() {
    if (this.xsOffset) {
      this.setColumnClass('offset-xs', this.xsOffset);
    }
    if (this.smOffset) {
      this.setColumnClass('offset-sm', this.smOffset);
    }
    if (this.mdOffset) {
      this.setColumnClass('offset-md', this.mdOffset);
    }
    if (this.lgOffset) {
      this.setColumnClass('offset-lg', this.lgOffset);
    }
  }

  setPull() {
    if (this.xsPull) {
      this.setColumnClass('pull-xs', this.xsPull);
    }
    if (this.smPull) {
      this.setColumnClass('pull-sm', this.smPull);
    }
    if (this.mdPull) {
      this.setColumnClass('pull-md', this.mdPull);
    }
    if (this.lgPull) {
      this.setColumnClass('pull-lg', this.lgPull);
    }
  }

  setPush() {
    if (this.xsPush) {
      this.setColumnClass('push-xs', this.xsPush);
    }
    if (this.smPush) {
      this.setColumnClass('push-sm', this.smPush);
    }
    if (this.mdPush) {
      this.setColumnClass('push-md', this.mdPush);
    }
    if (this.lgPush) {
      this.setColumnClass('push-lg', this.lgPush);
    }
  }

  setColumnClass(sizeName: string, size?: number) {
    let colClass = sizeName;
    if (size)
      colClass += '-' + size;
    this.renderer.setElementClass(this.element.nativeElement, colClass, true);
  }
  

}

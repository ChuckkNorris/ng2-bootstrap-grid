import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'column[sm]'
})
export class ColSmDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}
  @Input() sm:number = 0;
  ngOnInit() {
    let colClass = 'col';
    if (this.sm > 0)
      colClass += '-sm-' + this.sm;
    this.renderer.setElementClass(this.element.nativeElement, colClass, true);
  }
}

@Directive({
  selector: 'column[md]'
})
export class ColMdDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}
  @Input() md:number = 0;
  ngOnInit() {
    let colClass = 'col';
    if (this.md > 0)
      colClass += '-md-' + this.md;
    this.renderer.setElementClass(this.element.nativeElement, colClass, true);
  }
}

@Directive({
  selector: 'column[lg]'
})
export class ColLgDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}
  @Input() lg:number = 0;
  ngOnInit() {
 let colClass = 'col';
    if (this.lg > 0)
      colClass += '-lg-' + this.lg;
    this.renderer.setElementClass(this.element.nativeElement, colClass, true);
  }
}

import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'column[left]'
})
export class AlignLeftDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}
  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'text-align', 'left');
  }
}

@Directive({
  selector: 'column[right]'
})
export class AlignRightDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}
  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'text-align', 'right');
  }
}

@Directive({
  selector: 'column[center]'
})
export class AlignCenterDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}
  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'text-align', 'center');
  }
}

@Directive({
  selector: 'column[centerLeft]'
})
export class AlignCenterLeftDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}
  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'text-align', 'left');
    this.renderer.setElementStyle(this.element.nativeElement, 'margin-left', 'auto');
    this.renderer.setElementStyle(this.element.nativeElement, 'margin-right', 'auto');
  }
}

@Directive({
  selector: 'column[centerRight]'
})
export class AlignCenterRightDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}
  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'text-align', 'right');
    this.renderer.setElementStyle(this.element.nativeElement, 'margin-left', 'auto');
    this.renderer.setElementStyle(this.element.nativeElement, 'margin-right', 'auto');
  }
  
}


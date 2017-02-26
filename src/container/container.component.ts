import { Component, OnInit, Renderer, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'container',
  template: `
  <ng-content></ng-content>
  `,
  styles: [`
  .container {
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 768px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 992px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 1200px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 576px) {
  .container {
    width: 540px;
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .container {
    width: 720px;
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .container {
    width: 960px;
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1140px;
    max-width: 100%;
  }
}
  `],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementClass(this.element.nativeElement, 'container', true);
  }

}

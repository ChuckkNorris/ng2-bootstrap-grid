import { Component, OnInit, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'row',
  template: `
  <ng-content></ng-content>
`,
  styles: [`
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 576px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media (min-width: 768px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media (min-width: 992px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media (min-width: 1200px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}
`],
encapsulation: ViewEncapsulation.None
})
export class RowComponent implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer) { 
    this.renderer.setElementClass(element.nativeElement, 'row', true);
  }

  ngOnInit() {
  }

}

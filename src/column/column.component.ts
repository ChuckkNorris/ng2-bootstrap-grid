import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'column',
  template: '<ng-content></ng-content>',
})
export class ColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

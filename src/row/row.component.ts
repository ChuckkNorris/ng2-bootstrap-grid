import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'row',
  template: `
<div class="row">
  <ng-content></ng-content>
</div>
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
`]
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

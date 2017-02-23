import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import { BootstrapGridComponent } from './src/bootstrap-grid/bootstrap-grid.component';
import { ContainerComponent } from './src/container/container.component';
import { RowComponent } from './src/row/row.component';
import { ColSmDirective, ColMdDirective, ColLgDirective } from './src/columns.directive';
import { ColumnComponent } from './src/column/column.component';

export * from './src/bootstrap-grid/bootstrap-grid.component';
export * from './src/container/container.component';
export * from './src/row/row.component';
export * from './src/columns.directive';
export * from './src/column/column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BootstrapGridComponent, 
    ContainerComponent, 
    RowComponent,
    ColumnComponent,
  ],
  exports: [
    BootstrapGridComponent, 
    ContainerComponent, 
    RowComponent,
    ColumnComponent,
  ]
})
export class BootstrapGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BootstrapGridModule
    };
  }
}

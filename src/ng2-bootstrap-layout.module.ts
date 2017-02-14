import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapLayoutComponent } from './bootstrap-layout/bootstrap-layout.component';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';
import { ColSmDirective, ColMdDirective, ColLgDirective } from './columns.directive';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BootstrapLayoutComponent, 
    ContainerComponent, 
    RowComponent,
    ColumnComponent,
    ColSmDirective, ColMdDirective, ColLgDirective
  ],
  exports: [
    BootstrapLayoutComponent, 
    ContainerComponent, 
    RowComponent,
    ColumnComponent,
    ColSmDirective, ColMdDirective, ColLgDirective
  ]
})
export class Ng2BootstrapLayoutModule { }

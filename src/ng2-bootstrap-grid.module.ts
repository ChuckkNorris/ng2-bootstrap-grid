import { AlignLeftDirective, AlignRightDirective, AlignCenterDirective, AlignCenterLeftDirective, AlignCenterRightDirective } from './directives/alignments.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';
import { ColSmDirective, ColMdDirective, ColLgDirective } from './columns.directive';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BootstrapGridComponent, 
    ContainerComponent, 
    RowComponent,
    ColumnComponent,
    AlignCenterDirective, AlignLeftDirective, AlignRightDirective, AlignCenterLeftDirective, AlignCenterRightDirective
    //ColSmDirective, ColMdDirective, ColLgDirective
  ],
  exports: [
    BootstrapGridComponent, 
    ContainerComponent, 
    RowComponent,
    ColumnComponent,
    AlignCenterDirective, AlignLeftDirective, AlignRightDirective, AlignCenterLeftDirective, AlignCenterRightDirective
    //ColSmDirective, ColMdDirective, ColLgDirective
  ]
})
export class Ng2BootstrapGridModule { }

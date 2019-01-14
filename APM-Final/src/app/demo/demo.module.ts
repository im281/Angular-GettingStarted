import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DemoContentComponent } from './demo-content.component';

@NgModule({
  declarations: [DemoComponent, DemoContentComponent],
  imports: [RouterModule.forChild(
    [
      { path: 'demo', component: DemoComponent }
    ]),
    CommonModule,
    SharedModule,
  ],
  exports: [
    DemoContentComponent
    ,DemoComponent]
})
export class DemoModule { }

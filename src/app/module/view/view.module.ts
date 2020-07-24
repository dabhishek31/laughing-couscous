import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './components/viewall/view.component';
import { ViewItemComponent } from './components/view-item/view-item.component';


@NgModule({
  declarations: [ViewComponent, ViewItemComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }

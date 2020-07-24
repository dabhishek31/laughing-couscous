import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddrecipeRoutingModule } from './addrecipe-routing.module';
import { AddrecipeComponent } from './components/addreipe/addrecipe.component';


@NgModule({
  declarations: [AddrecipeComponent],
  imports: [
    CommonModule,
    AddrecipeRoutingModule
  ]
})
export class AddrecipeModule { }

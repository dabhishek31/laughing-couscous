import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddrecipeComponent } from './components/addreipe/addrecipe.component';

const routes: Routes = [{ path: '', component: AddrecipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddrecipeRoutingModule { }

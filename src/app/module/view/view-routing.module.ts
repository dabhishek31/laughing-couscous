import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { ViewComponent } from './components/viewall/view.component';

const routes: Routes = [{ path: '', component: ViewComponent }, { path: ':id', component: ViewItemComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }

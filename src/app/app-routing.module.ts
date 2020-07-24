import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { TopRecipesComponent } from './component/top-recipes/top-recipes.component';

const routes: Routes = [
  { path: '', component: TopRecipesComponent },
  { path: 'addrecipe', loadChildren: () => import('./module/addrecipe/addrecipe.module').then(m => m.AddrecipeModule) },
  { path: 'view', loadChildren: () => import('./module/view/view.module').then(m => m.ViewModule) },
  { path: 'contact', loadChildren: () => import('./module/contact/contact.module').then(m => m.ContactModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

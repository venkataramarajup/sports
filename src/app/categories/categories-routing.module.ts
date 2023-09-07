import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sports',
    pathMatch: 'full'
  },
  {
    path: 'sports',
    component: SportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

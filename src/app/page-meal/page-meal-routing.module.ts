import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMealComponent } from './page-meal.component';

const routes: Routes = [{ path: '', component: PageMealComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageMealRoutingModule { }

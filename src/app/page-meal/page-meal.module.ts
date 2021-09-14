import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMealRoutingModule } from './page-meal-routing.module';
import { PageMealComponent } from './page-meal.component';


@NgModule({
  declarations: [
    PageMealComponent
  ],
  imports: [
    CommonModule,
    PageMealRoutingModule
  ]
})
export class PageMealModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMealRoutingModule } from './page-meal-routing.module';
import { PageMealComponent } from './page-meal.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageMealComponent
  ],
    imports: [
        CommonModule,
        PageMealRoutingModule,
        SharedModule
    ]
})
export class PageMealModule { }

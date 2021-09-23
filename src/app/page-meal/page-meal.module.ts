import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMealRoutingModule } from './page-meal-routing.module';
import { PageMealComponent } from './page-meal.component';
import {SharedModule} from "../shared/shared.module";
import {FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    PageMealComponent
  ],
  imports: [
    CommonModule,
    PageMealRoutingModule,
    SharedModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PageMealModule { }

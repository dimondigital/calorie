import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageMealRoutingModule} from './page-meal-routing.module';
import {PageMealComponent} from './page-meal.component';
import {SharedModule} from "../shared/shared.module";
import {FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {mealFeatureKey, mealsReducer} from "../store/meal/meal.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";


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
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forFeature(mealFeatureKey, mealsReducer),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ]
})
export class PageMealModule {
}

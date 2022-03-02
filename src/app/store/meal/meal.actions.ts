import {createAction, props} from "@ngrx/store";
import {Meal} from "../../model/meal.model";

export enum MealActions {
  AddMeal = '[Meal] Add Meal'
}

export const addMeal = createAction(
  '[Meal] Add Meal +',
  props<Meal>()
);

import {createAction, props} from "@ngrx/store";
import {Meal} from "../../model/meal.model";

export const addMeal = createAction(
  '[Meal] Add Meal +',
  props<{ meal: Meal }>()
);



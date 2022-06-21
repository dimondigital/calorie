import * as fromMeal from './meal.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {mealFeatureKey} from "./meal.reducer";

export const selectMealState = createFeatureSelector<fromMeal.MealsState>(mealFeatureKey);

export const selectMealAll = createSelector(
  selectMealState,
  fromMeal.selectAll
)

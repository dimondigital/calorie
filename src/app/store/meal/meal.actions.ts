import {createAction, props} from "@ngrx/store";
import {Meal} from "../../model/meal.model";
import {Popup} from "../user/user.enums";

// TODO: build type enums for action's strings
export const addMeal = createAction(
  '[Meal] Add Meal +',
  props<{ payload: {meal: Meal} }>()
);

export const showPopup = createAction(
  `[UI] Show Popup`,
  props<{payload: Popup}>()
);

export const calendarMonthChange = createAction(
'[Calendar page] Month Change',
  props<{payload: string}>()
);

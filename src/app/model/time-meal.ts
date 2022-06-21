import {Meal} from "./meal.model";
import {Time} from "@angular/common";

export interface TimeMeal {
  time: Time;
  meal?: Meal;
}

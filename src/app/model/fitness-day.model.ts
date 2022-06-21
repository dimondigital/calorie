import {Meal} from "./meal.model";
import {Rate} from "./rate.model";
import {Time} from "@angular/common";
import {TimeMeal} from "./time-meal";

export interface FitnessDay {
  date: Date;
  kcal: Rate;
  dayTitle: string;
  fats?: Rate;
  proteins?: Rate;
  carbohydrates?: Rate;
  meals?: Meal[];
  hoursSchedule?: TimeMeal[];
}

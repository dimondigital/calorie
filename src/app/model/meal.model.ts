import {Time} from "@angular/common";
import {FitnessDay} from "./fitness-day.model";

export interface Meal {
  title: string;
  kcal: number;
  fats: number;
  proteins: number;
  carbohydrates: number;
  time: Time;
  day: FitnessDay;
  photo?: string;
}

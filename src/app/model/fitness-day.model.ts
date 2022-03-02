import {Meal} from "./meal.model";
import {Rate} from "./rate.model";

export interface FitnessDay {
  date: Date;
  kcal: Rate;
  dayTitle: string;
  fats?: Rate;
  proteins?: Rate;
  carbohydrates?: Rate;
  meals?: Meal[];
}

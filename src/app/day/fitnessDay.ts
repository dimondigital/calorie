import {Time} from "@angular/common";

export interface FitnessDay {
  date: Date;
  kcal: Rate;
  dayTitle: string;
  fats?: Rate;
  proteins?: Rate;
  carbohydrates?: Rate;
  meals?: Meal[];
}

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

export interface Rate {
  current: number,
  norm: number
}

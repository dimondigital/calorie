import {Meal} from "../../model/meal.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {addMeal} from "./meal.actions";


export const mealFeatureKey: string = 'meals';

const initialMeals: Meal[] = [
  {
    title: 'Title #1',
    kcal: 999,
    fats: 888,
    proteins: 777,
    carbohydrates: 666,
    time: {hours: 5, minutes: 0},
    day: {
      date: new Date('2022-03-02T05:00:00'),
      kcal: {current: 120, norm: 350},
      dayTitle: 'курица с мясом',
      fats: {current: 120, norm: 350},
      proteins: {current: 120, norm: 350},
      carbohydrates: {current: 120, norm: 350}
    },
    photo: ''
  },
  {
    title: 'Title #2',
    kcal: 999,
    fats: 888,
    proteins: 777,
    carbohydrates: 666,
    time: {hours: 6, minutes: 0},
    day: {
      date: new Date('2022-03-02T06:00:00'),
      kcal: {current: 120, norm: 350},
      dayTitle: 'курица с мясом',
      fats: {current: 120, norm: 350},
      proteins: {current: 120, norm: 350},
      carbohydrates: {current: 120, norm: 350}
    },
    photo: ''
  },
  {
    title: 'Title #3',
    kcal: 999,
    fats: 888,
    proteins: 777,
    carbohydrates: 666,
    time: {hours: 7, minutes: 0},
    day: {
      date: new Date('2022-03-02T07:00:00'),
      kcal: {current: 120, norm: 350},
      dayTitle: 'курица с мясом',
      fats: {current: 120, norm: 350},
      proteins: {current: 120, norm: 350},
      carbohydrates: {current: 120, norm: 350}
    },
    photo: ''
  }
];

// export interface MealsState {
//   meals: Meal[]
// }

export interface MealsState extends EntityState<Meal> {
  meals: Meal[]
}

export const adapter: EntityAdapter<Meal> = createEntityAdapter<Meal>();

const initialState: MealsState = adapter.getInitialState({
  meals: initialMeals
})

export const mealsReducer = createReducer(
  initialState,
  on(addMeal, (meal, state) => {
    return adapter.addOne(state, meal)
  })
);


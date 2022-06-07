import {Meal} from "../../model/meal.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {addMeal} from "./meal.actions";


export const mealFeatureKey: string = 'meals';

const initialMeals: Meal[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

export interface MealsState extends EntityState<Meal>  {
  // ids: Meal[];
}

// sortComparer
export function sortByCategory(ob1: Meal, ob2: Meal): number {
  return ob1.title.localeCompare(ob2.title);
}

export const adapter: EntityAdapter<Meal> = createEntityAdapter<Meal>({
  sortComparer: sortByCategory,
  selectId: meal => meal.id
});

const initialState: MealsState = adapter.getInitialState({
  meals: initialMeals
})

export const mealsReducer = createReducer(
  initialState,
  on(addMeal, (state, {payload}) => adapter.addOne(payload.meal, state))
);

// SELECTORS
// export const {
//   selectIds: selectArticleIds,
//   selectEntities: selectArticleEntities,
//   selectAll: selectAllArticles,
//   selectTotal: articlesCount
// } = adapter.getSelectors();


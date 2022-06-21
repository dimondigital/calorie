import {Meal} from "../../model/meal.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {addMeal} from "./meal.actions";


export const mealFeatureKey: string = 'meals';

const initialMeals: Meal[] = [
  {
    id: '1',
    title: 'курица с мясом1',
    kcal: 999,
    fats: 888,
    proteins: 777,
    carbohydrates: 666,
    time: {hours: 5, minutes: 0},
    day: {
      date: new Date('2022-06-20T05:00:00'),
      kcal: {current: 120, norm: 350},
      dayTitle: 'курица с мясом',
      fats: {current: 120, norm: 350},
      proteins: {current: 120, norm: 350},
      carbohydrates: {current: 120, norm: 350}
    },
    photo: ''
  },
  {
    id: '2',
    title: 'курица с мясом2',
    kcal: 999,
    fats: 888,
    proteins: 777,
    carbohydrates: 666,
    time: {hours: 6, minutes: 0},
    day: {
      date: new Date('2022-06-21T06:00:00'),
      kcal: {current: 120, norm: 350},
      dayTitle: 'курица с мясом',
      fats: {current: 120, norm: 350},
      proteins: {current: 120, norm: 350},
      carbohydrates: {current: 120, norm: 350}
    },
    photo: ''
  },
  {
    id: '3',
    title: 'курица с мясом3',
    kcal: 999,
    fats: 888,
    proteins: 777,
    carbohydrates: 666,
    time: {hours: 7, minutes: 0},
    day: {
      date: new Date('2022-06-22T07:00:00'),
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
  selectedMealId: string | null;
  // ids: Meal[];
}

// sortComparer
export function sortByCategory(ob1: Meal, ob2: Meal): number {
  return ob1.title.localeCompare(ob2.title);
}

export const adapter: EntityAdapter<Meal> = createEntityAdapter<Meal>({
  selectId: selectMealId,
  sortComparer: sortByCategory
});

export function selectMealId(m: Meal): string {
  return m.id;
}

const initialState: MealsState = adapter.getInitialState({
  selectedMealId: null
});

const filledState = adapter.upsertMany(initialMeals, initialState);

export const { selectAll, selectEntities } = adapter.getSelectors();

export const mealsReducer = createReducer(
  filledState,
  on(addMeal, (state, {meal}) => adapter.addOne(meal, state))
);

// SELECTORS
// export const {
//   selectIds: selectArticleIds,
//   selectEntities: selectArticleEntities,
//   selectAll: selectAllArticles,
//   selectTotal: articlesCount
// } = adapter.getSelectors();


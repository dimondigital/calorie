import {AppTheme, Gender} from "./user.enums";
import {createReducer, on} from "@ngrx/store";
import {appThemeToggle, saveSettings} from "./user.actions";

export const userFeatureKey: string = 'user';

export interface UserState {
  gender: Gender | undefined;
  weight: number | undefined;
  height: number | undefined;
  minkcal: number | undefined;
  maxkcal: number | undefined;
  fats: number | undefined;
  proteins: number | undefined;
  carbohydrates: number | undefined;
  appTheme: AppTheme;
}

const initialState: UserState = {
  gender: Gender.FEMALE,
  weight: undefined,
  height: undefined,
  minkcal: undefined,
  maxkcal: undefined,
  fats: undefined,
  proteins: undefined,
  carbohydrates: undefined,
  appTheme: AppTheme.LIGHT
}

export const userReducer = createReducer(
  initialState,
  on(appThemeToggle, (state, {payload}) => ({...state, ...payload, appTheme: Number(!(state.appTheme))})),
  on(saveSettings, (state, {payload}) => ({...state, ...payload}))
);

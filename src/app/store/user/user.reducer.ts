import {AppTheme} from "./app-theme";
import {createReducer, on} from "@ngrx/store";
import {appThemeToggle} from "./user.actions";

export interface UserState {
  appTheme: number;
}

export const initialState: UserState = {
  appTheme: AppTheme.LIGHT
}

export const userFeatureKey: string = 'user';

export const userReducer = createReducer(
  initialState,
  on(appThemeToggle, state => ({...state, appTheme: Number(!(state.appTheme))}))
);

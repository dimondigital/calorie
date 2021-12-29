import {AppTheme} from "./app-theme";
import {Action, createReducer, on} from "@ngrx/store";
import {appThemeToggle} from "./user.actions";

export interface State {
  appTheme: number;
}

export const initialState: State = {
  appTheme: AppTheme.LIGHT
}

export const userReducer = createReducer(
  initialState,
  on(appThemeToggle, state => ({...state, appTheme: Number(!(state.appTheme))}))
);

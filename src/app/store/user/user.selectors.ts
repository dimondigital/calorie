import {UserState} from "./user.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserTheme = createSelector(
  selectUserState,
  (userState: UserState) => !!userState.appTheme
);

export const selectUserGender = createSelector(
  selectUserState,
  (userState: UserState) => userState.gender
);





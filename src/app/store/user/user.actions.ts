import {createAction, props} from "@ngrx/store";
import {UserState} from "./user.reducer";

export const appThemeToggle = createAction(`[App Theme] Toggle`);
export const saveSettings = createAction(`[Settings] Saved`, props<{payload: UserState}>());


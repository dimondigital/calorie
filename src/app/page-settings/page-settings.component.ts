import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {appThemeToggle, saveSettings} from "../store/user/user.actions";
import {selectUserState, selectUserTheme} from "../store/user/user.selectors";
import {UserState} from "../store/user/user.reducer";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.scss']
})
export class PageSettingsComponent {

  public genderToggle: boolean = false;
  public theme$: Observable<boolean> = this.store.select(selectUserTheme);
  //@ts-ignore
  public userState: UserState;
  //@ts-ignore
  public settingsForm: FormGroup;

  constructor(
    private store: Store<UserState>,
    private fb: FormBuilder
  ) {

    this.store.select(selectUserState)
      .subscribe((userState: UserState) => {
        this.userState = Object.assign({}, userState);
        this.initForm();
      })
  }

  private initForm(): void {
    this.settingsForm = this.fb.group({
      gender: [this.userState.gender],
      weight: [this.userState.weight],
      height: [this.userState.height],
      minkcal: [this.userState.minkcal],
      maxkcal: [this.userState.maxkcal],
      fats: [this.userState.fats],
      proteins: [this.userState.proteins],
      carbohydrates: [this.userState.carbohydrates]
    });
  }

  public themeSwitch(): void {
    this.store.dispatch(appThemeToggle({payload: this.settingsForm.value}))
  }

  public onSubmit(): void {
    console.log(this.settingsForm.value);
    this.store.dispatch(saveSettings({payload: this.settingsForm.value}));
  }

  public calculateRateForDay(): void {}

}

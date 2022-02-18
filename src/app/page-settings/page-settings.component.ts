import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {appThemeToggle} from "../store/user/user.actions";

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.scss']
})
export class PageSettingsComponent {

  public genderToggle: boolean = false;

  constructor(
    private store: Store
  ) {
  }

  public themeSwitch(): void {
    this.store.dispatch(appThemeToggle())
  }

}

import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {appThemeToggle} from "../store/user/user.actions";
import {selectUserTheme} from "../store/user/user.selectors";
import {UserState} from "../store/user/user.reducer";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.scss']
})
export class PageSettingsComponent {

  public genderToggle: boolean = false;
  public theme$: Observable<boolean> = this.store.select(selectUserTheme);
  // public t: any;

  constructor(
    private store: Store<UserState>
  ) {

  }

  public themeSwitch(): void {
    // this.store.select(selectUserTheme).subscribe((data) => {
    //   console.log(data);
    // })

    this.store.dispatch(appThemeToggle())
  }

}

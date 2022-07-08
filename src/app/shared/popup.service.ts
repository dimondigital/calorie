import {Injectable} from '@angular/core';
import {Action, ActionsSubject, Store} from "@ngrx/store";
import {filter} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {MonthPopupComponent} from "./month-popup/month-popup.component";
import {calendarMonthChange} from "../store/meal/meal.actions";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  monthPopup: any;

  constructor(
    private actions$: ActionsSubject,
    public dialog: MatDialog,
    private store: Store
  ) {

    this.actions$.pipe(
      filter((action: Action) => action.type === '[UI] Show Popup')
    ).subscribe((action: Action) => {
      this.openMonthDialog();
    });

  }

  openMonthDialog(): void {
    this.monthPopup = this.dialog.open(MonthPopupComponent);
    this.monthPopup.afterClosed().subscribe((chosenMonth: string) => {
      console.log(`chosenMonth: ${chosenMonth}`);
      this.store.dispatch(calendarMonthChange({payload: chosenMonth}))
    })
  }

  ngOnInit(): void {


  }
}

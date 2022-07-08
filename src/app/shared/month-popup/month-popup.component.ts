import { Component, OnInit } from '@angular/core';
import {APopupComponent} from "../a-popup/a-popup.component";
import {MatDialogRef} from "@angular/material/dialog";
import {getMonthList} from "../../utils/date.utils";

@Component({
  selector: 'app-month-popup',
  templateUrl: './month-popup.component.html',
  styleUrls: ['./month-popup.component.scss']
})
export class MonthPopupComponent extends APopupComponent implements OnInit {

  public months: string[] = [];

  constructor(public dialogRef: MatDialogRef<MonthPopupComponent>) {
    super();
  }

  ngOnInit(): void {
    this.months = getMonthList();
  }

  chooseMonth(month: string): void {
    // console.log(`x: ${month}`);
    this.dialogRef.close(month);
  }

}

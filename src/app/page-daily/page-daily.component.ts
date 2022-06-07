import {Component, OnInit} from '@angular/core';
import {FitnessDay} from "../model/fitness-day.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-page-daily',
  templateUrl: './page-daily.component.html',
  styleUrls: ['./page-daily.component.scss']
})
export class PageDailyComponent implements OnInit {

  day: FitnessDay;
  isToday: boolean;

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    //@ts-ignore
    this.day = this.location.getState().day;
    console.log(`this.day.date.getDate(): ${this.day.date.getDate()}`);
    console.log(`Date.now(): ${Date.now()}`)
    this.isToday = this.day.date.getDate() === new Date(Date.now()).getDate();
  }

}

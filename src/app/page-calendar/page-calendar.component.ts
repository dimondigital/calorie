import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {getDayName, getDaysInMonthUTC, getMonthList, getMonthName} from "../utils/date.utils";
import {FitnessDay} from "../day/fitnessDay";
import {Time} from "@angular/common";

@Component({
  selector: 'app-page-calendar',
  templateUrl: './page-calendar.component.html',
  styleUrls: ['./page-calendar.component.scss', '../app.component.scss']
})
export class PageCalendarComponent implements OnInit {

  public months: string[] = [];
  public currentMonth: string = '';
  public currentMonthDays: FitnessDay[] = [];
  public hoursSchedule: Time[] = [];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('/assets/settings.svg'));
  }

  ngOnInit(): void {
    const now: Date = new Date();
    this.months = getMonthList();
    this.currentMonth = getMonthName(now);
    this.currentMonthDays = this.getFitnessDays(now);
    for(let i=0; i<24; i++) {
      this.hoursSchedule.push({hours: i, minutes: 0})
    }
    console.log(this.currentMonth);
    console.log(this.currentMonthDays);
  }

  getFitnessDays(now: Date): FitnessDay[] {
    let days: Date[] = getDaysInMonthUTC(now.getUTCMonth(), now.getUTCFullYear());
    let fitnessDays: FitnessDay[] = [];
    for (let d of days) {
      fitnessDays.push({
        date: d,
        kcal: {current: 1000, norm: 2000},
        dayTitle: getDayName(d)
      })
    }
    return fitnessDays;
  }


}

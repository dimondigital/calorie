import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {getDayName, getDaysInMonthUTC, getMonthList, getMonthName} from "../utils/date.utils";
import {FitnessDay} from "../model/fitness-day.model";
import {Time} from "@angular/common";
import {Observable} from "rxjs";
import {Meal} from "../model/meal.model";
import {select, Store} from "@ngrx/store";
import {selectMealAll} from "../store/meal/meal.selectors";
import {TimeMeal} from "../model/time-meal";

@Component({
  selector: 'app-page-calendar',
  templateUrl: './page-calendar.component.html',
  styleUrls: ['./page-calendar.component.scss', '../app.component.scss']
})
export class PageCalendarComponent implements OnInit, AfterViewInit {

  public months: string[] = [];
  public currentMonth: string = '';
  public currentDay: number = -1;
  public currentMonthDays: FitnessDay[] = [];
  public calendarDayHours: Time[] = [];
  public existingMeals$: Observable<Meal[]>;
  @ViewChild('wrapperDays') wrapperDays!: ElementRef;
  @ViewChild('wrapperSchedule') wrapperSchedule!: ElementRef;
  @ViewChild('wrapperHours') wrapperHours!: ElementRef;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private store: Store
  ) {
    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('/assets/settings.svg'));
    iconRegistry.addSvgIcon('settings-biceps', sanitizer.bypassSecurityTrustResourceUrl('/assets/settings-biceps.svg'));

    this.existingMeals$ = this.store.pipe(select(selectMealAll));


  }

  ngOnInit(): void {
    const now: Date = new Date();
    this.months = getMonthList();
    this.currentMonth = getMonthName(now);
    console.log(this.currentMonth);
    this.currentDay = now.getDate();
    // this.currentDay = 30;
    this.currentMonthDays = this.getFitnessDays(now);

    for (let i = 0; i < 24; i++) {
      this.calendarDayHours.push({hours: i, minutes: 0});
    }

    // console.log(this.currentMonth);
    // console.log(this.currentMonthDays);

    this.existingMeals$.subscribe((meals: Meal[]) => {

      // console.log(this.currentMonthDays);
      for (let m of meals) {
        for (let cmd of this.currentMonthDays) {
          let hoursSchedule: TimeMeal[] = [];
          for (let i = 0; i < 24; i++) {
            hoursSchedule.push({time: {hours: i, minutes: 0}});
          }
          // filling each day with hours schedule
          if (!cmd.hoursSchedule) cmd.hoursSchedule = [...hoursSchedule];
          if (this.daysFits(m.day.date, cmd.date)) {
            if (!cmd.meals) cmd.meals = [];
            cmd.meals.push(m);
            //filling each hour with existing meal
            for (let hs of cmd.hoursSchedule) {
              if (hs.time.hours === m.time.hours) {
                console.log('m');
                hs.meal = m;
              }
            }
          }

        }
      }


      for (let cmd of this.currentMonthDays) {
        if (cmd.hoursSchedule) {
          for (let hs of cmd.hoursSchedule) {
            if (hs.meal) {
              console.log(`hs.meal: ${hs.meal.title}`);
            }
          }
        }
      }
    });
  }

  daysFits(d1: Date, d2: Date) {
    if (d1.toDateString() === d2.toDateString()) {
      // console.info(`d1.ts: ${d1.toString()} -- d2: ${d2.toString()}`);
    }
    return d1.toDateString() === d2.toDateString();
  }

  ngAfterViewInit() {
    //TODO: remove listeners
    const wrDays = this.renderer.listen(this.wrapperDays.nativeElement, 'scroll', (evt) => {
      this.wrapperSchedule.nativeElement.scrollLeft = evt.target.scrollLeft;
    });

    const wrHours = this.renderer.listen(this.wrapperHours.nativeElement, 'scroll', (evt) => {
      this.wrapperSchedule.nativeElement.scrollTop = evt.target.scrollTop;
    });

    const wrSchedule = this.renderer.listen(this.wrapperSchedule.nativeElement, 'scroll', (evt) => {
      this.wrapperDays.nativeElement.scrollLeft = evt.target.scrollLeft;
      this.wrapperHours.nativeElement.scrollTop = evt.target.scrollTop;
    });
    // centering schedule and wrapperDays by current day
    this.wrapperDays.nativeElement.scrollLeft = (this.wrapperDays.nativeElement.scrollWidth / this.currentMonthDays.length) * (this.currentDay - 4);
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

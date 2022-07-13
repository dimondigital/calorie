import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {getDayName, getDaysInMonthUTC, getMonthName} from "../utils/date.utils";
import {FitnessDay} from "../model/fitness-day.model";
import {Time} from "@angular/common";
import {Observable} from "rxjs";
import {Meal} from "../model/meal.model";
import {ActionsSubject, select, Store} from "@ngrx/store";
import {selectMealAll} from "../store/meal/meal.selectors";
import {TimeMeal} from "../model/time-meal";
import {Popup} from "../store/user/user.enums";
import {showPopup} from "../store/meal/meal.actions";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-page-calendar',
  templateUrl: './page-calendar.component.html',
  styleUrls: ['./page-calendar.component.scss', '../app.component.scss']
})
export class PageCalendarComponent implements OnInit, AfterViewInit {

  // public months: string[] = [];
  public currentMonth: string = '';
  public currentDay: number = -1;
  public currentMonthDays: FitnessDay[] = [];
  public calendarDayHours: Time[] = [];
  public existingMeals$: Observable<Meal[]>;

  private dailyScheduleHourFloorLimit: number = 7;
  private dailyScheduleHourCeilLimit: number = 21;

  @ViewChild('wrapperDays') wrapperDays!: ElementRef;
  @ViewChild('wrapperSchedule') wrapperSchedule!: ElementRef;
  @ViewChild('wrapperHours') wrapperHours!: ElementRef;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private store: Store,
    private actions$: ActionsSubject
  ) {
    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('/assets/settings.svg'));
    iconRegistry.addSvgIcon('settings-biceps', sanitizer.bypassSecurityTrustResourceUrl('/assets/settings-biceps.svg'));

    this.existingMeals$ = this.store.pipe(select(selectMealAll));


  }

  ngOnInit(): void {
    const now: Date = new Date();
    this.currentMonth = getMonthName(now);
    this.currentDay = now.getDate();
    this.currentMonthDays = this.getFitnessDays(now);

    for (let i = 0; i < 24; i++) {
      if (i > this.dailyScheduleHourFloorLimit && i < this.dailyScheduleHourCeilLimit) {
        this.calendarDayHours.push({hours: i, minutes: 0});
      }
    }

    this.existingMeals$.subscribe((meals: Meal[]) => {
      for (let m of meals) {
        for (let cmd of this.currentMonthDays) {
          let hoursSchedule: TimeMeal[] = [];
          for (let i = 0; i < 24; i++) {
            if (i > this.dailyScheduleHourFloorLimit && i < this.dailyScheduleHourCeilLimit) {
              hoursSchedule.push({time: {hours: i, minutes: 0}});
            }
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

    this.actions$.pipe(
      filter((action) => action.type === '[Calendar page] Month Change')
    ).subscribe((action: any) => {
      // console.log(`action: ${action}`);
      this.currentMonth = action.payload;
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

  showMonthListPopup(): void {
    this.store.dispatch(showPopup({payload: Popup.CHOOSE_MONTH}));
  }


}

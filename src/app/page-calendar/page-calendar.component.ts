import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
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
export class PageCalendarComponent implements OnInit, AfterViewInit {

  public months: string[] = [];
  public currentMonth: string = '';
  public currentMonthDays: FitnessDay[] = [];
  public hoursSchedule: Time[] = [];
  @ViewChild('wrapperDays') wrapperDays!: ElementRef;
  @ViewChild('wrapperSchedule') wrapperSchedule!: ElementRef;
  @ViewChild('wrapperHours') wrapperHours!: ElementRef;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private renderer: Renderer2) {
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

  ngAfterViewInit() {
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

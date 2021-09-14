import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCalendarRoutingModule } from './page-calendar-routing.module';
import { PageCalendarComponent } from './page-calendar.component';


@NgModule({
  declarations: [
    PageCalendarComponent
  ],
  imports: [
    CommonModule,
    PageCalendarRoutingModule
  ]
})
export class PageCalendarModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageCalendarRoutingModule} from './page-calendar-routing.module';
import {PageCalendarComponent} from './page-calendar.component';
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageCalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageCalendarRoutingModule,
    FlexModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class PageCalendarModule {
}

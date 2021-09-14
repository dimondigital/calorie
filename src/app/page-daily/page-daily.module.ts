import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageDailyRoutingModule } from './page-daily-routing.module';
import { PageDailyComponent } from './page-daily.component';


@NgModule({
  declarations: [
    PageDailyComponent
  ],
  imports: [
    CommonModule,
    PageDailyRoutingModule
  ]
})
export class PageDailyModule { }

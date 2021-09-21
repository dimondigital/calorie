import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageDailyRoutingModule } from './page-daily-routing.module';
import { PageDailyComponent } from './page-daily.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageDailyComponent
  ],
    imports: [
        CommonModule,
        PageDailyRoutingModule,
        SharedModule
    ]
})
export class PageDailyModule { }

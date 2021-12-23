import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageDailyRoutingModule } from './page-daily-routing.module';
import { PageDailyComponent } from './page-daily.component';
import {SharedModule} from "../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    PageDailyComponent
  ],
  imports: [
    CommonModule,
    PageDailyRoutingModule,
    SharedModule,
    MatFormFieldModule,
    FlexModule,
    MatInputModule
  ]
})
export class PageDailyModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClosePageButtonComponent} from './close-page-button/close-page-button.component';
import {RouterModule} from "@angular/router";
import { APopupComponent } from './a-popup/a-popup.component';
import { MonthPopupComponent } from './month-popup/month-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    ClosePageButtonComponent,
    APopupComponent,
    MonthPopupComponent
  ],
  exports: [
    ClosePageButtonComponent,
    APopupComponent,
    MonthPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FlexModule
  ]
})
export class SharedModule {
}

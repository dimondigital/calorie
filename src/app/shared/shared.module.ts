import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClosePageButtonComponent} from './close-page-button/close-page-button.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ClosePageButtonComponent
  ],
  exports: [
    ClosePageButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

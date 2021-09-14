import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSettingsRoutingModule } from './page-settings-routing.module';
import { PageSettingsComponent } from './page-settings.component';


@NgModule({
  declarations: [
    PageSettingsComponent
  ],
  imports: [
    CommonModule,
    PageSettingsRoutingModule
  ]
})
export class PageSettingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSettingsRoutingModule } from './page-settings-routing.module';
import { PageSettingsComponent } from './page-settings.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageSettingsComponent
  ],
  imports: [
    CommonModule,
    PageSettingsRoutingModule,
    SharedModule
  ]
})
export class PageSettingsModule { }

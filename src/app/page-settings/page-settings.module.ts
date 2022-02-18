import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSettingsRoutingModule } from './page-settings-routing.module';
import { PageSettingsComponent } from './page-settings.component';
import {SharedModule} from "../shared/shared.module";
import {FlexModule} from "@angular/flex-layout";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    PageSettingsComponent
  ],
  imports: [
    CommonModule,
    PageSettingsRoutingModule,
    SharedModule,
    FlexModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ]
})
export class PageSettingsModule { }

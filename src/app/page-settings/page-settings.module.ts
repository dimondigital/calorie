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
import {StoreModule} from "@ngrx/store";
import {userFeatureKey, userReducer} from "../store/user/user.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";


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
    MatSlideToggleModule,
    StoreModule.forFeature(userFeatureKey, userReducer),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ]
})
export class PageSettingsModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from './shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {userState} from "./store/user/user.selectors";
import {userReducer} from "./store/user/user.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(userState, userReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

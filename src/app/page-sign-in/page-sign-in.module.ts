import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSignInRoutingModule } from './page-sign-in-routing.module';
import { PageSignInComponent } from './page-sign-in.component';


@NgModule({
  declarations: [
    PageSignInComponent
  ],
  imports: [
    CommonModule,
    PageSignInRoutingModule
  ]
})
export class PageSignInModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCalendarComponent } from './page-calendar.component';

const routes: Routes = [{ path: '', component: PageCalendarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCalendarRoutingModule { }

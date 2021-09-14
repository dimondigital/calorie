import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDailyComponent } from './page-daily.component';

const routes: Routes = [{ path: '', component: PageDailyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDailyRoutingModule { }

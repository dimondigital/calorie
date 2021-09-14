import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSettingsComponent } from './page-settings.component';

const routes: Routes = [{ path: '', component: PageSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSettingsRoutingModule { }

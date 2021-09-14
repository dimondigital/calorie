import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'sign-in', loadChildren: () => import('./page-sign-in/page-sign-in.module').then(m => m.PageSignInModule)},
  {path: 'calendar', loadChildren: () => import('./page-calendar/page-calendar.module').then(m => m.PageCalendarModule)},
  {path: 'settings', loadChildren: () => import('./page-settings/page-settings.module').then(m => m.PageSettingsModule)},
  {path: 'meal', loadChildren: () => import('./page-meal/page-meal.module').then(m => m.PageMealModule)},
  {path: 'daily', loadChildren: () => import('./page-daily/page-daily.module').then(m => m.PageDailyModule)},
  {path: '**', redirectTo: 'calendar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

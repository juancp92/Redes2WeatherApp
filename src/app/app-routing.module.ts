import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';

const routes: Routes = [
  {path: '', component: LocalForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

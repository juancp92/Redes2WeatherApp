import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    LocalForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

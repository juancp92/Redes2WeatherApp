import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {
  //Define coordenates variables
  lat: number;
  lng: number;
  forecast: Observable<any>;

  //Subcription to the service
  constructor(private weather: WeatherService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      //Get the location from the browser
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      //If can´t get location, use Rosario´s as default
      this.lat = -32.94;
      this.lng = -60.65;
    }
  }
  
  //Function to invoke method from service to get forecast
  getForecast() {
    this.forecast = this.weather.currentForecast(this.lat, this.lng);
      this.forecast.subscribe(data => console.log(data));
  }

  weatherIcon(icon) {
        switch (icon) {
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy';
      case 'clear-day':
        return 'wi wi-day-sunny';
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy';
      default:
        return `wi wi-day-sunny`;
  }
}
}

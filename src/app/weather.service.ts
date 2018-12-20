import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  //URL of the Firebase Function to get the weather forecast
  readonly ROOT_URL = 'https://us-central1-net2weatherapp.cloudfunctions.net/darkSkyProxy';

  constructor(private http: HttpClient) { }
  
  //Function to pass the parameters and get the forecast
  currentForecast(lat: number, lng: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('lat', lat.toString());
    params = params.set('lng', lng.toString());
    return this.http.get(this.ROOT_URL, { params });
  }

}

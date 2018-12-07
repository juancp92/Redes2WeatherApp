import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly ROOT_URL = 'https://us-central1-net2weatherapp.cloudfunctions.net/darkSkyProxy';

  constructor(private http: HttpClient) { }

  currentForecast(lat: number, lng: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('lat', lat.toString());
    params = params.set('lng', lng.toString());
    console.log(this.ROOT_URL, params);
    return this.http.get(this.ROOT_URL, { params });
  }

}

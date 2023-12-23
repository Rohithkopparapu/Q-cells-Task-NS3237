import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsiServiceService {

  constructor(private http:HttpClient){}
getWeatherDeatils():Observable<any>
{
  return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0197ad4bf748ed60c5abe848130d305e').pipe(map((response) => {
    return response;
  }));
}
}

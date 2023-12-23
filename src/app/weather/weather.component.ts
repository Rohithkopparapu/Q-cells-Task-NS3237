import { Component, OnInit } from '@angular/core';
import { OsiServiceService } from '../osi-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentDate = moment();
  dayOfWeek = this.currentDate.format('ddd'); // Day of the week (e.g., Monday)
  date = this.currentDate.format('DD/mm/yy')
  formattedTime = this.currentDate.format('HH:mm A'); // C
  location!:any;
  currentTemp!:any;
  minTemp!:any;
  maxTemp!:any;
  tempratureRef!:any;
  nextTwoDays:any;
  sunriseTime!:any;
  sunsetTime!:any;
  constructor(private service: OsiServiceService) { }
  ngOnInit(): void {
    this.service.getWeatherDeatils().subscribe((data) => {
    this.location=data.name;
    this.currentTemp=data.main.temp;
    this.minTemp=data.main.temp_min;
    this.maxTemp=data.main.temp_max;
    if (this.currentTemp >= this.minTemp && this.currentTemp <= this.maxTemp) {
     this.tempratureRef='Mostly Sunny'
    } else if (this.currentTemp < this.minTemp) {
      this.tempratureRef='Mostly Cool'
    } 
    const utcTimestamp = data.sys.sunrise; // Replace with your timestamp
    const utcMilliseconds = utcTimestamp * 1000; // Convert seconds to milliseconds
    const utcDate = new Date(utcMilliseconds);
    const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);
    const istTimeString = istDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const dateString = istTimeString;
    const istMoment = moment(dateString, "DD/MM/YYYY, h:mm:ss a").utcOffset('+05:30');
    const istTimeString2= istMoment.format('h:mm A');
    this.sunriseTime=istTimeString2;

     const utcTimestamp1 = data.sys.sunset; // Replace with your timestamp
    const utcMilliseconds1 = utcTimestamp1 * 1000; // Convert seconds to milliseconds
    const utcDate1 = new Date(utcMilliseconds1);
    const istDate1 = new Date(utcDate1.getTime() + 5.5 * 60 * 60 * 1000);
    const istTimeString1 = istDate1.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const dateString1 = istTimeString1;
    const istMoment1= moment(dateString1, "DD/MM/YYYY, h:mm:ss a").utcOffset('+05:30');
    const istTimeString3= istMoment1.format('h:mm A');
    this.sunsetTime=istTimeString3;
    
    })
   
    

    this.nextTwoDays = [1, 2].map(offset => {
      const nextDate = moment().add(offset, 'days');
      return {
        dayOfWeek: nextDate.format('ddd'),
        date: nextDate.format('DD/MM/YY'),
        formattedTime: nextDate.format('hh:mm A')
      };
      
  })
  

}
}

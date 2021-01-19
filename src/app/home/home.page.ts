import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  list:any;
  constructor(private weatherService:WeatherService) { 
    this.loadWeather()
  }
  ngOnInit() {}


  
loadWeather()
{
this.weatherService.getNews("top-headlines?country=us").subscribe(news=>{
  this.list=news['list'];
  console.log(this.list);
})
}

}

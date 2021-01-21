import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators } from "@angular/forms";






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  weather:any;
  city:any;
 constructor(public http:HttpClient,private weatherService: WeatherService, private ionicStorage: Storage){}
 ngOnInit() {
   this.getWeather();
 }
 public weatherForm = new FormGroup({
   city: new FormControl('', Validators.required),
 });
 

 search(formData: FormData){
   console.log(formData);
   this.ionicStorage.set("city", formData["city"]);
   
   this.weatherService.getWeatherFromApi(formData["city"]).subscribe( weather => {
     this.weather = weather;
     console.log(weather);
   })

 }

 getWeather(){
   this.ionicStorage.get("city").then( city => {
     if(city === null){
       this.weatherService.getWeatherFromApi("johannesburg").subscribe( weather => {
         this.weather = weather;
         console.log(weather);
       })
     }else{
       this.weatherService.getWeatherFromApi(city).subscribe( weather => {
         this.weather = weather;
         console.log(weather);
       });
     }

   }).catch(err =>{
     console.log(err);
   })

}



}


import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL=environment.API_URL;
const API_KEY=environment.API_KEY;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getNews(url)
  {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`)
  }

}


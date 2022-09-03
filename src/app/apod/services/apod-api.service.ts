import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APOD } from '../model/apod.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  public url = 'https://api.nasa.gov/planetary/apod?api_key=IJsmUPP0D9kr1s10aUbDqDLHU0ztJxOiZwXAyGRI';

  constructor( private http:HttpClient ) { }

  getAPOD(): Observable<APOD> {
    return this.http.get<APOD>(this.url);
  } ;
}

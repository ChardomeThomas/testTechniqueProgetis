import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { asteroidsList } from '../model/asteroide.model';

@Injectable({
  providedIn: 'root'
})
export class AsteroideApiService {


  constructor( 
    private http:HttpClient,
    ) { }
    
    
  getAste(startDay: string, endDay: string): Observable<asteroidsList> {
    console.log(startDay);
    console.log(endDay);
    
    return this.http.get<asteroidsList>(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDay}&end_date=${endDay}&api_key=IJsmUPP0D9kr1s10aUbDqDLHU0ztJxOiZwXAyGRI`
    );
  } ;
  
}

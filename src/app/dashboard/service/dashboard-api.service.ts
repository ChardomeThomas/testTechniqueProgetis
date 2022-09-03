import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../model/dashboard.model';
@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  constructor(
    private http:HttpClient,
  ) { }

  getPhoto(): Observable<Photo> {
    return this.http.get<Photo>(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=IJsmUPP0D9kr1s10aUbDqDLHU0ztJxOiZwXAyGRI`
    );
}
}

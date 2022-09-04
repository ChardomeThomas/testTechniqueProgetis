import { Component, OnInit } from '@angular/core';
import { APOD } from './model/apod.model';
import { NasaApiService } from 'src/app/apod/services/apod-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css'],
})
export class APODComponent implements OnInit {
  apod: APOD = null;

  constructor(
    private nasaApiService: NasaApiService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getApod();
  }

  getApod() {
    this.nasaApiService.getAPOD().subscribe((picture) => {
      this.apod = picture;
      console.log(picture);
    });
  }
}

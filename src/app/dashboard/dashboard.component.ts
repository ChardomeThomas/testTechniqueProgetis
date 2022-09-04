import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RootObject, Photo } from './model/dashboard.model';
import { DashboardApiService } from './service/dashboard-api.service';
import { FormBuilder } from '@angular/forms';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  rov = 'Curiosity';
  rootobject: any = [];
  photo: Photo[][] = [];
  startDate = new Date(2000, 0, 1);
  constructor(
    private httpClient: HttpClient,
    private dashboardApiService: DashboardApiService
  ) {}
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit(): void {}
  row: any;
  mrChange = '';
  rover = 'Curiosity';

  onChange(mrChange: MatRadioChange) {
    let rover = mrChange.value;
    this.getInfos(rover);
  }

  //tentative de call api avec Date en plus du rover
  //  sDate = "";
  //  debut="";
  //  getDate(Datedebut: HTMLInputElement){
  //   this.sDate = Datedebut.value;
  //   console.log(this.sDate);
  //   const [ monthStart, dayStart, yearStart] = this.sDate.split('/');
  //   this.debut = [yearStart, monthStart, dayStart].join('-');
  //   console.log(this.debut);
  //   this.getInfos(this.debut);
  // }

  // impossible d'avoir des infos de spirit et de curiosity en même temps car spirit s'est arrêté en 2010 tandis que
  // a commencé en 2012
  getInfos(rover: string) {
    this.dashboardApiService.getPhoto(rover).subscribe((phot) => {
      this.rootobject = phot;
      this.photo = Object.keys(this.rootobject.photos).map((key) => {
        return this.rootobject.photos[key];
      });
    });
  }
}
export class DatepickerStartViewExample {}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photo } from './model/dashboard.model';
import { DashboardApiService } from './service/dashboard-api.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // photo: Photo = null;
  
  photo: Photo = {id: null, sol:null, camera:null, img_src:null,  earth_date:null, rover:null} ;;
  // Photos: Photo[][] = [];
  constructor(
    private httpClient: HttpClient,
    private dashboardApiService: DashboardApiService
  ) { }

  ngOnInit(): void {
    this.getInfos();
  }

  getInfos(){
    this.dashboardApiService.getPhoto().subscribe((photo) => { this.photo = photo; console.log(photo)})
  }

  // getInfos(){
    // this.dashboardApiService.getPhoto().subscribe(photo => {
      //  this.photo = photo;
        // console.log(photo);
        // this.Photos=Object.keys(this.photo.camera).map(key => {
        //   return this.photo.camera[key];
        // } )
        
      // })
  // }
}

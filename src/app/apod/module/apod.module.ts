import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { APODComponent } from '../apod.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    APODComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class NasaAppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { APODComponent } from '../apod.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    DashboardComponent,
    APODComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatCardModule
  ]
})
export class NasaAppModule { }

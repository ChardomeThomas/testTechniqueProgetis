import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { APODComponent } from 'src/app/apod/apod.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AsteroideListComponent } from '../asteroide-list/asteroide-list.component';
import { AsteroideProcheComponent } from '../asteroide-proche/asteroide-proche.component';
import { BrowserModule } from '@angular/platform-browser';


// const routes: Routes = [
//   { path: 'liste_asteroide', component: AsteroideListComponent},
//   { path: 'asteroide_proche', component: AsteroideProcheComponent},
// ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ] ,exports: [RouterModule]
})
export class AsteroideRoutingModule { }

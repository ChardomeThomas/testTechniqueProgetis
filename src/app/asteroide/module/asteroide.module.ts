import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsteroideListComponent } from '../asteroide-list/asteroide-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AsteroideProcheComponent } from '../asteroide-proche/asteroide-proche.component';
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // DashboardComponent,
    // AsteroideListComponent,
    // AsteroideProcheComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
  ]
})
export class AsteroideModule { 
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { NasaAppModule } from './apod/module/apod.module';
import { AsteroideListComponent } from './asteroide/asteroide-list/asteroide-list.component';
import { AsteroideProcheComponent } from './asteroide/asteroide-proche/asteroide-proche.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    AsteroideProcheComponent,
    AsteroideListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatMenuModule,
    // NasaAppModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

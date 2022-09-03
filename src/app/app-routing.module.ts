import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APODComponent } from './apod/apod.component';
import { AsteroideListComponent } from './asteroide/asteroide-list/asteroide-list.component'
import { AsteroideProcheComponent } from './asteroide/asteroide-proche/asteroide-proche.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'astronomy_picture_of_the_day', component: APODComponent},
  { path: 'liste_asteroide', component: AsteroideListComponent},
  { path: 'asteroide_proche', component: AsteroideProcheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

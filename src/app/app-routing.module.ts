import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './pages/artist-details/artist-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'artist/:id', component: ArtistDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [DashboardComponent, ArtistDetailsComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, DashboardComponent, ArtistDetailsComponent]
})
export class AppRoutingModule { }

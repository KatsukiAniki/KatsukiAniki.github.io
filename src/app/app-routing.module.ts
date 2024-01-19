import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'events', component: EventsComponent},
  {path:'teams', component: TeamsComponent},
  { path: '**', redirectTo: '' }, // Wildcard route for navigation fallback

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class AppRoutingModule { }

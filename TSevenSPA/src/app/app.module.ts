import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EventsComponent } from './components/events/events.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    TeamsComponent,
    EventsComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

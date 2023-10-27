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
import { PlayerCardsComponent } from './shared/player-cards/player-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { OutsideClickDirective } from './shared/directive/outside-click-directive.component';

@NgModule({
  declarations: [
    HomeComponent,
    TeamsComponent,
    EventsComponent,
    NavbarComponent,
    LayoutComponent,
    PlayerCardsComponent,
    OutsideClickDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

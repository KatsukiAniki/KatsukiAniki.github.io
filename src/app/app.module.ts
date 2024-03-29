import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EventsComponent } from './components/events/events.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { PlayerCardsComponent } from './shared/player-cards/player-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import {MatIconModule} from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'; 
import { OutsideClickDirective } from './shared/directive/outside-click-directive.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HomeComponent,
    TeamsComponent,
    EventsComponent,
    NavbarComponent,
    LayoutComponent,
    PlayerCardsComponent,
    OutsideClickDirective,
    AboutUsComponent,
    FooterComponent
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
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

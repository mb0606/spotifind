import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';
import { routing } from './app.routes'

import { AppComponent } from './app.component';
import {SearchComponent} from "./components/search.component";

import { SpotifyService } from './services/spotify.service'
import {TrackComponent} from "./components/track.component";
import {ArtistComponent} from "./components/artist.component";

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    SearchComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

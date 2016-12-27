import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-search',
  template: `<h1>search</h1>`,
})
export class SearchComponent {

  constructor(private spotifyService: SpotifyService){

  }
}

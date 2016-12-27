import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-search',
  template: `
    <h1>Search</h1>

 
    <div class="input-group">
      <input 
        #newquery
        [value]="query"
        (keydown.enter)="submit(newquery.value)"
        type="text"
        class="form-control" 
        placeholder="Search for..."/>
      <span class="input-group-btn">
        <button (click)="submit(newquery.value)" class="btn btn-default" type="button">Search</button>
      </span>
     </div><!-- input-group -->
  
  
  
  `
  ,
})
export class SearchComponent {
  query: string;
  results: Object;
  constructor(private spotifyService: SpotifyService){

  }
}

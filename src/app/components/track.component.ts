import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from "../services/spotify.service";

@Component({
  selector: 'app-track',
  template: `
  <div *ngIf="track">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1>{{ track.name }}</h1>
    
        <p>
          <img style="width:100%" src="{{ track.album.images[1].url }}">
        </p>
    
        <p>
          <audio style="width:100%" controls src="{{ track.preview_url }}"></audio>
        </p>
        <hr>
        <h3><a href (click)="back()">< Back</a></h3>
      </div><!-- offset -->
    </div><!-- row -->
  </div><!-- ngIF -->
  
`

})
export class TrackComponent {
  id: string;
  track: Object;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotifyService
        .getTrack(this.id)
        .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    console.log( this.location)
    this.location.back();
  }

  renderTrack(res: any): void {
    // console.log("response from spotify API track with id", res)
    this.track = res;
  }
}
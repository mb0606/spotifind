import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {SpotifyService} from "../services/spotify.service";


@Component({
  selector: 'artist',
  template: `

  <div *ngIf="artist">
    <div class="row">
      <div class="col-md-2 col-sm-2">
        <h1>{{ artist.name }}</h1>
      </div> <!-- col-2 -->
      <div class="col-md-10 col-sm-10">

        <img style="max-height:400px" class="img-circle" src="{{ artist.images[0].url }}">
      </div><!-- col-10 -->
  
      <h3><a href (click)="back()">< Back</a></h3>
    </div><!-- row -->
  </div><!-- ngIf artist -->
  `
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
        .getArtist(this.id)
        .subscribe((res: any) => this.renderArtist(res));
  }

  back(): void {
    this.location.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }
}

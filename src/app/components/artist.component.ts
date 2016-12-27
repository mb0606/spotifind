import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {SpotifyService} from "../services/spotify.service";


@Component({
  selector: 'artist',
  template: `

  <div *ngIf="artist">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">

        <div class="col-md-6 col-sm-6">
          <h1>{{ artist.name }}</h1>
          <div *ngIf="artist.genres">
            <h3>Genres</h3>
            <ul>
              <li *ngFor="let g of artist.genres">{{g}}</li>
            </ul>
          </div>
        </div> <!-- col-2 -->
        <div class="col-md-6 col-sm-6">
  
          <img style="max-height:400px" class="img-circle" src="{{ artist.images[0].url }}">
        </div><!-- col-10 -->
         <hr>
         <h3><a href (click)="back()">< Back</a></h3>
        </div><!-- offset -->
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
    console.log("response from spotify API artist with ID :",res)
    this.artist = res;
  }
}

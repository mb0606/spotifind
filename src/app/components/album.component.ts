import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'album',
  template: `
  <div *ngIf="album">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="col-md-6 col-sm-6">
          <h1>{{ album.name }}</h1>
          <h2>{{ album.artists[0].name }}</h2>
        </div> <!-- col-2 -->
        <div class="col-md-6 col-sm-6">
            <img style="max-height:400px" class="img-circle" src="{{ album.images[1].url }}">
        </div><!-- col-10 -->
  
      
          <h3>Tracks</h3>
          <ol>
            <li *ngFor="let t of album.tracks.items">
              <a [routerLink]="['/tracks', t.id]">
                {{ t.name }}
              </a>
            </li>
          </ol>
          <hr>
          <h3><a href (click)="back()">< Back</a></h3>
      </div><!-- OFFset -->
    </div><!-- row -->
  </div><!-- ngIf artist -->
  `
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Object;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
        .getAlbum(this.id)
        .subscribe((res: any) => this.renderAlbum(res));
  }

  back(): void {
    this.location.back();
  }

  renderAlbum(res: any): void {
    this.album = res;
  }
}

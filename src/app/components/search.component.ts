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
  
    <div *ngIf="results">
      <div *ngIf="!results.length">
        No tracks were found with the term '{{ query }}'
      </div><!-- ngIf message NO TRACKS --> 
      
      <div *ngIf="results.length">
        <h1>Results</h1>
  
        <div class="row">
          <div class="col-sm-6 col-md-4" *ngFor="let t of results"><!-- iterate over results-->
            <div class="thumbnail">
              <div class="content">
                <img src="{{ t.album.images[0].url }}" class="img-responsive">
                <div class="caption">
                  <h3>
                    <a [routerLink]="['/artists', t.artists[0].id]">
                      {{ t.artists[0].name }}
                    </a>
                  </h3>
                  <br>
                  <p>
                    <a [routerLink]="['/tracks', t.id]">
                      {{ t.name }}
                    </a>
                  </p>
                </div><!-- caption -->
                <div class="attribution">
                  <h4>
                    <a [routerLink]="['/albums', t.album.id]">
                      {{ t.album.name }}
                    </a>
                  </h4>
                </div><!--attribution -->
              </div><!-- content-->
            </div><!-- thumbnail -->
          </div><!-- ngFor col-6-sm and 4-md -->
        </div><!-- row -->
      </div><!-- result length-->
    </div> <!-- results ngIF -->
  
  `
  ,
})
export class SearchComponent {
  query: string;
  results: Object;

  constructor(private spotifyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute
            ){
    this.route
        .queryParams
        .subscribe(params => { this.query = params['query'] || ''; });
    }

    ngOnInit(){
      this.search();
    }

    submit(query: string): void {
      this.router.navigate(['search'], { queryParams: { query: query } })
          .then(_ => this.search() );
    }

    search(): void {
      console.log('this.query', this.query);
      if (!this.query) {
        return;
      }

      this.spotifyService
          .searchTrack(this.query)
          .subscribe((res: any) => this.renderResults(res));
    }

    renderResults(res: any): void {
      this.results = null;
      if (res && res.tracks && res.tracks.items) {
        this.results = res.tracks.items;
      }
    }

}

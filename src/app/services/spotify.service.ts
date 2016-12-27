import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/RX'

@Injectable()
export class SpotifyService {

  constructor( private http: Http){

  }
  searchByTrack(query: string){
    let params: string = [`q=${query}`, `type=track` ].join('&');
    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL)
        .map( res => res.json());

  }



}
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/RX'
import {Observable} from "rxjs";

@Injectable()
export class SpotifyService {
  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor( private http: Http){

  }
  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  // All functions will call this.search or this.query and make the http request
  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    // console.log("Track id :", id)
    return this.query(`/tracks/${id}`);
  }
  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }


}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SAMPLE Query request
// {
//   "tracks": {
//   "href": "https://api.spotify.com/v1/search?query=crazy&offset=0&limit=20&type=track",
//       "items": [
//     {
//       "album": {
//         "album_type": "album",
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/7yO4IdJjCEPz7YgZMe25iS"
//             },
//             "href": "https://api.spotify.com/v1/artists/7yO4IdJjCEPz7YgZMe25iS",
//             "id": "7yO4IdJjCEPz7YgZMe25iS",
//             "name": "A$AP Mob",
//             "type": "artist",
//             "uri": "spotify:artist:7yO4IdJjCEPz7YgZMe25iS"
//           }
//         ],
//         "available_markets": [
//           "AD",
//           "AR",
//           "AT",
//
//         ],
//         "external_urls": {
//           "spotify": "https://open.spotify.com/album/3RaACfwYTY9uiDy3VSWLLc"
//         },
//         "href": "https://api.spotify.com/v1/albums/3RaACfwYTY9uiDy3VSWLLc",
//         "id": "3RaACfwYTY9uiDy3VSWLLc",
//         "images": [
//           {
//             "height": 640,
//             "url": "https://i.scdn.co/image/e3a58ff90033a7ead7b9a918b137eedc06da3f4b",
//             "width": 640
//           },
//           {
//             "height": 300,
//             "url": "https://i.scdn.co/image/da255217c614b8cca1a32a018c38395b00444356",
//             "width": 300
//           },
//           {
//             "height": 64,
//             "url": "https://i.scdn.co/image/d9a2d2df83ea0b5af6442bb3ba32e8e7a6bb1f3c",
//             "width": 64
//           }
//         ],
//         []
//     }
//  }
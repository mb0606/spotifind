import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/RX'

@Injectable()
export class SpotifyService {

  constructor( private http: Http){

  }
  searchTrack(query: string){
    let params: string = [`q=${query}`, `type=track` ].join('&');
    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL)
        .map( res => res.json());

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
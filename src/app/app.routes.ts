import {
  RouterModule,
  Routes
} from '@angular/router';
import { SearchComponent } from './components/search.component'
import { TrackComponent } from './components/track.component'
import { ArtistComponent } from "./components/artist.component";
import { AlbumComponent } from "./components/album.component";



const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent},
  { path: 'artists/:id', component: ArtistComponent},
  { path: 'albums/:id', component: AlbumComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
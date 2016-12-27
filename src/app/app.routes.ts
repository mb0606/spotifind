import {
  RouterModule,
  Routes
} from '@angular/router';
import { SearchComponent } from './components/search.component'
import { TrackComponent } from './components/track.component'
import { ArtistComponent } from "./components/artist.component";



const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent},
  { path: 'artists/:id', component: ArtistComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
import {
  RouterModule,
  Routes
} from '@angular/router';
import { SearchComponent } from './components/search.component'
import { TrackComponent } from './components/track.component'



const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
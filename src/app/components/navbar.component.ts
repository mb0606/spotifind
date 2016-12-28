import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><img style="height:40px;" src="http://simpleicon.com/wp-content/uploads/music-note-3.png" alt="music find"></a>
        </div>
        <ul class="nav navbar-nav">
          <li routerLinkActive="active" [routerLink]="['/']" style="cursor: pointer"><a>Home</a></li>
        </ul>
      </div>
    </nav>
   `
})

export class NavbarComponent {



}
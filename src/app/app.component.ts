import { Component } from '@angular/core';

import { appNavLocations } from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLocations = appNavLocations;

}

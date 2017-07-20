import { Component, Output } from '@angular/core';

import { appNavLocations } from './app.routing';
import { Observable } from 'rxjs/Observable';
// import {UserService} from ''

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    sidenavOpen = true;
    navLocations = appNavLocations;

    authenticated: Observable<boolean>;

    // constructor(private user: UserService) { }



    logout() {
        console.log('logout');
        // this.userService.logout();
    }

}

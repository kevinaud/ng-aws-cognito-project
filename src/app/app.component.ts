import { Component, Output } from '@angular/core';

import { appNavLocations } from './app.routing';
import { UserService } from 'ng-aws-cognito';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    sidenavOpen = true;
    navLocations = appNavLocations;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userService.$auth.subscribe((authStatus) => {
            console.log('authStatus', authStatus);  
            this.updateNavLocations(authStatus);
        }); 
    }

    logout() {
        console.log('logout');
        this.userService.logout();
    }

    updateNavLocations(authenticated) {
        for (let i = 0; i < this.navLocations.length; i++) {
            let navLocation = this.navLocations[i];
            let display;
            if (authenticated) {
                display = navLocation.authenticated;
            } else {
                display = navLocation.unauthenticated;
            } 
            navLocation.$display.next(display);
        } 
    }

}

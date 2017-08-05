import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { appNavLocations } from './app.routing';
import { AppWaitingService } from './app-waiting.service';
import { UserService } from 'ng-aws-cognito';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    sidenavOpen = false;
    navLocations = appNavLocations;

    constructor(
        private userService: UserService,
        private appWaiting: AppWaitingService,
        private router: Router
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
        this.router.navigate(['home']);
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

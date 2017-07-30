import { Component, Output } from '@angular/core';

import { appNavLocations } from './app.routing';
import { Observable } from 'rxjs/Observable';
import { UserService, ApiGatewayService } from 'ng-aws-cognito';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    sidenavOpen = true;
    navLocations = appNavLocations;

    authenticated: Observable<boolean>;

    constructor(
        private userService: UserService,
        private apiGateway: ApiGatewayService
    ) { }

    ngOnInit() {
        this.userService.$auth.subscribe((authStatus) => {
            console.log('authStatus', authStatus);  
        }); 
    }

    logout() {
        console.log('logout');
        this.userService.logout();
    }

}

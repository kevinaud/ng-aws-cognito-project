import { Component, OnInit } from '@angular/core';

import { UserService } from 'ng-aws-cognito';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {

    title = "Profile";

    user = null;
    attributes = null;

    constructor(private userService: UserService) {
        this.userService.$user.subscribe((user) => {
            this.user = user; 
        });
    }

    ngOnInit() {
    
        this.attributes = [
            {
                Name: 'Name',
                Value: 'Kevin Aud'
            },
            {
                Name: 'Email',
                Value: 'kevinaud@gmail.com'
            },
            {
                Name: 'Email Verified',
                Value: true
            }
        ]; 
    
    }

}

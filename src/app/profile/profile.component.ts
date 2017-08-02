import { Component, OnInit } from '@angular/core';

import { UserService } from 'ng-aws-cognito';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {

    user = null;

    constructor(private userService: UserService) {
        this.userService.$user.subscribe((user) => {
            this.user = user; 
        });
    }

    ngOnInit() { }

}

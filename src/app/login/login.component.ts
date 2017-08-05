import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'ng-aws-cognito';

import { QuestionService } from '../shared/forms/question.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    title = "Login";

    questions;
    waiting = false;
    responseReceived = false;
    response = {
        success: false,
        message: ''
    };

    constructor(
        private service: QuestionService, 
        private userService: UserService,
        private router: Router
    ) {
        this.questions = service.getLoginQuestions();
    }

    ngOnInit() {

    }

    onSubmit(event) {

        this.waiting = true;

        this.userService.login(event.username, event.password).subscribe(
            (success) => {

                this.waiting = false;

                this.response = {
                    success: true,
                    message: success
                };

                this.responseReceived = true;
                this.router.navigate(['profile']);

            },
            (error) => {
                this.waiting = false;

                this.response = {
                    success: false,
                    message: error
                };

                this.responseReceived = true;
            }
        );
        
        this.responseReceived = false;
        this.waiting = true;
    }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'ng-aws-cognito';

import { QuestionService } from '../shared/forms/question.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    questions;
    waiting = false;
    responseReceived = false;
    response = {
        success: false,
        message: ''
    };

    constructor(private service: QuestionService, private userService: UserService) {
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

            },
            (error) => {
                this.waiting = false;
            }
        );
        
        this.responseReceived = false;
        this.waiting = true;
    }
}

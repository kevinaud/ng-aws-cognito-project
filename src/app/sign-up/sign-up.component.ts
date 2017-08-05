import { Component, OnInit } from '@angular/core';

import { UserService } from 'ng-aws-cognito';

import { QuestionService } from '../shared/forms/question.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    questions;
    waiting = false;
    responseReceived = false;

    response = {
        success: false,
        message: ''
    };

    constructor(private service: QuestionService, private userService: UserService) {
        this.questions = service.getSignUpQuestions();
    }

    ngOnInit() {

    }

    onSubmit(user) {
        this.userService.signUp(user).subscribe(() => {});
    }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from 'ng-aws-cognito';

import { QuestionService } from '../../shared/forms/question.service';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.css']
})
export class ConfirmUserComponent implements OnInit {

    username: string;

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
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.questions = service.getConfirmUserQuestions();
        this.route.params.subscribe((params) => {
            console.log('route params', params); 
            this.username = params.username;
        });
    }

    ngOnInit() {

    }

    onSubmit(event) {
        let confirmationCode = event['confirmation-code'];

        this.userService.confirmUser(
            this.username,
            confirmationCode
        ).subscribe(
            (success) => {
                console.log('user confirmed');
                this.router.navigate(['login']);
            },
            (error) => {
                console.log('confirmation failed', error);
            }
        );
    }

}

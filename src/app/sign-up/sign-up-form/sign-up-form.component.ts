import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from 'ng-aws-cognito';

import { QuestionService } from '../../shared/forms/question.service';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

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
        this.questions = service.getSignUpQuestions();
    }

    ngOnInit() {

    }

    onSubmit(user) {
        let username = user.username;

        let options = {
            relativeTo: this.route 
        };

        this.router.navigate(['./', username, 'confirm'], options); 
        /*this.userService.signUp(user).subscribe(
            (username) => {

                let options = {
                    relativeTo: this.route 
                };

                this.router.navigate(['./', username, '/confirm'], options); 
            },
            (error) => {
                console.log(error);  
            }
        );*/
    }

}

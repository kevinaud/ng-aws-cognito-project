import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { UserService } from 'ng-aws-cognito';

import { AppWaitingService } from '../../app-waiting.service';
import { QuestionService } from '../../shared/forms/question.service';

@Component({
    selector: 'app-confirm-user',
    templateUrl: './confirm-user.component.html',
    styleUrls: ['./confirm-user.component.scss']
})
export class ConfirmUserComponent implements OnInit {

    title = "Enter Confirmation Code";
    subTitle = `Your confirmation code was sent to the email address that you
    signed up with.`;

    username: string;

    /**
     * dynamic form bindings
     */
    questions;
    waiting;
    responseReceived;
    response;

    constructor(
        private appWaiting: AppWaitingService,
        private questionService: QuestionService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MdSnackBar,
        private userService: UserService
    ) {
        this.questions = questionService.getConfirmUserQuestions();
        this.route.params.subscribe((params) => {
            console.log('route params', params); 
            this.username = params.username;
        });
    }

    ngOnInit() {
        this.waiting = false;
        this.responseReceived = false;

        this.response = {
            success: false,
            message: ''
        };
    }

    resendConfirmationCode() {
        this.appWaiting.setWaiting(true);

        this.userService.resendConfirmationCode(this.username).subscribe(
            (success: any) => {
                this.appWaiting.setWaiting(false);
                
                let message = `New confirmation code sent to ${success.Destination}`;
                this.successSnackBar(message);
            },
            (error) => {
                this.appWaiting.setWaiting(false);

                this.errorSnackBar(error.message);
            }
        );
    }

    successSnackBar(message) {
        let action = 'dismiss';
        let config: MdSnackBarConfig = {
            duration: 5000,
            extraClasses: [ 'success-snack-bar' ] 
        };

        this.snackBar.open(message, action, config);
    }

    errorSnackBar(message) {
        let action = 'dismiss';
        let config: MdSnackBarConfig = {
            duration: 7500,
            extraClasses: [ 'failure-snack-bar' ] 
        };

        this.snackBar.open(message, action, config);
    }

    onSubmit(event) {
        this.ngOnInit();
        this.appWaiting.setWaiting(true);

        let confirmationCode = event['confirmation-code'];

        this.userService.confirmUser(
            this.username,
            confirmationCode
        ).subscribe(
            (success) => {
                this.appWaiting.setWaiting(false);

                this.successSnackBar('Confirmation Successful! Please Login.');
                this.router.navigate(['login']);
            },
            (error) => {
                this.appWaiting.setWaiting(false);

                this.response = {
                    success: false,
                    message: error.message
                };

                this.responseReceived = true;
            }
        );
    }

}

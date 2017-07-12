import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../forms/question.service';

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

  constructor(private service: QuestionService /*, private userService: UserService*/) {
    this.questions = service.getSignUpQuestions();
  }

  ngOnInit() {

  }

  onSubmit(event) {

    /*this.waiting = true;

    this.userService.login(event.username, event.password).then(
      (success) => {
      
        console.log(success);
        this.waiting = false;

        /*this.response = { 
          success: true,
          message: success
        };

        this.responseReceived = true;

      },
      (error) => {
        this.waiting = false;
        console.log(error);
      });
    this.responseReceived = false;
    this.waiting = true;

    this.mailchimp.subscribeToRecruitment(event).subscribe((response) => {

      this.waiting = false;
      this.response = response.json();
      this.responseReceived = true;

    });*/
  }

}

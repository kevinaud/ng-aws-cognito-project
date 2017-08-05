/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { UserService } from 'ng-aws-cognito';
import { QuestionService } from '../shared/forms/question.service';
import { LoginComponent } from './login.component';

const userServiceStub = {
    login: function(username, password) {
        if (username === "correctUsername" && password === "correctPassword") {
            return Observable.of(true); 
        } else {
            return Observable.of(false); 
        }
    }
};

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginComponent ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            providers: [
                QuestionService,
                UserService,
                { provide: UserService, useValue: userServiceStub }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

});

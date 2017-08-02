/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from 'ng-aws-cognito';

import { ProfileComponent } from './profile.component';

class UserServiceStub {

    $auth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    $user: BehaviorSubject<any> = new BehaviorSubject<any>({})

}

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProfileComponent ],
            providers: [
                { provide: UserService, useValue: UserServiceStub }
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA 
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

});

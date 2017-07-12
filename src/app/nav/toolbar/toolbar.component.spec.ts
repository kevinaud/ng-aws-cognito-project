/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { UserService } from 'ng2-aws-cognito';

import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { ToolbarComponent } from './toolbar.component';

class UserServiceStub {

  $auth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

}

class AwsServiceStub { }

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        BrowserModule,
        RouterTestingModule.withRoutes([{ path: 'fakeRouteForTesting', redirectTo: 'fakeRouteForTesting', pathMatch: 'full' }]),
        MaterialModule.forRoot()
      ],
	  providers: [
        { provide: UserService, useValue: UserServiceStub }
	  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

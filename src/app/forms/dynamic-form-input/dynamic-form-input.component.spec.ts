/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';

import { TextboxQuestion } from '../question-text';
import { DynamicFormInputComponent } from './dynamic-form-input.component';

describe('DynamicFormInputComponent', () => {
  let component: DynamicFormInputComponent;
  let fixture: ComponentFixture<DynamicFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormInputComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormInputComponent);
    component = fixture.componentInstance;

    component.form = new FormGroup({
      firstName: new FormControl()
    });

    component.question = new TextboxQuestion({
      key: 'firstName',
      label: 'First name',
      required: true,
      type: 'text',
      order: 2
    });

    fixture.detectChanges();
  });

});

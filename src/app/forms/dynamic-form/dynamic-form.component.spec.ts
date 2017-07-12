/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  let QuestionControlServiceStub = {
    toFormGroup: function(questions: QuestionBase<any>[] ) {
      let group: any = {};

      questions.forEach(question => {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                : new FormControl(question.value || '');
      });
      return new FormGroup(group);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ ReactiveFormsModule ],
      providers: [ { provide: QuestionControlService, useValue: QuestionControlServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

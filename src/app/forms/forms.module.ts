import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material'

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';

import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        DynamicFormComponent,
        DynamicFormInputComponent
    ],
    declarations: [
        DynamicFormComponent,
        DynamicFormInputComponent
    ],
    providers: [
        QuestionControlService,
        QuestionService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class FormsModule { }

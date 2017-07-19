import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';

import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';
import {FormsMaterialModule} from './forms-material.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsMaterialModule
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
export class FormsModule { } // TODO: Rename this module - confusing to import -- soft conflict with (@angular/forms)

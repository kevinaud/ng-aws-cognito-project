import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor() { }

    toFormGroup( questions: QuestionBase<any>[] ) {
        let group: any = {};

        questions.forEach(question => {

            switch (question.controlType) {
            
                case 'date':
                    let dateGroup = this.initDateGroup(question);
                    group[question.key] = new FormGroup(dateGroup);
                    break;
                
                case 'address':
                    let addressGroup = this.initAddressGroup(question);
                    group[question.key] = new FormGroup(addressGroup);
                    break;

                default:

                    let validators = [];

                    if (question.required) {
                        validators.push(Validators.required);
                    } 

                    let value = '';

                    if (question.value) {
                        value = question.value;
                    }

                    group[question.key] = new FormControl(value, validators);
            }

        });

        return new FormGroup(group);
    }

    initDateGroup = function (question) {

        let group = {};

        group['day'] = question.required ? new FormControl(question.value.day || '', Validators.required)
            : new FormControl(question.value.day || '');

        group['month'] = question.required ? new FormControl(question.value.month || '', Validators.required)
            : new FormControl(question.value.month || '');

        group['year'] = question.required ? new FormControl(question.value.year || '', Validators.required)
            : new FormControl(question.value.year || '');

        return group;

    };

    initAddressGroup = function (question) {

        let group = {};

        group['line1'] = question.required ? new FormControl(question.value.line1 || '', Validators.required)
            : new FormControl(question.value.line1 || '');

        group['line2'] = question.required ? new FormControl(question.value.line2 || '', Validators.required)
            : new FormControl(question.value.line2 || '');

        group['city'] = question.required ? new FormControl(question.value.city || '', Validators.required)
            : new FormControl(question.value.city || '');

        group['state'] = question.required ? new FormControl(question.value.state || '', Validators.required)
            : new FormControl(question.value.state || '');

        group['zip'] = question.required ? new FormControl(question.value.zip || '', Validators.required)
            : new FormControl(question.value.zip || '');

        return group;

    };

}

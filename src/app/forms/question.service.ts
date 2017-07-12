import { Injectable }       from '@angular/core';

import { RadioQuestion } from './question-radio';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-text';
import { DateQuestion }  from './question-date';
import { AddressQuestion }  from './question-address';

@Injectable()
export class QuestionService {

  getLoginQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'username',
        label: 'Username*',
        errorLabel: 'Username',
        type: 'text',
        required: false,
        order: 1
      }),
      new TextboxQuestion({
        key: 'password',
        label: 'Password*',
        errorLabel: 'Password',
        required: false,
        type: 'password',
        order: 2
      })
    ];
     
    return questions.sort((a, b) => a.order - b.order);
  }

  getSignUpQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'email',
        label: 'Email Address*',
        errorLabel: 'Email Address',
        type: 'email',
        required: false,
        order: 1
      }),
      new TextboxQuestion({
        key: 'username',
        label: 'Username*',
        errorLabel: 'Username',
        type: 'text',
        required: false,
        order: 1
      }),
      new TextboxQuestion({
        key: 'password',
        label: 'Password*',
        errorLabel: 'Password',
        required: false,
        type: 'password',
        order: 2
      })
    ];
     
    return questions.sort((a, b) => a.order - b.order);
  }

}

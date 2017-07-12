import { QuestionBase } from './question-base';
import { Date } from './date';

export class DateQuestion extends QuestionBase<Date> {
  controlType = 'date';
  value: Date = {
    day: '',
    month: '',
    year: ''
  };

  constructor(options: {} = {}) {
    super(options);
  }
}

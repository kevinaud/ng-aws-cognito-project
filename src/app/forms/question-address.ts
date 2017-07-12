import { QuestionBase } from './question-base';
import { Address } from './address';

export class AddressQuestion extends QuestionBase<Address> {
  controlType = 'address';
  value: Address = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: ''
  };

  constructor(options: {} = {}) {
    super(options);
  }
}

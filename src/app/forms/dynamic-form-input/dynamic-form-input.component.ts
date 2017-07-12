import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../question-base';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    if (this.question.controlType === 'date') {

      let valid = this.form.controls[this.question.key]['controls']['day'].valid &&
                  this.form.controls[this.question.key]['controls']['month'].valid &&
                  this.form.controls[this.question.key]['controls']['year'].valid;

      return valid;
    } else if (this.question.controlType === 'address') {

      let valid = this.form.controls[this.question.key]['controls']['line1'].valid &&
                  this.form.controls[this.question.key]['controls']['city'].valid &&
                  this.form.controls[this.question.key]['controls']['state'].valid &&
                  this.form.controls[this.question.key]['controls']['zip'].valid;

      return valid;
    } else {
      return this.form.controls[this.question.key].valid;
    }
  }
  get isDirty() {
    if (this.question.controlType === 'date') {

      let dirty = this.form.controls[this.question.key]['controls']['day'].dirty &&
                  this.form.controls[this.question.key]['controls']['month'].dirty &&
                  this.form.controls[this.question.key]['controls']['year'].dirty;

      return dirty;
    } else if (this.question.controlType === 'address') {

      let dirty = this.form.controls[this.question.key]['controls']['line1'].dirty &&
                  this.form.controls[this.question.key]['controls']['city'].dirty &&
                  this.form.controls[this.question.key]['controls']['state'].dirty &&
                  this.form.controls[this.question.key]['controls']['zip'].dirty;

      return dirty;
    } else {
      return this.form.controls[this.question.key].dirty;
    }
  }

  ngOnInit() {

  }

}

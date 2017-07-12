import { Component, Input, Output, OnInit, EventEmitter }  from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormResponse } from '../form-response';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styleUrls: [ './dynamic-form.component.css' ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() response: FormResponse = { success: false, message: '' };
  @Input() responseReceived: boolean = false;
  @Input() waiting: boolean = false;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  payLoad = '';
  qcs: QuestionControlService;

  constructor(_qcs: QuestionControlService) {
    this.qcs = _qcs;
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.submitted.emit(this.form.value);
  }

}

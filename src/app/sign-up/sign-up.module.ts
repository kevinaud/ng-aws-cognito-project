import { NgModule } from '@angular/core';
import { MdSnackBarModule } from '@angular/material';

import { NgAwsCognitoModule } from 'ng-aws-cognito';

import { SharedModule } from '../shared/shared.module';
import { SignUpRoutingModule } from './sign-up.routing';

import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { SignUpComponent } from './sign-up.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';


@NgModule({
    imports: [
        MdSnackBarModule,
        SharedModule,
        SignUpRoutingModule
    ],
    declarations: [
        ConfirmUserComponent,
        SignUpComponent,
        SignUpFormComponent
    ],
    exports: [
        ConfirmUserComponent,
        SignUpComponent,
        SignUpFormComponent
    ]

})
export class SignUpModule {
}

import { NgModule } from '@angular/core';
import { NgAwsCognitoModule } from 'ng-aws-cognito';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
    imports: [
        SharedModule,
        NgAwsCognitoModule,
        LoginRoutingModule
    ],
    declarations: [ LoginComponent ],
    exports: [ LoginComponent ]
})
export class LoginModule {
}

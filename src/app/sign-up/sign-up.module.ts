import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { SignUpRoutingModule } from './sign-up.routing';
import { SignUpComponent } from './sign-up.component';


@NgModule({
    imports: [
        SharedModule,
        SignUpRoutingModule,

    ],
    declarations: [ SignUpComponent ],
    exports: [ SignUpComponent ]

})
export class SignUpModule {
}

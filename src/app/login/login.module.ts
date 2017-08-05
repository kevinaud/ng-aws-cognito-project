import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
    imports: [
        SharedModule,
        LoginRoutingModule
    ],
    declarations: [ LoginComponent ],
    exports: [ LoginComponent ]
})
export class LoginModule {
}

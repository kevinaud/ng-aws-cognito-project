import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
// import {UserService} from "../ng-aws-cognito/user.service";


@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
    ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ]
    // providers: [UserService]
})
export class HomeModule {
}

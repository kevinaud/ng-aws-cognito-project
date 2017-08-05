import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './sign-up.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';

const routes: Routes = [
    {
        path: 'sign-up',
        component: SignUpComponent,
        children: [
            {
                path: '',
                component: SignUpFormComponent,
            },
            {
                path: ':username/confirm',
                component: ConfirmUserComponent
            } 
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class SignUpRoutingModule {
}

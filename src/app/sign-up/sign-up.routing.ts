import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';


const routes: Routes = [
    {
        path: 'sign-up',
        component: SignUpComponent
    }

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class SignUpRoutingModule {
}

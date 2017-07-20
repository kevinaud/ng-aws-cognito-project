import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { ProfileModule } from '../profile/profile.module';
import { SignUpModule } from '../sign-up/sign-up.module';
import { LoginModule } from '../login/login.module';
import { NgAwsCognitoModule } from 'ng-aws-cognito';


const awsCognitoConfig = {
    region: 'us-east-1',
    userPoolId: 'us-east-1_lBi2qHdsi',
    identityPoolId: 'us-east-1:bfa1fd06-b31e-4b75-b512-3218632ea484',
    clientId: '19gham3mddppq4psig9tnifu8t'
};

@NgModule({
    imports: [
        CommonModule,
        NgAwsCognitoModule.forRoot(awsCognitoConfig),
    ],
    declarations: [],
    exports: [
        ProfileModule,
        HomeModule,
        SignUpModule,
        LoginModule,
        NgAwsCognitoModule //TODO: not sure about this one (almost positive)
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}

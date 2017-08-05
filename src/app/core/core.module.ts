import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from '../home/home.module';
import { ProfileModule } from '../profile/profile.module';
import { SignUpModule } from '../sign-up/sign-up.module';
import { LoginModule } from '../login/login.module';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [
        ProfileModule,
        HomeModule,
        SignUpModule,
        LoginModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}

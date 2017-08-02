import { NgModule } from '@angular/core';
import { MdListModule } from '@angular/material';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ProfileRoutingModule,
        MdListModule
    ],
    declarations: [ ProfileComponent ],
    exports: [ ProfileComponent ]
})
export class ProfileModule {
}

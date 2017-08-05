import { NgModule } from '@angular/core';
import { MdListModule } from '@angular/material';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';
import { SharedModule } from '../shared/shared.module';
import { UserAttributeComponent } from './user-attribute/user-attribute.component';

@NgModule({
    imports: [
        SharedModule,
        ProfileRoutingModule,
        MdListModule
    ],
    declarations: [
        ProfileComponent,
        UserAttributeComponent
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule {
}

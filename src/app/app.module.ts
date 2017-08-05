import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdProgressBarModule
} from "@angular/material";

import { NgAwsCognitoModule } from 'ng-aws-cognito';

import { CoreModule } from './core/core.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

const awsCognitoConfig = {
    region: 'us-east-1',
    userPoolId: 'us-east-1_tOZsRGlY8',
    identityPoolId: 'us-east-1:74cc911d-c013-439c-afe3-c9f25b37fadc',
    clientId: '8st7il9b9nsn1fqjko787bsqc'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        RouterModule,
        CoreModule,
        MdIconModule,
        MdToolbarModule,
        MdSidenavModule,
        MdProgressBarModule,
        MdButtonModule,
        NgAwsCognitoModule.forRoot(awsCognitoConfig),
        routing
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}


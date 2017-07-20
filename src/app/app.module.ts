import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule } from "@angular/material";



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
        MdButtonModule,
        routing
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}


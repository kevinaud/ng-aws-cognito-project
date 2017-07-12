import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ],
  /*providers: [
    UserService,
    AwsService
  ],*/
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavModule { }

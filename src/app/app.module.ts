import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

//import { Ng2AwsCognitoModule/*, AwsCognitoConfig*/ } from 'ng2-aws-cognito';
import { NgAwsCognitoModule } from './ng-aws-cognito/ng-aws-cognito.module';

import { routing } from './app.routing';
import { NavModule } from './nav/nav.module';
import { FormsModule } from './forms/forms.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

let awsCognitoConfig = {
  region: 'us-east-1',
  userPoolId: 'us-east-1_lBi2qHdsi',
  identityPoolId: 'us-east-1:bfa1fd06-b31e-4b75-b512-3218632ea484',
  clientId: '19gham3mddppq4psig9tnifu8t'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    HttpModule,
    RouterModule,
    routing,
    NavModule,
    FormsModule,
    NgAwsCognitoModule.forRoot(awsCognitoConfig),
  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


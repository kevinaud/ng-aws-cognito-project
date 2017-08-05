import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ApiGatewayService } from './api-gateway.service';
import { AwsService } from './aws.service';
import { CognitoUser } from '../interfaces/cognito-user';
import { CognitoUserAttribute } from '../interfaces/cognito-user-attribute';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserService implements OnInit {

    public $auth: BehaviorSubject<boolean>;
    public $user: BehaviorSubject<any>;

    private user = null;

    constructor(private aws: AwsService, private storage: LocalStorageService) {
        this.$auth = new BehaviorSubject(false);
        this.$user = new BehaviorSubject(this.user);
        this.ngOnInit();
    }

    ngOnInit() {

        this.aws.getCurrentUserValidity(
            (isValid) => {
                if (isValid) {
                    this.loadUserAttributes(() => {
                        this.$auth.next(true);
                    });
                } else {
                    this.$auth.next(false);
                }
            },
            (error) => {
                this.$auth.next(false);
            }
        );

    }

    public login(username, password): Observable<any> {

        let ref = this;
        let promise = new Promise((resolve, reject) => {
            this.aws.cognitoLogin(username, password, (error, success) => {
                if (error) {
                    this.$auth.next(false);
                    reject(error.message);
                } else {
                    this.loadUserAttributes(() => {
                        this.$auth.next(true);
                        resolve(success);
                    });
                }

            });
        });

        return Observable.fromPromise(promise);
    }

    public signUp(user: CognitoUser) {

        let username = user.username;
        let password = user.password;

        delete user.username;
        delete user.password;

        let attributeList = [];

        Object.getOwnPropertyNames(user).forEach((property) => {
            let attribute = {
                Name: property,
                Value: user[property]
            };

            attributeList.push(attribute);
        });
    
        let ref = this;
        let promise = new Promise((resolve, reject) => {
            this.aws.cognitoSignUp(username, password, attributeList, (error, success) => {
                if (error) {
                    reject(error.message);
                } else {
                    resolve(success);
                }
            });
        });

        return Observable.fromPromise(promise);
    }

    public confirmUser(username, confirmationCode) {

        let ref = this;
        let promise = new Promise((resolve, reject) => {
            this.aws.cognitoConfirmUser(username, confirmationCode, (error, success) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        });

        return Observable.fromPromise(promise);
    }

    public resendConfirmationCode(username) {

        let ref = this;
        let promise = new Promise((resolve, reject) => {
            this.aws.resendConfirmationCode(username, (error, success) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        });

        return Observable.fromPromise(promise);
    }

    public logout() {
        this.deleteStoredTokens();
        this.setUser(null);
        this.$auth.next(false);
    }

    private deleteStoredTokens() {
        this.storage.regexRemoveItems('CognitoIdentityServiceProvider.*');
    }

    private loadUserAttributes(cb) {
        this.aws.getUserAttributes(
            (userAttributes) => {
                this.setUser(userAttributes);
                cb();
            },
            (error) => {
                this.setUser(null);
                cb();
            }
        );
    }

    public getUser() {
        return this.user;         
    }

    private setUser(user) {
        this.user = user;
        this.$user.next(this.user);
    }

}

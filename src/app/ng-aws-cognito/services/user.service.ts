import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { ApiGatewayService } from "./api-gateway.service";
import { AwsService } from "./aws.service";
import { LocalStorageService } from "./local-storage.service";

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

        console.log("user service on init being called");

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
                    reject(error);
                }
                else {
                    this.loadUserAttributes(() => {
                        this.$auth.next(true);
                        resolve(success);
                    });
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













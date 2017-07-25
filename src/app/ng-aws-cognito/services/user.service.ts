import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { ApiGatewayService } from "./api-gateway.service";
import { AwsService } from "./aws.service";
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class UserService implements OnInit {

    public $auth: BehaviorSubject<boolean>;
    public flag = false;

    private user = null;

    constructor(private aws: AwsService, private storage: LocalStorageService) {
        this.$auth = new BehaviorSubject(false);
        this.ngOnInit();
    }

    ngOnInit() {

        console.log("user service on init being called");

        this.aws.getCurrentUserValidity(
            (isValid) => {
                if (isValid) {
                    console.log('valid user found');
                    this.$auth.next(true);
                } else {
                    console.log('no valid user found');
                    this.$auth.next(false);
                }
            },
            (error) => {
                console.log('getCurrentUser error: ', error);
                this.$auth.next(false);
            }
        );

    }

    public login(username, password): Observable<any> {

        let promise = new Promise((resolve, reject) => {
            this.aws.cognitoLogin(username, password, (error, success) => {

                if (error) {
                    this.$auth.next(false);
                    reject(error);
                }
                else {
                    /*this.aws.getUserAttributes(
                        (success) => {
                        
                        },
                        (error) => {
                        
                        }
                    );*/
                    this.$auth.next(true);
                    resolve(success);
                }

            });
        });

        return Observable.fromPromise(promise);
    }

    public logout() {
        this.deleteStoredTokens();
        this.$auth.next(false);
    }

    public getUser() {
        return {};         
    }

    private deleteStoredTokens() {
        this.storage.regexRemoveItems('CognitoIdentityServiceProvider.*');
    }

}

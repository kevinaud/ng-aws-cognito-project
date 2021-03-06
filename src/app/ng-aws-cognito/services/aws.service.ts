import { Injectable, Inject, Optional } from "@angular/core";

import { COGNITO_CONFIG } from "../cognito-config-token";
import { AwsCognitoConfig } from "../interfaces/aws-cognito-config";
import { CognitoUserAttribute } from '../interfaces/cognito-user-attribute';

import * as sdk from "aws-sdk";
import * as AWSCognito from "amazon-cognito-identity-js";

@Injectable()
export class AwsService {

    authenticated: boolean = false;
    cognitoConfig: AwsCognitoConfig;

    CognitoUserPool = AWSCognito.CognitoUserPool;

    constructor(@Inject(COGNITO_CONFIG) awsCognitoConfig: AwsCognitoConfig) {

        this.cognitoConfig = awsCognitoConfig;

        // Your sdk region
        sdk.config.region = this.cognitoConfig.region; //

        // Need to provide placeholder keys unless unauthorised user access is enabled for user pool
        sdk.config.update({ accessKeyId: "anything", secretAccessKey: "anything" });

        let tokenString = JSON.parse(localStorage.getItem("token"));

        if (tokenString  !== null) {

            let token = this.parseJwt(tokenString);
            let currentTime = new Date();

            if (currentTime > token.exp) {

                this.authenticated = true;
                this.setToken(token);

            } else {
                localStorage.removeItem("token");
            }

        }

    }

    cognitoLogin(username, password, cb) {

        let ref = this;

        let userPool = this.getUserPool();
        let cognitoUser = this.makeCognitoUserObject(username, userPool);
        let authDetails = this.makeAuthDetailsObject(username, password);

        cognitoUser.authenticateUser(authDetails, {

            onSuccess: ref.onSuccessHandler(cb),
            onFailure: ref.onFailureHandler(cb),
            newPasswordRequired: ref.newPasswordRequiredHandler(cognitoUser, cb)

        });

    }

    cognitoSignUp(username: string, password: string, attributeList, cb) {
        this.getUserPool().signUp(
            username,
            password,
            attributeList,
            null,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return cb(err);
                }
                let cognitoUser = result.user;
                console.log('user name is ' + cognitoUser.getUsername());
                cb(null, cognitoUser.getUsername());
            }
        ); 
    }

    cognitoConfirmUser(username, confirmationCode, cb) {

        let cognitoUser = this.makeCognitoUserObject(username, this.getUserPool());

        cognitoUser.confirmRegistration(confirmationCode, true, function(err, result) {
            if (err) {
                return cb(err);
            }
            console.log('call result: ' + result);
            return cb(null, result);
        });
    }

    /**
     * Success return type: {
     *      Destination: string,    // ex: "k***@g***.com"
     *      DeliveryMedium: string, // ex: "EMAIL"
     *      AttributeName: string,  // ex: "email"
     * }
     */
    resendConfirmationCode(username, cb) {

        let cognitoUser = this.makeCognitoUserObject(username, this.getUserPool());

        cognitoUser.resendConfirmationCode(function(err, result) {
            if (err) {
                return cb(err);
            } 
            console.log('call result: ' + result);
            return cb(null, (<any>result).CodeDeliveryDetails);
        });
    }

    onSuccessHandler(cb) {
        let ref = this;
        return function (result) {

            let token = result.getIdToken().getJwtToken();

            localStorage.setItem("token", JSON.stringify(token));
            ref.setToken(token);

            cb(null, "Successfully Logged In");
        }
    }

    onFailureHandler(cb) {
        return function(err) {
            cb(err);
        }
    }

    newPasswordRequiredHandler(cognitoUser, cb) {

        return function(userAttributes, requiredAttributes) {
            // User was signed up by an admin and must provide new
            // password and required attributes, if any, to complete
            // authentication.
            let newPassword = prompt("You must set your password");

            let response;
            let attributesData = { };

            requiredAttributes.forEach(function(attribute) {
                response = prompt("Please supply your " + attribute);
                attributesData[attribute] = response;
            });

            // Get these details and call
            let cognitoUser = this.getCurrentUser();
            cognitoUser.completeNewPasswordChallenge(newPassword, attributesData, this);

            cb(null, "Password Updated");
        }
    }

    makeAuthDetailsObject(username, password) {

        let authenticationData = {
            Username : username,
            Password : password,
        };

        return new AWSCognito.AuthenticationDetails(authenticationData);
    }

    makeCognitoUserObject(username, userPool) {

        let userData = {
            Username : username,
            Pool : userPool
        };

        return new AWSCognito.CognitoUser(userData);
    }

    getUserPool() {

        let poolData = {
            UserPoolId : this.cognitoConfig.userPoolId,
            ClientId : this.cognitoConfig.clientId
        };

        return new AWSCognito.CognitoUserPool(poolData);
    }

    getCurrentUser() {
        return this.getUserPool().getCurrentUser();
    }

    setToken(token) {

        let loginType = "cognito-idp." + this.cognitoConfig.region + ".amazonaws.com/" + this.cognitoConfig.userPoolId;

        // Here we"ll set our Cognito user pool id. We"ll check to see if a user logged in by getting the token from
        // localStorage which we will implement later
        //
        let loginObject = {};
        loginObject[loginType] = token;

        sdk.config.credentials = new sdk.CognitoIdentityCredentials({
            // This will be the identity pool from your federated identity pool and not your user pool id.
            IdentityPoolId: this.cognitoConfig.identityPoolId,
            Logins: loginObject
        });

    }

    parseJwt (token) {
        let base64Url = token.split(".")[1];
        let base64 = base64Url.replace("-", "+").replace("_", "/");
        return JSON.parse(window.atob(base64));
    };

    public getCurrentUserValidity(success, error) {
        let userPool = this.getUserPool();
        let cognitoUser = userPool.getCurrentUser();

        if (cognitoUser != null) {
            cognitoUser.getSession(function(err, session) {
                if (err) {
                    console.log(err);
                    return error(err)
                }

                return success(session.isValid());
            });
        }  
    }

    public getUserAttributes(success, error) {
        let cognitoUser = this.getCurrentUser();

        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    console.log("UserParametersService: Couldn't retrieve the user");
                } else {
                    cognitoUser.getUserAttributes(function (err, result) {
                        if (err) {
                            console.log("UserParametersService: in getParameters: " + err);
                            return error(err);
                        } else {
                            let user = {};
                            for (let i = 0; i < result.length; i++) {
                                let key = result[i].getName();
                                let value = result[i].getValue();

                                user[key] = value;
                            }

                            return success(user);
                        }
                    });
                }

            });
        } else {
            return error("No current user");
        }
    }
}






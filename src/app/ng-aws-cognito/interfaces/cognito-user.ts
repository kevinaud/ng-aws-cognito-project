/**
 * defines an interface that must have a username 
 * and password property, but can also have any
 * number of additional properties
 */
export interface CognitoUser {
    username: string;
    password: string;
    [x: string]: any; 
}

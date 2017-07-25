/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, fakeAsync, tick } from "@angular/core/testing";
import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from 'rxjs/Observable';

import { ApiClientService } from "../services/api-client.service";
import { ApigClientFactory } from "../factories/apig-client-factory";
import { AwsService } from "../services/aws.service";
import { UserService } from "../services/user.service";

import { 
    LocalStorageService,
    LocalStorageServiceStub
} from "../services/local-storage.service";

const AwsServiceStub = {
    getCurrentUserValidity(success, error) {}
}

const unauthenticatedClient = {
    auth: false
};

const authenticatedClient = {
    auth: true
};

const apigClientFactoryStub = {
    newClient: function(credentials) {

        if (credentials) {
            return authenticatedClient;
        } else {
            return unauthenticatedClient;
        }

    }
};

@Injectable()
class UserServiceStub {
    auth = "test";
    // $auth: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public stub = true;

    constructor() { }

    login(username, password) {
        // this.$auth.next(true);
    }

    logout() {
        // this.$auth.next(false);
    }

    isStub() {
        return this.stub;
    }
}

describe("Service: ApiClientService", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ApiClientService,
                { provide: AwsService, useValue: AwsServiceStub },
                { provide: ApigClientFactory, useValue: apigClientFactoryStub},
                { provide: LocalStorageService, useValue: LocalStorageServiceStub },
                UserService
            ]
        });

        let userService = TestBed.get(UserService);
        userService.ngOnInit();
    });

    it("should ...", inject([ ApiClientService ], (service: ApiClientService) => {
        expect(service).toBeTruthy();
    }));

    it("should get the injected apigClientFactory", inject([ ApiClientService ], (service: ApiClientService) => {

        service.$client.subscribe((client) => {
            expect(client).toEqual(unauthenticatedClient);
        });

    }));

    it("should get the injected apigClientFactory", inject([ ApiClientService ], (service: ApiClientService) => {

        service.$client.subscribe((client) => {
            expect(client).toEqual(unauthenticatedClient);
        });

    }));

    it("should automatically change to an authenticated client when the user logs in",
       inject([ ApiClientService, UserService ], (service: ApiClientService, user: UserService) => {

           let authStatus;
           let clientAuth;
           let authChanged = false;
           let clientChanged = false;

           user.$auth.subscribe((auth) => {
               authStatus = auth;

               if (clientChanged) {
                   clientChanged = false;
                   expect(clientAuth).toEqual(authStatus);
               } else {
                   authChanged = true;
               }

           });

           service.$client.subscribe((client) => {
               clientAuth = client.auth;

               if (authChanged) {
                   authChanged = false;
                   expect(clientAuth).toEqual(authStatus);
               } else {
                   clientChanged = true;
               }

           });

           spyOn(user, "login").and.callFake((username, password) => {
               user.$auth.next(true);
           });

           spyOn(user, "logout").and.callFake(() => {
               user.$auth.next(false);
           });

           user.login("username", "password");
           user.logout();

       }));

});

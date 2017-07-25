/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";

import { UserService } from "../services/user.service";
import { AwsService } from "../services/aws.service";
import { ApiClientService } from "../services/api-client.service";
import { 
    LocalStorageService,
    LocalStorageServiceStub
} from "../services/local-storage.service";

const AwsServiceStub = {
    cognitoLogin(username, password, cb){
        if(username === "correctUsername" && password === "correctPassword") {
            return cb (null, "successfully logged in");
        } else {
            return cb ("not logged in");
        }
    },

    getCurrentUserValidity(success, error) {
    
    }
}

class ApiClientServiceStub { }

describe("Service: UserService", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UserService,
                { provide: AwsService, useValue: AwsServiceStub },
                { provide: ApiClientService, useValue: ApiClientServiceStub },
                { provide: LocalStorageService, useValue: LocalStorageServiceStub }
            ]
        });
    });

    it("should ...", inject([ UserService ], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    it("should have a $auth attribute that can be subscribed to", inject([ UserService ], (service: UserService) => {

        service.ngOnInit();
        expect(service.$auth.constructor.name).toEqual("BehaviorSubject");

    }));

    it("should have an auth status that is initialized to false", inject([ UserService ], (service: UserService) => {

        service.ngOnInit();
        service.$auth.subscribe((auth) => {
            expect(auth).toEqual(false);
        });

    }));

    it("should return a success response if the username and password are correct", inject([ UserService ], (service: UserService) => {
        service.ngOnInit();
        service.login("correctUsername", "correctPassword").subscribe(
            (success) => {
                expect(success).toBeTruthy();
            },
            (error) => {
                expect(error).toBeFalsy();
            }
        );

    }));

    it("should return an error response if the username and password are incorrect", inject([ UserService ], (service: UserService) => {
        service.ngOnInit();
        service.login("incorrectUsername", "incorrectPassword").subscribe(
            (success) => {
                expect(success).toBeFalsy();
            },
            (error) => {
                expect(error).toBeTruthy();
            }
        );

    }));

    it("should have a user object that is not null if the login is successful", inject([ UserService ], (service: UserService) => {
        service.ngOnInit();
        service.login("correctUsername", "correctPassword").subscribe(
            (success) => {
                expect(service.getUser()).not.toBe(null);  
            }
        );

    }));

    /*it("should have a user object that is null if the login is fails", inject([ UserService ], (service: UserService) => {
        service.ngOnInit();
        service.login("incorrectUsername", "incorrectPassword").subscribe(
            (success) => { },
            (error) => {
                expect(service.getUser()).toBe(null);  
            }
        );

    }));*/

    it("should check if there is already a stored user upon app initialization", 
        inject([ UserService ], (service: UserService) => {
            let aws = TestBed.get(AwsService);

            spyOn(aws, "getCurrentUserValidity");

            service.ngOnInit();

            expect(aws.getCurrentUserValidity).toHaveBeenCalled();
       })
    );

    it("should set auth status to true if there is a valid stored user upon app initialization", 
        inject([ UserService ], (service: UserService) => {
            let aws = TestBed.get(AwsService);

            spyOn(aws, "getCurrentUserValidity").and.callFake((success, error) => {
                return success(true);
            });

            service.ngOnInit();

            service.$auth.subscribe((authStatus) => {
                expect(authStatus).toEqual(true);
            });
       })
    );

    it("should set auth status to false if there is an invalid stored user upon app initialization", 
        inject([ UserService ], (service: UserService) => {
            let aws = TestBed.get(AwsService);

            spyOn(aws, "getCurrentUserValidity").and.callFake((success, error) => {
                return success(false);
            });

            service.ngOnInit();

            service.$auth.subscribe((authStatus) => {
                expect(authStatus).toEqual(false);
            });
       })
    );

    it("should set auth status to false if there is an error while validating a stored user during app initialization", 
        inject([ UserService ], (service: UserService) => {
            let aws = TestBed.get(AwsService);

            spyOn(aws, "getCurrentUserValidity").and.callFake((success, error) => {
                return error();
            });

            service.ngOnInit();

            service.$auth.subscribe((authStatus) => {
                expect(authStatus).toEqual(false);
            });
       })
    );
});


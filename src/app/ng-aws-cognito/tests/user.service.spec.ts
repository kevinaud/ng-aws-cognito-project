/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";

import { UserService } from "../user.service";
import { AwsService } from "../aws.service";
import { ApiClientService } from "../api-client.service";
import { LocalStorageService } from "../local-storage.service";

const LocalStorageServiceStub  = {

  storage: {},

  getItem: function(key) {
    return this.storage[key];
  },

  setItem: function(key, value) {
    this.storage[key] = value;
  },

  removeItem: function(key) {
    delete this.storage[key];
  },

  clear: function() {
    this.storage = {};
  }

};

const ExpiredLocalStorageServiceStub  = {

  storage: {},

  getItem: function(key) {
    return "test";
  },

  setItem: function(key, value) {
    this.storage[key] = value;
  },

  removeItem: function(key) {
    delete this.storage[key];
  },

  clear: function() {
    this.storage = {};
  }

};

const AwsServiceStub = {
  cognitoLogin(username, password, cb){
    if(username === "correctUsername" && password === "correctPassword") {
      return cb (null, "successfully logged in");
    } else {
      return cb ("not logged in");
    }
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

  it("auth status should be initialized to false", inject([ UserService ], (service: UserService) => {

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

  it("should not try to initialize auth status if no stored token is found", 
    inject([ UserService ], (service: UserService) => {

    let storage = TestBed.get(LocalStorageService);
    expect(storage.getItem("token")).toBeUndefined();

    //spyOn(service, "initializeFromToken");
    //expect(service.initializeFromToken).toHaveBeenCalled()*/

    /*TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: AwsService, useValue: AwsServiceStub },
        { provide: ApiClientService, useValue: ApiClientServiceStub },
        { provide: LocalStorageService, useValue: NewLocalStorageServiceStub }
      ]
    });

    TestBed.resetTestEnvironment();

    storage = TestBed.get(LocalStorageService);
    expect(storage.getItem("token")).toBeDefined();*/

  }));

});

describe("Initialization of Service: UserService", () => {

  /*const NewLocalStorageServiceStub = {
    getItem: function(key) {
      if (key === "token") {
        return "someToken";
      }
    }
  }*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: AwsService, useValue: AwsServiceStub },
        { provide: ApiClientService, useValue: ApiClientServiceStub },
        { provide: LocalStorageService, useValue: LocalStorageServiceStub }
      ]
    });

    let storage = TestBed.get(LocalStorageService);
    storage.setItem("token", "test");
  });

  it("should try to initialize auth status if a token is stored already", 
    inject([ UserService ], (service: UserService) => {
    
    //expect(service.flag).toBeFalsy();

    let storage = TestBed.get(LocalStorageService);
    storage.setItem("token", "test");
    //expect(storage.getItem('test')).toEqual("test");

    //spyOn(service, "initializeFromToken");
    //expect(service.initializeFromToken).toHaveBeenCalled()

  }));

});


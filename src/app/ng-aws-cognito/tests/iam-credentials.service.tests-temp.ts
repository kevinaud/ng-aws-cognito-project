/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";

import { IAMCredentialsService } from "../iam-credentials.service";
import { IAMCredentials } from "../iam-credentials";
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

describe("Service: IAMCredentialsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IAMCredentialsService,
        { provide: LocalStorageService, useValue: LocalStorageServiceStub }
      ]
    });
  });

  it("should exist", inject([ IAMCredentialsService ], (service: IAMCredentialsService) => {
    expect(service).toBeTruthy();
  }));

  it("should check if there are already credentials stored",
    inject([ IAMCredentialsService ], (service: IAMCredentialsService) => {

    let storage = TestBed.get(LocalStorageService);
    const credentials: IAMCredentials =  {
      accessKey: "someAccessKey",
      secretKey: "someSecretKey",
      sessionToken: "",
      region: "someRegion"
    };

    storage.setItem("IAMCredentials", credentials);

    expect(service).toBeTruthy();

  }));

  it("should be able to parse a jwt", inject([ IAMCredentialsService ], (service: IAMCredentialsService) => {
    let credentials = {
      "Credentials": {
        "SecretAccessKey": "LHN15j7mzpnCGYCN6HgBdM/3UbNZ3h2jI+08dHd/", 
        "SessionToken": "FQoDYXdzEBwaDJNKiCCXeB7sXFH0CyKsAb3LIgo7sDR2X+rYF0404pKKuc4iejbotAOeq5mjPn8MC8GFWYvGUMf7hCtXdydwhxOfT5397cgY6gyrYG7fiHeIBKipZpXsV4VTxEyapzdUsNUjeyMVGJHZ5fopMJGDnRwjEtgPlCzscWldp1mu5+89A/iNZunfwUndP0vlqpfxFpNTVlMJW5gfgL/cMU2gioWlgbMbGRNFP/bGEnNNsPaaGd6xRAMTk0Zd0sMo57OhwgU=", 
        "Expiration": "2016-12-01T06:50:15Z", 
        "AccessKeyId": "ASIAJ7C2F3IT63UO5QKQ"
      }
    }
    let base64 = credentials.Credentials.SessionToken.replace("-", "+").replace("_", "/");
    let result = JSON.parse(window.atob(base64));

    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";
    let expectedPayload = {
      sub: "1234567890",
      name: "John Doe",
      admin: true
    }
    let parsed = service.parseJwt(token);

    expect(parsed).toEqual(expectedPayload);
  }));
});


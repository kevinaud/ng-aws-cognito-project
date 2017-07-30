/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";

import { LocalStorageService } from "../services/local-storage.service";

describe("Service: LocalStorageService", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LocalStorageService
            ]
        });
    });

    it("should ...", inject([ LocalStorageService ], (service: LocalStorageService) => {
        expect(service).toBeTruthy();
    }));
});


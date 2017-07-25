/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from "@angular/core/testing";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ApiGatewayService } from "../services/api-gateway.service";
import { AwsService, } from "../index";
import { ApiClientService } from "../services/api-client.service";

class AwsServiceStub { }

class ApiClientServiceStub {

    $client: BehaviorSubject<any>;

    client = {
        podcastGet: function() {},
        podcastPost: function() {},
        podcastDelete: function() {},
        podcastPut: function() {},
        podcastOptions: function() {},
        podcastHead: function() {},
        podcastAny: function() {},
        podcastPatch: function() {},
        podcastFakemethodtype: function() {},
        podcastEpisodeGet: function() {},
        podcastEpisodePost: function() {},
        podcastEpisodePut: function() {},
        podcastEpisodeOptions: function() {},
        podcastEpisodeHead: function() {},
        //podcastEpisodeAny: function() {},
        podcastEpisodePatch: function() {},
        podcastEpisodeFakemethodtype: function() {},
        podcastPostPost: function() {}
    }

    constructor() {
        this.$client = new BehaviorSubject<any>(this.client);
    }

    setClient(client) {
        this.$client.next(client);
    }

}

describe("Service: ApiGatewayService", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ApiGatewayService,
                { provide: AwsService, useValue: AwsServiceStub },
                { provide: ApiClientService, useValue: new ApiClientServiceStub() }
            ]
        });
    });

    it("should ...", inject([ ApiGatewayService ], (service: ApiGatewayService) => {
        expect(service).toBeTruthy();
    }));

    it("should have a client", inject([ ApiGatewayService ], (service: ApiGatewayService) => {
        expect(service.hasOwnProperty("client")).toBeTruthy();
    }));

    /*it("should parse the endpoint names correctly", inject([ ApiGatewayService ], (service: ApiGatewayService) => {

        expect(service.endpoints["podcast"]).toBeDefined();
        expect(service.endpoints["podcastEpisode"]).toBeDefined();
        expect(service.endpoints["podcastPost"]).toBeDefined();

        expect(service.endpoints["podcastGet"]).toBeUndefined();
        expect(service.endpoints["podcastDelete"]).toBeUndefined();
        expect(service.endpoints["podcastPut"]).toBeUndefined();
        expect(service.endpoints["podcastOptions"]).toBeUndefined();
        expect(service.endpoints["podcastHead"]).toBeUndefined();
        expect(service.endpoints["podcastAny"]).toBeUndefined();
        expect(service.endpoints["podcastPatch"]).toBeUndefined();
        expect(service.endpoints["podcastFakemethodtype"]).toBeUndefined();

    }));

    it("should put the right request methods on each endpoint", inject([ ApiGatewayService ], (service: ApiGatewayService) => {

        expect(service.endpoints["podcast"].get).toBeDefined();
        expect(service.endpoints["podcast"].post).toBeDefined();
        expect(service.endpoints["podcast"].delete).toBeDefined();
        expect(service.endpoints["podcast"].put).toBeDefined();
        expect(service.endpoints["podcast"].options).toBeDefined();
        expect(service.endpoints["podcast"].head).toBeDefined();
        expect(service.endpoints["podcast"].any).toBeDefined();
        expect(service.endpoints["podcast"].patch).toBeDefined();
        expect(service.endpoints["podcastEpisode"].get).toBeDefined();
        expect(service.endpoints["podcastEpisode"].post).toBeDefined();

        expect(service.endpoints["podcastEpisode"].put).toBeDefined();
        expect(service.endpoints["podcastEpisode"].options).toBeDefined();
        expect(service.endpoints["podcastEpisode"].head).toBeDefined();
        expect(service.endpoints["podcastEpisode"].patch).toBeDefined();
        expect(service.endpoints["podcastPost"].post).toBeDefined();

        expect(service.endpoints["podcastEpisode"].any).toBeUndefined();
        expect(service.endpoints["podcastEpisode"].delete).toBeUndefined();
        expect(service.endpoints["podcastEpisode"].fakemethodtype).toBeUndefined();

    }));*/
});

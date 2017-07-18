import { NgModule, ModuleWithProviders, InjectionToken } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ApiClientService } from "./api-client.service";
import { ApiGatewayService } from "./api-gateway.service";
import { AwsService } from "./aws.service";
import { COGNITO_CONFIG } from "./cognito-config-token";
import { ApigClientFactory } from "./apig-client-factory";
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';


@NgModule({
    imports: [
        CommonModule 
    ],
    providers: [
        ApiClientService,
        ApiGatewayService,
        AwsService
    ]
})
export class NgAwsCognitoModule {

    static forRoot(config): ModuleWithProviders {
        return {
            ngModule: NgAwsCognitoModule,
            providers: [
                UserService,
                LocalStorageService,
                { provide: COGNITO_CONFIG, useValue: config },
                { provide: ApigClientFactory, useValue: apigClientFactory }
            ]
        };
    }

}

//import { NgModule, ModuleWithProviders, InjectionToken } from "@angular/core";
//import { CommonModule } from "@angular/common";

/*import { ApiClientService } from "./api-client.service";
import { ApiGatewayService } from "./api-gateway.service";
import { AwsService } from "./aws.service";
import { COGNITO_CONFIG } from "./cognito-config-token";
import { ApigClientFactory } from "./apig-client-factory";
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';

@NgModule({

})
export class Ng2AwsCognitoModule { }
@NgModule({
    providers: [
        ApiClientService,
        ApiGatewayService,
        AwsService
    ]
})
export class Ng2AwsCognitoModule { }

static forRoot(config): ModuleWithProviders {
    return {
        ngModule: Ng2AwsCognitoModule,
        providers: [
            UserService,
            LocalStorageService,
            { provide: COGNITO_CONFIG, useValue: config },
            { provide: ApigClientFactory, useValue: apigClientFactory }
        ]
    };
}

}

export { AwsCognitoConfig, ApigClientFactory };
*/

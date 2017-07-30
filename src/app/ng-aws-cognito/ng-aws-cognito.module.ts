import { NgModule, ModuleWithProviders, InjectionToken } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ApiClientService } from "./services/api-client.service";
import { ApiGatewayService } from "./services/api-gateway.service";
import { AwsService } from "./services/aws.service";
import { COGNITO_CONFIG } from "./cognito-config-token";
import { ApigClientFactory } from "./apig-client-factory";
import { UserService } from './services/user.service';
import { LocalStorageService } from './services/local-storage.service';


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

/*import { ApiClientService } from "./api-client.services";
import { ApiGatewayService } from "./api-gateway.services";
import { AwsService } from "./aws.services";
import { COGNITO_CONFIG } from "./cognito-config-token";
import { ApigClientFactory } from "./apig-client-factory";
import { UserService } from './user.services';
import { LocalStorageService } from './local-storage.services';

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

import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiClientService } from './services/api-client.service';
import { ApiGatewayService } from './services/api-gateway.service';
import { AwsService } from './services/aws.service';
import { COGNITO_CONFIG } from './cognito-config-token';
import { ApigClientFactory } from './factories/apig-client-factory';
import { UserService } from './services/user.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ApiClientService,
        ApiGatewayService,
        AwsService,
        LocalStorageService
    ]
})
export class NgAwsCognitoModule {

    static forRoot(config): ModuleWithProviders {
        return {
            ngModule: NgAwsCognitoModule,
            providers: [
                UserService,
                { provide: COGNITO_CONFIG, useValue: config },
                { provide: ApigClientFactory, useValue: apigClientFactory }
            ]
        };
    }

}

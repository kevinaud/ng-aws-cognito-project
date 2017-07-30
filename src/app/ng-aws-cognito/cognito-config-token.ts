import { InjectionToken } from "@angular/core";
import { AwsCognitoConfig } from "./interfaces/aws-cognito-config";

export let COGNITO_CONFIG = new InjectionToken<AwsCognitoConfig>('cognito.config');

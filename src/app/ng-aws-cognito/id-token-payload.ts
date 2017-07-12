export interface IdTokenPayload {
  sub: string;
  aud: string;
  email_verified: boolean;
  token_use: string;
  auth_time: number;
  iss: string;
  name: string;
  "cognito:username": string;
  exp: number;
  iat: number;
  email: string
}
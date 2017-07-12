import { NgAwsCognitoProjectPage } from './app.po';

describe('ng-aws-cognito-project App', () => {
  let page: NgAwsCognitoProjectPage;

  beforeEach(() => {
    page = new NgAwsCognitoProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

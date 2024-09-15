import LoginPage from '../pageObjects/loginPage';

class LoginActions {
  constructor() {
    this.loginPage = new LoginPage();
  }

  visit() {
    cy.visit('/');
  }

  login(username, password) {
    this.loginPage.usernameInput().type(username);
    this.loginPage.passwordInput().type(password);
    this.loginPage.loginButton().click();
  }

  verifyErrorMessage(expectedMessage) {
    this.loginPage.errorMessage().should('be.visible')
      .and('contain', expectedMessage);
  }
}

export default LoginActions;
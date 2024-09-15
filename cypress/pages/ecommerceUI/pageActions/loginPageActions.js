import LoginPage from '../pageObjects/loginPage';

class LoginActions {
  constructor() {
    this.loginPage = new LoginPage();
  }

  visit() {
    cy.visit('/');
    this.loginPage.loginLink().click()
    cy.wait(1000)//manual wait for 1 seconds as the dynamic wait not working here
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

  verifyUserLogin(user){
    this.loginPage.userLogin().contains(user)
  }
}

export default LoginActions;
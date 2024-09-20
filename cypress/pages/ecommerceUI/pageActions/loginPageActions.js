import LoginPage from '../pageObjects/loginPage';
const baseUrl = Cypress.env('baseUrl');

class LoginActions {
  constructor() {
    this.loginPage = new LoginPage();
  }

  visit() {
    cy.visit(baseUrl);
    this.loginPage.loginLink().click()
    cy.wait(1000)//manual wait for 1 seconds as the dynamic wait not working here.
  }

  login(username, password) {
    if(username == 'invalid_user'){
      this.loginPage.usernameInput().type(username);
      this.loginPage.passwordInput().type(password);
      this.loginPage.loginButton().click();
    }
    else{
      cy.intercept('**/entries').as('entriesRequest');
      this.loginPage.usernameInput().type(username);
      this.loginPage.passwordInput().type(password);
      this.loginPage.loginButton().click();
      cy.wait('@entriesRequest').its('response.statusCode').should('eq', 200);
    }
    
  }

  verifyErrorMessage(expectedMessage) {
    cy.on('window:alert', (text) => {
      expect(text).to.include(expectedMessage);
    });
  }

  verifyUserLogin(user){
    this.loginPage.userLogin().contains(user)
  }
}

export default LoginActions;
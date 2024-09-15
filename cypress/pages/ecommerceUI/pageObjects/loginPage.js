class LoginPage {
    usernameInput() {
      return cy.get('[data-test="username"]');
    }
  
    passwordInput() {
      return cy.get('[data-test="password"]');
    }
  
    loginButton() {
      return cy.get('[data-test="login-button"]');
    }
  
    errorMessage() {
      return cy.get('[data-test="error"]');
    }
  }
  
  export default LoginPage;  
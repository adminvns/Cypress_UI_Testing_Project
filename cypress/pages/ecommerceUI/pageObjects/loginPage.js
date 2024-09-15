class LoginPage {

    loginLink(){
      return cy.get('#login2');
    }

    usernameInput() {
      return cy.get('#loginusername');
    }
  
    passwordInput() {
      return cy.get('#loginpassword');
    }
  
    loginButton() {
      return cy.get('[onclick="logIn()"]');
    }
  
    errorMessage() {
      return cy.get('[data-test="error"]');
    }

    userLogin(){
      return cy.get('#nameofuser');
    }
  }
  
  export default LoginPage;  
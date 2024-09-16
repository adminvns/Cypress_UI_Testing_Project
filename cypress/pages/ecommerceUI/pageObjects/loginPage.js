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

    logoutButton(){
      return cy.get('#logout2');
    }
  
    errorMessage() {
      return cy.get('[data-test="error"]');
    }

    userLogin(){
      return cy.get('#nameofuser');
    }

    navigationBar(){
      return cy.get('.navbar-nav');
    }
  }
  
  export default LoginPage;  
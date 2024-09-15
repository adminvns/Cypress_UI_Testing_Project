class CheckoutInfoPage {
    // Selectors for CheckoutInfoPage
    firstNameInput() {
      return cy.get('#first-name');
    }
  
    lastNameInput() {
      return cy.get('#last-name');
    }
  
    postalCodeInput() {
      return cy.get('#postal-code');
    }
  
    cancelButton() {
      return cy.get('[data-test="cancel"]');
    }
  
    continueButton() {
      return cy.get('[data-test="continue"]');
    }
  }
  
  export default CheckoutInfoPage;  
class CheckoutCompletePage {
    // Selectors for CheckoutCompletePage
    title() {
      return cy.get('[data-test="title"]');
    }
  
    completeHeader() {
      return cy.get('[data-test="complete-header"]');
    }
  
    completeText() {
      return cy.get('[data-test="complete-text"]');
    }
  
    backToProductsButton() {
      return cy.get('[data-test="back-to-products"]');
    }
  }
  
  export default CheckoutCompletePage;
  
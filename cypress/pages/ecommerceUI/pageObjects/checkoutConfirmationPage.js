class CheckoutConfirmationPage {
    // Selectors for CheckoutConfirmationPage
    title() {
      return cy.get('[data-test="title"]');
    }
  
    productInList(productName) {
      return cy.get('.inventory_item_name').contains(productName);
    }
  
    paymentInfo() {
      return cy.get('[data-test="payment-info-value"]');
    }
  
    shippingInfo() {
      return cy.get('[data-test="shipping-info-value"]');
    }
  
    subtotalLabel() {
      return cy.get('[data-test="subtotal-label"]');
    }
  
    totalLabel() {
      return cy.get('[data-test="total-label"]');
    }
  
    finishButton() {
      return cy.get('[data-test="finish"]');
    }
  }
  
  export default CheckoutConfirmationPage;
  
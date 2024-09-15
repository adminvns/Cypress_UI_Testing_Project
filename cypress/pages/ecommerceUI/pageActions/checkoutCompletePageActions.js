import CheckoutCompletePage from '../pageObjects/checkoutCompletePage';

class CheckoutCompletePageActions {
  constructor() {
    this.checkoutCompletePage = new CheckoutCompletePage();
  }

  verifyCompletionTitle() {
    this.checkoutCompletePage.title().contains('Complete!');
  }

  verifyCompletionHeader() {
    this.checkoutCompletePage.completeHeader().contains('Thank you for your order!');
  }

  verifyCompletionText() {
    this.checkoutCompletePage.completeText().contains('dispatched');
  }

  goBackToProducts() {
    this.checkoutCompletePage.backToProductsButton().click();
  }
}

export default CheckoutCompletePageActions;

import CheckoutConfirmationPage from '../pageObjects/checkoutConfirmationPage';

class CheckoutConfirmationPageActions {
  constructor() {
    this.checkoutConfirmationPage = new CheckoutConfirmationPage();
  }

  verifyCheckoutTitle() {
    this.checkoutConfirmationPage.title().contains('Overview');
  }

  verifyProductInList(productName) {
    this.checkoutConfirmationPage.productInList(productName).should('be.visible');
  }

  verifyPaymentInfo(paymentInfo) {
    this.checkoutConfirmationPage.paymentInfo().contains(paymentInfo);
  }

  verifyShippingInfo(shippingInfo) {
    this.checkoutConfirmationPage.shippingInfo().contains(shippingInfo);
  }

  verifySubtotal(subtotal) {
    this.checkoutConfirmationPage.subtotalLabel().contains(subtotal);
  }

  verifyTotal(total) {
    this.checkoutConfirmationPage.totalLabel().contains(total);
  }

  completeCheckout() {
    this.checkoutConfirmationPage.finishButton().click();
  }
}

export default CheckoutConfirmationPageActions;

import CheckoutInfoPage from '../pageObjects/checkoutInfoPage';

class CheckoutInfoPageActions {
  constructor() {
    this.checkoutInfoPage = new CheckoutInfoPage();
  }

  fillCheckoutInformation(firstName, lastName, postalCode) {
    this.checkoutInfoPage.firstNameInput().type(firstName);
    this.checkoutInfoPage.lastNameInput().type(lastName);
    this.checkoutInfoPage.postalCodeInput().type(postalCode);
  }

  continueToCheckout() {
    this.checkoutInfoPage.continueButton().click();
  }
}

export default CheckoutInfoPageActions;

import productPageActions from '../pages/ecommerceUI/pageActions/productPageActions';
import LoginPageActions from '../pages/ecommerceUI/pageActions/loginPageActions';
import CartPageActions from '../pages/ecommerceUI/pageActions/cartPageActions';
import CheckoutInfoPageActions from '../pages/ecommerceUI/pageActions/checkoutInfoPageActions';
import CheckoutConfirmationPageActions from '../pages/ecommerceUI/pageActions/checkoutConfirmationPageActions';
import CheckoutCompletePageActions from '../pages/ecommerceUI/pageActions/checkoutCompletePageActions';

const productActions = new productPageActions();
const loginActions = new LoginPageActions();
const cartPageActions = new CartPageActions();
const checkoutInfoPageActions = new CheckoutInfoPageActions();
const checkoutConfirmationPageActions = new CheckoutConfirmationPageActions();
const checkoutCompletePageActions = new CheckoutCompletePageActions();

describe('Add Products to Cart Tests', () => {

  beforeEach('Login', () => {
    loginActions.visit();
    loginActions.login(Cypress.env('username'), Cypress.env('password'));
  });

  afterEach('Logout on Failure', function() {
    productActions.logOut();
    if (this.currentTest.state === 'failed') {
      productActions.logOut();
    }
  });

  it.only('Add Product to Cart and Checkout', () => {

    const tax = 2.40;
    const productName = 'Sauce Labs Backpack';
    const userFirstName = 'FirstTest';
    const userLastName = 'LastTest';
    const userPinCode = '00000'
    const deliveryMethod = 'Express Delivery!'
    const paymentInfo = 'SauceCard'

    productActions.addProductToCart(productName);

    cartPageActions.verifyCartCount();
    cartPageActions.getItemPrice().then(productPrice => {

      const totalSum = productPrice + tax;
      cartPageActions.clickOnCart();

      cartPageActions.verifyCartTitle();
      cartPageActions.verifyProductInCart(productName);
      cartPageActions.proceedToCheckout();

      checkoutInfoPageActions.fillCheckoutInformation(userFirstName, userLastName, userPinCode);
      checkoutInfoPageActions.continueToCheckout();

      checkoutConfirmationPageActions.verifyCheckoutTitle();
      checkoutConfirmationPageActions.verifyProductInList(productName);
      checkoutConfirmationPageActions.verifyPaymentInfo(paymentInfo);
      checkoutConfirmationPageActions.verifyShippingInfo(deliveryMethod);
      checkoutConfirmationPageActions.verifySubtotal(productPrice);
      checkoutConfirmationPageActions.verifyTotal(totalSum);
      checkoutConfirmationPageActions.completeCheckout();

      checkoutCompletePageActions.verifyCompletionTitle();
      checkoutCompletePageActions.verifyCompletionHeader();
      checkoutCompletePageActions.verifyCompletionText();
      checkoutCompletePageActions.goBackToProducts();
    });

  });

});

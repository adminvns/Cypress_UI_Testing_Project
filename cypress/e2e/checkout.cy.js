import productPageActions from '../pages/ecommerceUI/pageActions/productPageActions';
import LoginPageActions from '../pages/ecommerceUI/pageActions/loginPageActions';
import CartPageActions from '../pages/ecommerceUI/pageActions/cartPageActions';
import { generateRandomName, generateRandomCountry, generateRandomCity, generateRandomCardNumber, generateRandomMonth, generateRandomYear } from '../support/baseApi';

const productActions = new productPageActions();
const loginActions = new LoginPageActions();
const cartPageActions = new CartPageActions();


const productName = 'Nokia lumia 1520';
const productPrice = '820';
const userName = generateRandomName();
const userCountry = generateRandomCountry();
const userCity = generateRandomCity();
const cardNumber = generateRandomCardNumber();
const cardMonth = generateRandomMonth();
const cardYear = generateRandomYear();

describe('Add Products to Cart Tests', () => {

  beforeEach('Login', () => {
    loginActions.visit();
    loginActions.login(Cypress.env('userName'), Cypress.env('userPassword'));
  });

  afterEach('Logout on Failure', function() {
    productActions.logOut();
    if (this.currentTest.state === 'failed') {
      productActions.logOut();
    }
  });

  it('Add a Specific Product to Cart and Checkout', () => {

      productActions.addProductToCart(productName);

      cartPageActions.clickOnCart();
      cartPageActions.verifyCartTitle();
      cartPageActions.verifyProductInCartPage(productName,productPrice)
      cartPageActions.proceedToCheckout();
      cartPageActions.fillCheckoutInformation(userName, userCountry, userCity, cardNumber, cardMonth, cardYear);
      cartPageActions.clickSubmitOrder();
      cartPageActions.verifyOrderConfirmation();
  });


  it('Add a Random Product to Cart and Checkout', () => {
      productActions.addRandomProductToCart();
      cy.getProductDetails().then(() => {

        //verifying the product name and product price should be same at the time of checkout as they were in the cart.
        cy.get('@productDetails').then(({ productName, price }) => {
          cartPageActions.clickOnCart();
          cartPageActions.verifyCartTitle();
          cartPageActions.verifyProductInCartPage(productName,price)
          cartPageActions.proceedToCheckout();
          cartPageActions.fillCheckoutInformation(userName, userCountry, userCity, cardNumber, cardMonth, cardYear);
          cartPageActions.clickSubmitOrder();
          cartPageActions.verifyOrderConfirmation();
        });
      });
  });
});

import productPageActions from '../pages/ecommerceUI/pageActions/productPageActions';
import CartPageActions from '../pages/ecommerceUI/pageActions/cartPageActions';
import LoginPageActions from '../pages/ecommerceUI/pageActions/loginPageActions';

describe('Add Products to Cart Tests', () => {
    const productActions = new productPageActions();
    const loginActions = new LoginPageActions();
    const cartPageActions = new CartPageActions();

  beforeEach('Login', () => {
    loginActions.visit();
    loginActions.login(Cypress.env('username'), Cypress.env('password'));
  });

  afterEach('Logout on Failure', function() {
    cartPageActions.clickOnCart();
    cy.clearAllProducts();
    productActions.logOut();
    if (this.currentTest.state === 'failed') {
      productActions.logOut();
    }
  });

  it('Add Particular Product to the Cart', () => {
    productActions.addProductToCart('Nexus 6');
  });

  it('Add Random Product to the Cart', () => {
    productActions.addRandomProductToCart();
})
});

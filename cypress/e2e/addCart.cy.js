import productPageActions from '../pages/ecommerceUI/pageActions/productPageActions';
import LoginPageActions from '../pages/ecommerceUI/pageActions/loginPageActions';

describe('Add Products to Cart Tests', () => {
    const productActions = new productPageActions();
    const loginActions = new LoginPageActions();

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

  it('Add Particular Product to the Cart', () => {
    productActions.addProductToCart('Sauce Labs Backpack');
  });

  it('Add Random Product to the Cart', () => {
    productActions.addRandomProductToCart();
})
});

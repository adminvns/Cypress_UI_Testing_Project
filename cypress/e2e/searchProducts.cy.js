import productPageActions from '../pages/ecommerceUI/pageActions/productPageActions';
import LoginPageActions from '../pages/ecommerceUI/pageActions/loginPageActions';

describe('Product Search Test Suite!', () => {
  const productActions = new productPageActions();
  const loginActions = new LoginPageActions();

  beforeEach('Login', () => {
    loginActions.visit();
    loginActions.login(Cypress.env('userName'), Cypress.env('userPassword'));
  });

  afterEach('Logout on Failure', function () {
    productActions.logOut();
    if (this.currentTest.state === 'failed') {
      productActions.logOut();
    }
  });

  it('Search Product by Name', () => {
    productActions.searchProductByName('Samsung galaxy s6');
  });

  it('Search by Category : Monitor', () => {
    productActions.selectCategoryMonitor();
  });

  it('Search by Category : Phone', () => {
    productActions.selectCategoryPhones();
  });

  it('Search by Category : Laptop', () => {
    productActions.selectCategoryLaptop();
  });
});

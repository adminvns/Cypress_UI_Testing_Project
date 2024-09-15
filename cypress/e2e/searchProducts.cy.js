import productPageActions from '../pages/ecommerceUI/pageActions/productPageActions';
import LoginPageActions from '../pages/ecommerceUI/pageActions/loginPageActions';
import ProductPage from '../pages/ecommerceUI/pageObjects/productPage';

describe('Product Search Tests', () => {
  const productActions = new productPageActions();
  const loginActions = new LoginPageActions();
  const productPage = new ProductPage();

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

  it('Search Product by Name', () => {
    productActions.searchProductByName('Sauce Labs Backpack');
    
  });

  it('Sort by High to Low and Verify First Item', () => {
    productActions.selectHighToLowFilter();
    productPage.firstProductInList().contains('Sauce Labs Fleece Jacket');;
  });

  it('Sort by Low to High and Verify First Item', () => {
    productActions.selectLowToHighFilter();
    productPage.firstProductInList().contains('Sauce Labs Onesie');
  });
});

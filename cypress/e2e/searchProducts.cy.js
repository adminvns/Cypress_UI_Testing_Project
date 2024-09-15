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
    cy.wait(10000)
  });

  afterEach('Logout on Failure', function() {
    // productActions.logOut();
    // if (this.currentTest.state === 'failed') {
    //   productActions.logOut();
    // }
  });

  it('Search Product by Name', () => {
    productActions.searchProductByName('Samsung galaxy s6');
    
  });

  it.only('Sort by High to Low and Verify First Item', () => {
    
    productActions.selectCategoryMonitor;
    cy.wait(10000)
    productActions.selectCategoryPhones;
    cy.wait(10000)
    productActions.selectCategoryLaptop;
    cy.wait(10000)
    
    
  });

  it.skip('Sort by Low to High and Verify First Item', () => {
    productActions.selectLowToHighFilter();
    productPage.firstProductInList().contains('Sauce Labs Onesie');
  });
});

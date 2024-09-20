import productPageObject from '../pageObjects/productPage';
import LoginPage from '../pageObjects/loginPage';
const baseUrl = Cypress.env('baseUrl');

class productPageActions {
  constructor() {
    this.productPage = new productPageObject();
    this.loginPage = new LoginPage();
  }

  searchProductByName(name) {
    this.productPage.inventoryList().contains(name).click();
  }

  verifyProductInList(productName) {
    this.productPage.inventoryItemName().should('contain', productName);
  }

  selectCategoryPhones(){
    this.productPage.productPhones().should('be.visible').click();
    this.productPage.inventoryList().contains('phone');
  }

  selectCategoryLaptop(){
    this.productPage.productLaptops().should('be.visible').click();
    this.productPage.inventoryList().contains('laptop');
  }

  selectCategoryMonitor(){
    this.productPage.productMonitors().should('be.visible').click();
    this.productPage.inventoryList().contains('monitor');
  }

  selectHighToLowFilter(){
    this.productPage.productFilter().select('Price (high to low)');
  }
  
  logOut(){
    cy.visit(baseUrl)
    this.loginPage.logoutButton().click();
    this.loginPage.navigationBar().find('#login2').should('be.visible');
    
}

addProductToCart(productName) {
  cy.contains(productName).click();
  this.productPage.AddToCart().click();
  cy.wait(3000) // wait for the page load , as dynamic load is not working in this application
}

addRandomProductToCart() {
this.productPage.productsList().then((cards) => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  cy.wrap(cards[randomIndex]).as('selectedCard');
  });
  cy.get('@selectedCard').find('a.hrefch').click();
  this.productPage.AddToCart().click(); 
  }

}

export default productPageActions;
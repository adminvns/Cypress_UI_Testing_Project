import productPageObject from '../pageObjects/productPage';
import LoginPage from '../pageObjects/loginPage';

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
    cy.visit('/')
    this.loginPage.logoutButton().click();
    this.loginPage.navigationBar().find('#login2').should('be.visible');
    
}

addProductToCart(productName) {
  cy.contains(productName).click();
  this.productPage.AddToCart().click(); 
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
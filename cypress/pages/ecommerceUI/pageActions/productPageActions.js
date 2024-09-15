import productPageObject from '../pageObjects/productPage';
import LoginPage from '../pageObjects/loginPage';

class productPageActions {
  constructor() {
    this.productPage = new productPageObject();
    this.loginPage = new LoginPage();
  }

  searchProductByName(name) {
    this.productPage.inventoryList().contains(name)
  }

  verifyProductInList(productName) {
    this.productPage.inventoryItemName().should('contain', productName);
  }

  selectLowToHighFilter(){
    this.productPage.productFilter().select('Price (low to high)');
  }

  selectHighToLowFilter(){
    this.productPage.productFilter().select('Price (high to low)');
  }
  
  logOut(){
    this.productPage.menu().click();
    this.productPage.logoutButton().click();
    this.loginPage.loginButton().should('be.visible');
}

addProductToCart(productName) {
  cy.contains(productName).click();
  this.productPage.AddToCart().click(); 
}

addRandomProductToCart() {
  this.productPage.dynamicAddToCart().then($buttons => {
    const count = $buttons.length;
    cy.log('Number of "Add to cart" buttons:', count);
    if (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($buttons).eq(randomIndex).click(); 
    } else {
      throw new Error('No Add to Cart buttons found');
    }
  });
}

}

export default productPageActions;
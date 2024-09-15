import CartPage from '../pageObjects/cart';

class CartPageActions {
  constructor() {
    this.cartPage = new CartPage();
  }

  verifyCartCount(){
    this.cartPage.cartBadge().should('be.visible');
  }

  clickOnCart(){
    this.cartPage.cartIcon().click();
  }

  verifyCartTitle() {
    this.cartPage.title().contains('Cart');
  }

  verifyProductInCart(productName) {
    this.cartPage.productInCart(productName).should('be.visible');
  }

  proceedToCheckout() {
    this.cartPage.checkoutButton().click();
  }

  getItemPrice() {
    return this.cartPage.itemPrice().first() // Ensure we return the Cypress chain
      .invoke('text')
      .then(text => {
        const price = parseFloat(text.replace('$', '').trim());
        return price; // This price will be accessible in the test via a `.then()`
      });
  }
}

export default CartPageActions;

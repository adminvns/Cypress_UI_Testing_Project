import CartPage from '../pageObjects/cart';

class CartPageActions {
  constructor() {
    this.cartPage = new CartPage();
  }


  clickOnCart(){
    this.cartPage.cartIcon().click();
  }

  verifyCartTitle() {
    this.cartPage.title().contains('Products');
  }

  verifyProductInCart(productName) {
    this.cartPage.productInCart(productName).should('be.visible');
  }

  proceedToCheckout() {
    this.cartPage.checkoutButton().click();
    cy.wait(1000)
  }

  getItemPrice() {
    return this.cartPage.itemPrice().first()
      .invoke('text')
      .then(text => {
        const price = parseFloat(text.replace('$', '').trim());
        return price;
      });
  }

  fillCheckoutInformation(name, country, city,cardNumber,cardMonth,cardYear) {
    this.cartPage.name().type(name);
    this.cartPage.country().type(country);
    this.cartPage.city().type(city);
    this.cartPage.creditCard().type(cardNumber);
    this.cartPage.month().type(cardMonth);
    this.cartPage.year().type(cardYear);
  }

  verifyProductInCartPage(productName, productPrice){
    this.cartPage.productList().find('td').contains(productName).should('exist');
    this.cartPage.productList().find('td').contains(productPrice).should('exist');
  }
  clickSubmitOrder(){
    this.cartPage.submitOrder().click();
  }

  verifyOrderConfirmation(){
    this.cartPage.confirmation().contains('Thank you for your purchase!');
    this.cartPage.confirmButton().click();
  }
}

export default CartPageActions;

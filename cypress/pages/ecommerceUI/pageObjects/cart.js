class CartPage {
    title() {
      return cy.get('[data-test="title"]');
    }
  
    productInCart(productName) {
      return cy.get('.inventory_item_name').contains(productName);
    }
  
    continueShoppingButton() {
      return cy.get('[data-test="continue-shopping"]');
    }
  
    checkoutButton() {
      return cy.get('[data-test="checkout"]');
    }

    cartBadge(){
      return cy.get('[data-test="shopping-cart-badge"]');
    }

    cartIcon(){
      return cy.get('[data-test="shopping-cart-link"]');
    }
    
    itemPrice() {
      return cy.get('[data-test="inventory-item-price"]')
    }
    
  }
  
  export default CartPage;
  
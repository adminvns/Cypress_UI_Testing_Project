class CartPage {
    title() {
      return cy.get('.col-lg-8 > h2');
    }
  
    productInCart(productName) {
      return cy.get('.inventory_item_name').contains(productName);
    }
  
    continueShoppingButton() {
      return cy.get('[data-test="continue-shopping"]');
    }
  
    checkoutButton() {
      return cy.get(`[data-target='#orderModal']`);
    }

    cartIcon(){
      return cy.get('#cartur');
    }
    
    itemPrice() {
      return cy.get('[data-test="inventory-item-price"]')
    }
    
    name(){
      return cy.get('#name');
    }

    country(){
      return cy.get('#country');
    }

    city(){
      return cy.get('#city');
    }

    creditCard(){
      return cy.get('#card');
    }

    month(){
      return cy.get('#month');
    }

    year(){
      return cy.get('#year');
    }

    submitOrder(){
      return cy.get('[onclick="purchaseOrder()"]');
    }

    confirmation(){
      return cy.get('.sweet-alert');
    }
    
    confirmButton(){
      return cy.get('.confirm');
    }

    productList(){
      return cy.get('#tbodyid',{timeout:6000});
    }
    
  }
  
  export default CartPage;
  
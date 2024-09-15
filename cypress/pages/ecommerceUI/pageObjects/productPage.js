class productPageObject {
    inventoryList() {
      return cy.get('.inventory_list');
    }
  
    inventoryItemName() {
      return cy.get('.inventory_item_name');
    }

    productFilter(){
      return cy.get('[data-test="product-sort-container"]');
    }

    itemPrice(){
        return cy.get('[data-test="inventory-item-price"]');
    }

    firstProductInList(){
      return cy.get(':nth-child(1) > [data-test="inventory-item-description"]')
    }
    
    menu(){
      return cy.get('#react-burger-menu-btn');
    }

    logoutButton(){
        return cy.get('#logout_sidebar_link');
    }

    dynamicAddToCart(){
      return cy.get('[data-test^="add-to-cart-"]');
    }

    AddToCart(){
      return cy.get('[data-test="add-to-cart"]')
    }

  }
  
  export default productPageObject;
  
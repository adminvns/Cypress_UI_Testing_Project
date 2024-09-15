class productPageObject {
    inventoryList() {
      return cy.get('#tbodyid');
    }
  
    inventoryItemName() {
      return cy.get('.inventory_item_name');
    }

    productPhones(){
      return cy.get(`[onclick="byCat('phone')"]`);
    }

    productLaptops(){
      return cy.get(`[onclick="byCat('notebook')"]`);
    }

    productMonitors(){
      return cy.get(`[onclick="byCat('monitor')"]`);
    }

    itemPrice(){
        return cy.get('.price-container');
    }

    firstProductInList(){
      return cy.get(':nth-child(1) > [data-test="inventory-item-description"]')
    }
    

    logoutButton(){
        return cy.get('#logout2');
    }

    dynamicAddToCart(){
      return cy.get('[data-test^="add-to-cart-"]');
    }

    AddToCart(){
      return cy.get('.col-sm-12 > .btn');
    
    }

  }
  
  export default productPageObject;
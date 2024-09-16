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
    
    productsList(){
      return cy.get('#tbodyid .card');
    }

    dynamicAddToCart(){
      return cy.get('[data-test^="add-to-cart-"]');
    }

    AddToCart(){
      return cy.get('a.btn.btn-success.btn-lg');
    
    }

  }
  
  export default productPageObject;
Cypress.Commands.add('clearAllProducts', () => {
    cy.get('tbody#tbodyid tr',{timeout:15000}).then($rows => {
      const rowCount = $rows.length;
      if (rowCount > 0) {

        for (let i = 0; i < rowCount - 1; i++) {
          cy.get('tbody#tbodyid tr',{timeout:15000}).first().find('a').click();
        }
        cy.get('tbody#tbodyid tr',{timeout:15000}).first().find('a').click();
      } else {
        cy.log('No products to delete.');
      }
    });
  });
  

  Cypress.Commands.add('visitHome', () => {
    cy.visit('/');
  });

  Cypress.Commands.add('getProductDetails', () => {
    // Locate and extract the product name and price
    cy.get('h2.name').invoke('text').then((productName) => {
      cy.get('h3.price-container').invoke('text').then((priceText) => {
        // Clean up the price text if needed (e.g., remove currency symbols)
        const price = priceText.replace(/[^\d]/g, ''); // This removes non-numeric characters
        
        // Save both values in aliases for later use
        cy.wrap({ productName, price }).as('productDetails');
      });
    });
  });
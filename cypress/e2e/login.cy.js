import LoginActions  from '../pages/ecommerceUI/pageActions/loginPageActions';
import productPageActions from '../pages/ecommerceUI/pageActions/productPageActions';

describe('Verify Login Page Tests', () => {
  
    const loginActions = new LoginActions();
    const productPage = new productPageActions();
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    beforeEach(() => {
        loginActions.visit();
      });
    // Happy Path: Valid login scenario
    it('Verify User is able to login with Valid Credentials', () => {

        // login with valid credentials
        loginActions.login(username, password);

        // Verify user is redirected to the products page URL after login
        cy.url().should('include', '/inventory.html');
        
        //checking if the product grid is visible
        cy.get('.inventory_list').should('be.visible');
        
        //logout session
        productPage.logOut();
    });

    it('Verify Error is displayed on Invalid Credentials', () => {
        // login via wrong creds
        loginActions.login('invalid_user', 'wrong_password');

        // Verify the error message is displayed
       loginActions.verifyErrorMessage('Username and password do not match any user in this service')
    });
});

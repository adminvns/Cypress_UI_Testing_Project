import LoginActions from '../pages/ecommerceUI/pageActions/loginPageActions';
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

        //Verify User logged in 
        loginActions.verifyUserLogin('sammy')
    });

    it('Verify Error is displayed on Invalid Credentials', () => {
        // login via wrong creds
        loginActions.login('invalid_user', 'wrong_password');

        // Verify the error message is displayed
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Wrong password.');
          });
    });
});

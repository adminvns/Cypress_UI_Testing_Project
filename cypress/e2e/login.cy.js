import LoginActions from '../pages/ecommerceUI/pageActions/loginPageActions';

describe('Verify Login Page Tests', () => {

    const loginActions = new LoginActions();
    const username = Cypress.env('userName');
    const password = Cypress.env('userPassword');

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
        loginActions.verifyErrorMessage('Wrong')
    });
});

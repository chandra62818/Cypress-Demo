import tstdata from '../fixtures/signupvalidinvalid.json';
describe('Invalid Login Validation', function() {
    
  
    it('Invalid User Login', () => {
        cy.visit('/login');
        cy.get('[data-qa="login-email"]').click().clear().type('randomuser@mail.com');
        cy.get('[data-qa="login-password"]').click().clear().type(tstdata["LoginCreds"]["validcreds"]["validemail"]);
        cy.get('[data-qa="login-button"]').click();
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > p:nth-child(4)")
        .should('have.text', 'Your email or password is incorrect!');
    });
})
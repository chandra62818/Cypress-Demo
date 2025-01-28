import tstdata from "../fixtures/signupvalidinvalid.json";

describe('Cypress valid login and Invalid', () => {
    
it.only('valid & Invalid Login', () => {
    cy.visit('/login');
    cy.fixture("signUpvalidinvalid").then((tstdata) => {
      cy.usrlogin(tstdata["LoginCreds"]["validcreds"]["validemail"],
                  tstdata["LoginCreds"]["validcreds"]["validpwd"]);

      })


      cy.get('a[href="/logout"]').should('exist');
      cy.intercept('GET', '/logout').as('logoutcheck');
      cy.get('a[href="/logout"]').click();
      cy.wait('@logoutcheck');

      cy.wait(2000);


      cy.visit('/login');
      cy.fixture('signUpvalidinvalid').then((tstdata) => {
        cy.usrlogin(tstdata["LoginCreds"]["invalidcreds"]["invalidemail"],
                    tstdata["LoginCreds"]["invalidcreds"]["invalidpwd"]);
        cy.get('[action="/login"] > p').invoke('text')
          .should('equal', 'Your email or password is incorrect!');
      });
    });
});

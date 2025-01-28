// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// This is a parent command


Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Cypress.Commands.add('DeleteAccount',() =>{
    //Clicking on the Delete Account Button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

    //validating the Account Deletion
    cy.get('.title.text-center').contains('Account Deleted!');

})


Cypress.Commands.add('usrlogin', (email, password) => {
  cy.visit('/login');
  cy.intercept('POST', '/login').as('logincheck');
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
  cy.wait('@logincheck');
});

Cypress.Commands.add('logindetails', () => {
  cy.visit('/login');
  cy.get('[data-qa="login-email"]').type("xyz@xyz.xyz");
  cy.get('[data-qa="login-password"]').type("xyz@xyz.xyz");
  cy.get('[data-qa="login-button"]').click();
});


Cypress.Commands.add('Add2CartSession', () => {
  cy.session('addToCartSession', () => {
    cy.logindetails();
    cy.visit('/products');
    cy.get('.form-control.input-lg').type('men');
    cy.get('.btn.btn-default.btn-lg').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-footer > .btn').trigger('click');
    cy.wait(2000);
    cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-footer > .btn').trigger('click');
    cy.wait(2000);
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.btn.btn-default.check_out').click();
    cy.wait(3000);
    cy.get('.address_address1.address_address2').invoke('text').then((deliveryAddress) => {
      cy.get('.address_address1.address_address2').invoke('text').then((billingAddress) => {
        expect(deliveryAddress.trim()).to.equal(billingAddress.trim());
      });
    });
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
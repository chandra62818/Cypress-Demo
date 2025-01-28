describe('Login', () => {
    it('validation message 1', () => {
      cy.visit('https://automationexercise.com/login');
  
      cy.xpath('//*[@data-qa="login-email"]').clear();
      cy.xpath('//*[@data-qa="login-password"]').clear();
      cy.xpath('//*[@data-qa="login-button"]').click();
  
      cy.xpath('//*[@data-qa="login-email"]')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Please fill out this field.');
    });
  });
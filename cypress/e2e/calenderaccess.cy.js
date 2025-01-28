describe('Date Picker Validation', () => {
    it('Date Picker', () => {
      cy.visit("https://testautomationpractice.blogspot.com/");
      cy.get('#datepicker').click();
      cy.get(':nth-child(1) > :nth-child(4) > .ui-state-default').click();
      cy.get('#datepicker').should('have.value', '01/01/2025');
      cy.wait(2000);
      cy.get('#datepicker').clear();
      cy.get('#datepicker').type('12/12/2024').should('have.value', '12/12/2024');
    });
  });
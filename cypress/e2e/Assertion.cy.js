describe('Assertion Test case', () => {
    it('Assertion case for Orange HRM', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.url().should('include','orangehrm')
      .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .should('contain','hrm')
      .should('not.contain','hcl')

      cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

      cy.get("input[placeholder='Username']").type("Admin");
      cy.get("input[placeholder='Password']").type("admin123");
      
      cy.get("input[placeholder='Username']").should('have.value','Admin')
      cy.get("input[placeholder='Password']").should('have.value',"admin123");

      cy.get("button[type='submit']").click();
    })
  })
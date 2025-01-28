describe('Table validation', () => {
    it('Assertion case for Table validation', () => {
        cy.visit("https://www.w3schools.com/html/html_tables.asp");
        cy.get("#customers").contains('th','Country');
        cy.get("#customers").should('be.visible','Canada')

    })
})
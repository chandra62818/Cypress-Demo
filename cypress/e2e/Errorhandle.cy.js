describe('Viewport & Error Handling Validation', function() {
    it('Viewport', () => {
      cy.viewport('iphone-x');
      cy.visit('/view_cart');
      cy.clearAllCookies();
      cy.clearAllSessionStorage();
    });
  
    it('Error Handle using cy.on()', () => {
      cy.visit('https://www.selenium.dev/');
      cy.on('uncaught:exception', (e) => {
        return false;
      });
      cy.clearAllCookies();
      cy.clearAllSessionStorage();
    });
  
    it('Error Handle using cy.on() and click', () => {
      cy.visit('https://www.javatpoint.com/', { failOnStatusCode: false });
      cy.on('uncaught:exception', (e) => {
        return false;
      });
      cy.get('.nav > li:nth-child(4) > a').click();
    });
  
    it('URL Reload', () => {
      cy.visit('https://demo.automationtesting.in/Windows.html');
      cy.reload();
    });
  });
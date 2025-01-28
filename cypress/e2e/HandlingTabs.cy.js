describe('New Tab Handling Validation', function() {
    it('New Tab Handling_href', () => {
      cy.visit('https://demo.automationtesting.in/Windows.html');
      cy.get('#Tabbed > a').then(tab => {
        const nTab = tab.prop('href');
        cy.visit(nTab);
        cy.on('uncaught:exception', (e) => {
          if (e.message.includes('Things went bad')) {
            // we expected this error, so let's ignore it
            // and let the test continue
            return false;
          }
        });
        cy.url().should('eq', 'https://www.selenium.dev/');
      });
    });
  
    it('New Tab Handling_Target', () => {
      cy.visit('https://demo.automationtesting.in/Windows.html');
      cy.get('#Tabbed > a').invoke('attr', 'target', '_self').click();
      cy.on('uncaught:exception', (e) => {
        if (e.message.includes('Things went bad')) {
          // we expected this error, so let's ignore it
          // and let the test continue
          return false;
        }
      });
      cy.url().should('eq', 'https://www.selenium.dev/');
    });
  
    it('URL Reload', () => {
      cy.visit('https://www.automationexercise.com/');
      cy.reload();
    });
  });
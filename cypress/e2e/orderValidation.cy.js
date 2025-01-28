describe('Order Validation', function() {
    it('validation', () => {
      // Search
      cy.visit('www.saucedemo.com');
      cy.get('#user-name').type("standard_user");
      cy.get('#password').type("secret_sauce")
      cy.get('#login-button').click();
      
      cy.get('.product_sort_container').select('lohi');
      cy.get('.inventory_item_price').then(($prices) => {
        expect($prices.length).to.be.greaterThan(1);
        cy.wrap($prices).each((price, index, prices) => {
          if (index < prices.length - 1) {
            const currentText = cy.wrap(price).invoke('text');
            const nextText = cy.wrap(prices[index + 1]).invoke('text');
            cy.wrap(price).invoke('text').then((currentText) => {
              cy.wrap(prices[index + 1]).invoke('text').then((nextText) => {
                const currentPrice = parseFloat(currentText.replace('$', ''));
                const nextPrice = parseFloat(nextText.replace('$', ''));
                if (nextPrice >= currentPrice) {
                  cy.log('Pass: The products are ordered as requested');
                } else {
                  cy.log('Fail: The products are not ordered as requested');
                }
              });
            });
          }
        });
      });
    });
  });
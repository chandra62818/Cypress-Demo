describe('Alert Validation', function() {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    });
  
    it('alert Handle', () => {
      cy.get('button[onclick="jsAlert()"]').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contain('I am a JS Alert');
      });
      cy.get('#result').should('have.text', 'You successfully clicked an alert');
    });
  
    it('confirm Alert - ok', () => {
      cy.get('button[onclick="jsConfirm()"]').click();
      cy.on('window:confirm', (text) => {
        expect(text).to.contain('I am a JS Confirm');
      });
      cy.get('#result').should('have.text', 'You clicked: Ok');
    });
  
    it('confirm Alert - cancel', () => {
      cy.get('button[onclick="jsConfirm()"]').click();
      cy.on('window:confirm', () => false);
      cy.get('#result').should('have.text', 'You clicked: Cancel');
    });

    it('Prompt jsPrompt() Alert - ok', () => {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Hello');
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.get('#result').should('have.text', 'You entered: Hello');
      });
    });
    
    it('Prompt jsPrompt() Alert - cancel', () => {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(null);
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.get('#result').should('have.text', 'You entered: null');
      });
    });
  });

  
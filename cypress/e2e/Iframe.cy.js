import  iFrameMethod  from '../support/commonFunctions';

describe('iFrame validation', function() {

  it('iFrame Basic Access', () => {
    cy.visit('https://jqueryui.com/droppable/');
    cy.get('iframe.demo-frame').its('0.contentDocument.body').find('#draggable');
  });

  it('iFrame with wrap', () => {
    cy.visit('https://jqueryui.com/droppable/');
    cy.get('iframe.demo-frame').its('0.contentDocument.body').should('not.be.empty').then((frame) => {
      cy.wrap(frame).as('fBody');
      cy.get('@fBody').find('#droppable > p').should('have.text', 'Drop here');
    });
  });

  it('iframe using package', () => {
    cy.visit('https://demo.automationtesting.in/Frames.html');
    cy.frameLoaded('#singleframe').then(($iframe) => {
      const $body = $iframe.contents().find('body')

cy.wrap($body)
        .find('.col-xs-6.col-xs-offset-5 > input')
        .type('Hello');
    });
  });

});
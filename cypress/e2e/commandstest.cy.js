import userdata from "../fixtures/signupDetails.json";
import '../support/commands';
describe('Cypress Test validation', () => {
    it('login with custom commands Add product into the Cart and Logout', () => {
      //Launching the Website
      cy.visit('https://www.automationexercise.com/');
      //cy.login('xyz@xyz.xyz',"xyz@xyz.xyz")
        cy.login(userdata.username,userdata.pwd);

        //Clicking on product from the product menu 
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    
        // Adding the product into the Cart
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get(':nth-child(5) > .btn').click();
    
        //Clicking on the logout Button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    
    })
})

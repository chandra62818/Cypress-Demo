import userData from "../fixtures/signupDetails.json";
import {signupMethod} from "../support/commonFunctions";
describe('Cypress Test automation', () => {
    it('Creating the New user', () => {
      //Launching the Website
      cy.visit('https://www.automationexercise.com/');
      
      signupMethod(userData.name,userData.signup);
  
      //clicking on the signup Button
  
      cy.get('#id_gender1').click();
      cy.get('[data-qa="password"]').type("asdf@asdf.asd");
      cy.get('[data-qa="days"]').select("20");
      cy.get('[data-qa="months"]').select("May");
      cy.get('[data-qa="years"]').select("1991")
      cy.get('[data-qa="first_name"]').type("asdf");
      cy.get('[data-qa="last_name"]').type("asdf");
      cy.get('[data-qa="address"]').type("HYD Telangana")
      cy.get('[data-qa="state"]').type("telangana");
      cy.get('[data-qa="city"]').type("Hyderabad");
      cy.get('[data-qa="zipcode"]').type("500001");
      cy.get('[data-qa="mobile_number"]').type("9999999999");
      cy.get('[data-qa="create-account"]').click();
      
      //validating the Account Creation
      cy.get('.title.text-center').then((msg) =>{
        expect(msg).to.contain('Account Created!')
      })
    })
})
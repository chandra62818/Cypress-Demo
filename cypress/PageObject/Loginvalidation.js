import tstdata from '../fixtures/signupvalidinvalid.json';

class Loginvalidation {
    URLNavigation_Login() {
        cy.visit('/login');
    }

  Invaliduser_Login() {
    this.URLNavigation_Login();
    cy.get('[data-qa="login-email"]').click().clear().type('randomuser@mail.com');
    cy.get('[data-qa="login-password"]').click().clear().type(tstdata["LoginCreds"]["validcreds"]["validemail"]);
    cy.get('[data-qa="login-button"]').click();
    cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > p:nth-child(4)")
    .should('have.text', 'Your email or password is incorrect!');
  }

  Invalidpwd_Login() {
    this.URLNavigation_Login();
    cy.get('[data-qa="login-email"]').click().clear().type(tstdata["LoginCreds"]["validcreds"]["validemail"]);
    cy.get('[data-qa="login-password"]').click().clear().type('InvalidPwd');
    cy.get('[data-qa="login-button"]').click();
    cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > p:nth-child(4)")
    .should('have.text', 'Your email or password is incorrect!');
  }

  valid_Login() {
    this.URLNavigation_Login();
    cy.get('[data-qa="login-email"]').click().clear().type(tstdata["LoginCreds"]["validcreds"]["validemail"]);
    cy.get('[data-qa="login-password"]').click().clear().type(tstdata["LoginCreds"]["validcreds"]["validpwd"]);
    cy.get('[data-qa="login-button"]').click();
    cy.get("a[href='/logout']").should('be.visible');
  }

  valid_Login_Keyboard() {
    this.URLNavigation_Login();
    cy.get('[data-qa="login-email"]').click().clear().type(tstdata["LoginCreds"]["validcreds"]["validemail"])
    cy.get('[data-qa="login-password"]').type(tstdata["LoginCreds"]["validcreds"]["validpwd"]+'{enter}' );

    
    cy.get("a[href='/logout']").should('be.visible');
  }

  
}

export default Loginvalidation;
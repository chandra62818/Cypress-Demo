
describe('Cypress Test automation', () => {
  it('Creating the New user', () => {
    //Launching the Website
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type('asdfasdf');
    cy.get('[data-qa="signup-email"]').type("asdf@asdf.asd");
    cy.get('[data-qa="signup-button"]').click();

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
    cy.get('.title.text-center').contains('Account Created!');

    //Clicking on the continue button
    cy.get('[data-qa="continue-button"]').click();

    //Clicking on the logout Button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

  })
  it("Signin and Adding product into the Cart ", () =>{
    cy.visit('https://www.automationexercise.com/');
    //clicking on the signin page
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    //signing up with the user credentials
    cy.get('[data-qa="login-email"]').type("asdf@asdf.asd");
    cy.get('[data-qa="login-password"]').type("asdf@asdf.asd");
    cy.get('[data-qa="login-button"]').click();

    //Clicking on product from the product menu 
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();

    // Adding the product into the Cart
    cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get(':nth-child(5) > .btn').click();

    //Clicking on the logout Button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

  })
  it("signin and Deleting the account", () =>{

    cy.visit('https://www.automationexercise.com/');
    //clicking on the signin page
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    //signing up with the user credentials
    cy.get('[data-qa="login-email"]').type("asdf@asdf.asd");
    cy.get('[data-qa="login-password"]').type("asdf@asdf.asd");
    cy.get('[data-qa="login-button"]').click();

    //Clicking on the Delete Account Button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

    //validating the Account Deletion
    cy.get('.title.text-center').contains('Account Deleted!');

    //Clicking on the continue button
    cy.get('[data-qa="continue-button"]').click();

  })

})

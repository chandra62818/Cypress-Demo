export const loginMethod =(id,passwd) => {
  cy.visit('/login');
    cy.get('[data-qa="login-email"]').type(id);
    cy.get('[data-qa="login-password"]').type(passwd);
    cy.get('[data-qa="login-button"]').click();
}

export const signupMethod =(name,email) => {
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
      cy.get('[data-qa="signup-name"]').type(name);
      cy.get('[data-qa="signup-email"]').type(email);
      cy.get('[data-qa="signup-button"]').click();
}

export const iFrameMethod = (iFrameBody) => {
  cy.get(iFrameBody)
    .its('0.contentDocument.body').should('not.be.empty').then(() =>{
      return(cy.wrap)
    })

}

export const DeleteAccount = () =>{
  //Clicking on the Delete Account Button
  cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
  //validating the Account Deletion
  cy.get('.title.text-center').contains('Account Deleted!');
}

export const AddToCart = () =>{
  //Clicking on product from the product menu 
  cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
  // Adding the product into the Cart
  cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
  cy.get(':nth-child(5) > .btn').click();

}

export const Logout = () =>{
  //Clicking on the logout Button
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
}
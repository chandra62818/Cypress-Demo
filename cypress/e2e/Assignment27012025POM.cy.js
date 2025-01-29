import Products from '../PageObject/Products';
const Product = new Products();

describe('Login to Saucedemo account', () => {
  before('URL', () => {
    Product.navigateToLoginurl();
  });

  it('Check the item with high price', () => {
    // Login
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('#login-button').click();

    // Products page
    const title = cy.get('.product_label');
    cy.log(title);

    Product.Dropdownlowtohigh();
    Product.choosinghighrateproduct();
    Product.addtocart();
    Product.checkout();
    Product.checkoutdetails();
    Product.submit();
    Product.Successmsg();
  });
});
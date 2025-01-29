class Products {
  checkoutbtn = '.btn_action.checkout_button';
  finishbtn = '.btn_action.cart_button';
  UName = '[data-test="username"]';
  pwd = '[data-test="password"]';
  submitBtn = '#login-button';

  constructor() {
    this.textFields = {
      email: '[data-test="username"]',
      password: '[data-test="password"]'
    };
  }

  navigateToLoginurl() {
    cy.visit('https://www.saucedemo.com/v1/');
  }

  Dropdownlowtohigh() {
    // dropdown price low to high
    cy.get('.product_sort_container').select(2);
    // extract the prices
    const Prices = cy.get('.inventory_item_price');
    let nonvalid = [];
    let max;

    if (Prices.length !== 0) {
      max = Prices[0];
      for (let j = 1; j < Prices.length; j++) {
        if (Prices[j] < max) {
          nonvalid.push(Prices[j]);
        } else {
          max = Prices[j];
        }
      }
    }
  }

  choosinghighrateproduct() {
    // Choose the product with high rate
    cy.scrollTo('bottom');
    cy.get('.inventory_item_price').contains('$49.99').then((item) => {
      cy.get('#item_5_title_link').click();
      cy.get('.btn_primary.btn_inventory').click();
    });
  }

  addtocart() {
    // click on cart and verify the title of product as expected
    cy.get('.fa-layers-counter.shopping_cart_badge').click();
    cy.get('.inventory_item_name').then((item) => {
      expect(item).to.have.text('Sauce Labs Fleece Jacket');
    });
  }

  checkout() {
    cy.get(this.checkoutbtn).then((submitBtn) => {
      expect(submitBtn).to.have.text('CHECKOUT');
    });
    cy.get(this.checkoutbtn).click();
  }

  checkoutdetails() {
    cy.get('#first-name').type("Hello");
    cy.get('#last-name').type(" Mr Coder");
    cy.get('#postal-code').type("500001");
    cy.scrollTo('bottom');
    cy.get('.btn_primary.cart_button').dblclick();
  }

  submit() {
    cy.scrollTo('bottom');
    cy.get(this.finishbtn).then((submit) => {
      expect(submit).to.have.text('FINISH');
    });
    cy.log(this.finishbtn);
    cy.get(this.finishbtn).dblclick();
  }

  Successmsg() {
    // Check the success message
    cy.get('.complete-header').then((msg) => {
      expect(msg).to.have.text('THANK YOU FOR YOUR ORDER');
    });
  }
}

export default Products;
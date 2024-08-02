describe("navbar tests", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get('[data-id="menuItem"]').within(() => {
      cy.contains("Home").should("be.visible");
      cy.contains("Product").should("be.visible");
      cy.contains("Login").should("be.visible");
      cy.contains("Sign Up").should("be.visible");
      cy.contains("Cart").should("not.exist");
      cy.contains("Account").should("not.exist");
    });


    cy.get('[data-id="orderButton"]').within(() => {
      cy.contains("Order Now").should("be.visible");
    });
    cy.get('[data-id="userButton"]').should('contain', 'Offers');
  });
});

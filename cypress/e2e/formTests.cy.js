describe("Choose Station Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/choose-station");
  });

  it("should display a list of stations", () => {
    cy.get("#root_fuelType").click();
    cy.get(".station-list li").should("have.length.greaterThan", 0);
  });

  it("should allow a station to be selected", () => {
    cy.get(".station-list li").first().click();
    cy.get(".selected-station").should("contain", "You selected");
  });

  it("should display an error if no station is selected", () => {
    cy.get("button").contains("Continue").click();
    cy.get(".error-message").should("contain", "Please select a station");
  });

  it("should allow the user to continue after selecting a station", () => {
    cy.get(".station-list li").first().click();
    cy.get("button").contains("Continue").click();
    cy.url().should("include", "/details");
  });
});

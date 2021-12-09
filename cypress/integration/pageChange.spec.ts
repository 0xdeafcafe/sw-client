/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays the correct tabs on the homepage", () => {
    cy.get(".nav").should("exist");
    cy.get(":nth-child(1) > .nav-link").should("have.text", "People");
    cy.get(":nth-child(2) > .nav-link").should("have.text", "Planets");
    cy.get(":nth-child(3) > .nav-link").should("have.text", "Films");
    cy.get(":nth-child(4) > .nav-link").should("have.text", "Species");
    cy.get(":nth-child(5) > .nav-link").should("have.text", "Vehicles");
    cy.get(":nth-child(6) > .nav-link").should("have.text", "Starships");
  });

  it("displays the correct data on click of a tab", () => {
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get(".tab-content > .active").should("exist");
    cy.get(
      ".active > :nth-child(1) > .MuiPaper-root > #panel1a-header > .MuiAccordionSummary-content > p"
    ).should("have.text", "Luke Skywalker");
  });

  it("displays the correct data inside the accordion", () => {
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get(
      ".active > :nth-child(1) > .MuiPaper-root > #panel1a-header > .MuiAccordionSummary-content"
    ).click();
    cy.get(
      ".active > :nth-child(1) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > :nth-child(1) > :nth-child(2) > :nth-child(1)"
    ).should("have.text", "Name: Luke Skywalker");
  });

  it("displays a modal on click of button", () => {
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get(
      ".active > :nth-child(1) > .MuiPaper-root > #panel1a-header > .MuiAccordionSummary-content"
    ).click();
    cy.get(
      ".active > :nth-child(1) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > :nth-child(1) > :nth-child(3) > .css-bjdol9"
    ).click();
    cy.get(".MuiBox-root").should("exist");
  });

  it("displays the previous button when the next button has been clicked", () => {
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get(".sc-gzVnrw > .btn").click();
    cy.get(".sc-gzVnrw > :nth-child(1)").should("exist");
  });

  it("checks to see if favourites button exists and persists", () => {
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get(
      ".active > :nth-child(1) > .MuiPaper-root > #panel1a-header"
    ).click();
    cy.get(
      '.active > :nth-child(1) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > :nth-child(1) > .sc-bdVaJa > [data-testid="FavoriteBorderIcon"]'
    ).should("exist");
    cy.get(
      '.active > :nth-child(1) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > :nth-child(1) > .sc-bdVaJa > [data-testid="FavoriteBorderIcon"]'
    ).click();
    cy.get('[data-testid="FavoriteIcon"]').should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );

    cy.reload();

    cy.get(":nth-child(1) > .nav-link").click();
    cy.get(
      ".active > :nth-child(1) > .MuiPaper-root > #panel1a-header"
    ).click();

    cy.get('[data-testid="FavoriteIcon"]').should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );
  });
});

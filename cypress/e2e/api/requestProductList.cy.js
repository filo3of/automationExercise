/// <reference types="cypress" />

describe(
  "Using API get product list and verify product",
  { tags: "@api" },
  () => {
    it("Get product list", () => {
      // TODO -> Add cy.api() once the migration fix for newest Cypress is in place

      cy.request("GET", "/api/productsList").then((response) => {
        expect(response.status).to.eq(200);

        cy.consoleLog(response.body);
      });
    });
  },
);

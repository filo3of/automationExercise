/// <reference types="cypress" />

describe(
  "Using API get product list and verify product",
  { tags: "@api" },
  () => {
    it("Get product list", () => {
      cy.request({
        method: "POST",
        url: "/api/searchProduct",
        form: true,
        body: {
          search_product: "Premium Polo T-Shirts",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);

        // API may return the body as a JSON string, so parse it when needed
        const body =
          typeof response.body === "string"
            ? JSON.parse(response.body)
            : response.body;

        expect(body.responseCode).to.eq(200);

        expect(body.products).to.have.length.greaterThan(0);

        // Access the first product's name and validate it
        const productName = body.products[0].name;
        expect(productName).to.eq("Premium Polo T-Shirts");
      });
    });
  },
);

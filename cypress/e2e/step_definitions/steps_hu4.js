import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que el usuario entra a la barbería online", () => {
    cy.visit("/");
});



Then("el barbero {string} debería estar listado", (barberName) => {
    cy.contains('h4', barberName).should("be.visible");
});

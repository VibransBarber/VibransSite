import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que abro la página de Vibrans", () => {
    cy.visit("/");
});

Then("debería ver el título {string}", (title) => {
    cy.contains('h1', title, { matchCase: false }).should("be.visible");
});

Then("debería ver el botón para reservar cita", () => {
    cy.get('button').contains(/book|reserva/i).should("be.visible");
});

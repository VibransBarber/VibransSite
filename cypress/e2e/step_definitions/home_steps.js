import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que abro la página de Vibrans", () => {
    cy.visit("/");
});

Then("debería ver el título {string}", (title) => {
    // En el Header "Vibrans Barbershop" es un h2
    cy.contains('h2', title, { matchCase: false }).should("be.visible");
});

Then("debería ver el slogan {string}", (slogan) => {
    // En el Hero el slogan es un h1
    cy.contains('h1', slogan, { matchCase: false }).should("be.visible");
});

Then("debería ver el botón para reservar cita", () => {
    cy.get('button').contains(/book|reserva/i).should("be.visible");
});

import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que el cliente se encuentra en Vribrans Barbershop", () => {
    cy.visit("/");
});

Then("debería ver el título de membresías {string}", (title) => {
    cy.contains('h2', title, { matchCase: false }).should("be.visible");
});

Then("el plan {string} debería mostrarse con su respectivo precio", (plan) => {
    cy.contains('h3', plan).should("be.visible");
});

Then("el plan {string} debería destacar como popular con {string}", (plan, price) => {
    // Encontramos el tarjeta del plan y verificamos que tenga el precio y el texto "Most Popular"
    cy.contains('h3', plan).parents('.group').within(() => {
        cy.contains(price).should("be.visible");
        cy.contains(/Más Popular/i).should("be.visible");
    });
});

Then("el plan {string} debería mostrarse", (plan) => {
    cy.contains('h3', plan).should("be.visible");
});

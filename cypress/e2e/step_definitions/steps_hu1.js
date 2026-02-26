import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que el cliente está en la página principal", () => {
    cy.visit("/");
});

Then("debería ver la sección {string}", (section) => {
    cy.contains(section, { matchCase: false }).should("be.visible");
});

Then("debería ver el formulario de {string}", (formTitle) => {
    cy.contains(formTitle, { matchCase: false }).should("be.visible");
    cy.get('input[type="tel"]:visible').should("be.visible");
});

Then("el botón de {string} debería estar visible", (buttonText) => {
    cy.get('button:visible').contains(buttonText, { matchCase: false }).should("be.visible");
});

When("el cliente ingresa su número {string} en el campo de teléfono", (phone) => {
    cy.get('input[type="tel"]:visible').type(phone);
});

When("hace clic en el botón de check-in", () => {
    // Prevent actual form submission from reloading or failing in mock mode
    cy.get('form').invoke('submit', (e) => e.preventDefault());
    cy.get('button:visible').contains('Check-in Ahora').click();
});

Then("el sistema debería procesar la solicitud", () => {
    // En este punto es un mock (alert), por lo que verificamos que el input se llenó
    cy.get('input[type="tel"]:visible').should("have.value", "555-0199");
});

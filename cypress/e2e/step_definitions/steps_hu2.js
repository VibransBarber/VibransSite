import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que el cliente navega a la página principal", () => {
    cy.visit("/");
});

// Nota: El paso "debería ver la sección {string}" se reutiliza si estuviera en un common_steps, 
// pero Cypress Cucumber Preprocessor permite la definición global por defecto.
// Lo definimos si no existe o usamos selectores específicos para evitar colisiones.
Then("el servicio {string} debería estar visible", (serviceName) => {
    cy.contains('h4', serviceName).should("be.visible");
});

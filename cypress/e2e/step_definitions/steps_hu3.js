import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que el cliente visita la plataforma", () => {
    cy.visit("/");
});

Then("debería existir un botón de perfil de usuario en la navegación", () => {
    // El icono de usuario está en el header dentro de un div con bordes redondeados
    cy.get('header').find('svg.lucide-user').should("be.visible");
});

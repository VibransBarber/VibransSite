import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { createClient } from '@supabase/supabase-js';

// --- Compartidos ---

When('el usuario abre la página de inicio', () => {
    cy.visit('/');
});

When('hace clic en el ícono de perfil en la esquina superior derecha', () => {
    // Seleccionamos el contenedor del avatar basado en el class o aria-label que le asginaremos
    cy.get('header').find('div[title="Perfil"]').click();
});

Then('se debería abrir un menú desplegable', () => {
    // Verificamos que el dropdown se volvió visible
    cy.get('div[role="menu"]').should('be.visible');
});

And('el menú debe mostrar la opción {string}', (opcionBoton) => {
    // Validamos que el texto exista dentro del menú desplegable
    cy.get('div[role="menu"]').contains(new RegExp(opcionBoton, 'i')).should('be.visible');
});


// --- Scenario 2: Desplegar menú de perfil como usuario autenticado ---

When('hace clic en el ícono de perfil \\(Avatar) en la esquina superior derecha', () => {
    // En este caso el titulo o selector puede ser distinto (Ej: title del usuario logueado en App.jsx)
    cy.get('header').find('div[title="Perfil"]').click();
});

And('el menú debe mostrar el correo del usuario {string}', (correoUsuario) => {
    cy.get('div[role="menu"]').contains(correoUsuario).should('be.visible');
});

// --- Scenario 3: Cerrar Menú al hacer clic fuera (Click Outside) ---

Given('que un usuario despliega el menú contextual del perfil', () => {
    cy.visit('/');
    cy.get('header').find('div[title="Perfil"]').click();
    cy.get('div[role="menu"]').should('be.visible');
});

When('el usuario hace clic en el logo principal de la aplicación', () => {
    cy.get('h2').contains(/Vibrans/i).click();
});

Then('el menú de perfil debe ocultarse automáticamente', () => {
    cy.get('div[role="menu"]').should('not.exist'); // Conditionally rendered component usually vanishes from DOM
});

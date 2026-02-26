import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { createClient } from '@supabase/supabase-js';

// --- Scenario 1: Visualizar datos reales en el Dashboard ---

Given('que el cliente ha iniciado sesión correctamente en el sistema', () => {
    // Para simplificar la prueba de BDD en frontend sin mockear toda la red:
    // Insertamos directamente un token o invocamos programaticamente al frontend de login
    // Asumimos que el usuario test@vibrans.com ya existe en la BD o lo creamos aquí.

    // Por motivos de E2E puro, navegamos a login y entramos
    cy.visit('/login');
    cy.get('input[type="email"]').type('cliente.frecuente@gmail.com');
    cy.get('input[type="password"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    // Verificamos que sí logueó exitosamente
    cy.url().should('include', '/dashboard');
});

When('el cliente ingresa a su página de Perfil Dashboard', () => {
    // La redirección anterior ya lo posicionó en el dashboard, reafirmamos o navegamos
    cy.visit('/dashboard');
    cy.get('h1').contains(/dashboard|perfil/i).should('be.visible');
});

Then('el sistema debería consultar la sesión activa', () => {
    // Verificamos si en la ventana hay la sesión de supabase
    cy.window().then((win) => {
        const hasToken = Object.keys(win.localStorage).some(k => k.includes('-auth-token'));
        cy.wrap(hasToken).should('be.true');
    });
});

Then('reemplazar los datos de prueba mostrando el nombre y correo del usuario verificado', () => {
    // El texto "Carlos Rivera" (harcodeado) ya no debería estar salvo que el test user se llame así
    // Verificamos que en pantalla exista el correo con el que hicimos login
    cy.contains('cliente.frecuente@gmail.com').should('be.visible');

    // Y verificamos la renderización del contenedor del Avatar
    cy.get('.rounded-full').should('exist');
});

Then('debería existir la opción de {string}', (opcionBoton) => {
    cy.contains('button', new RegExp(opcionBoton, 'i')).should('be.visible');
});


// --- Scenario 2: Protección de rutas para usuarios invitados ---

Given('que el usuario no tiene ninguna sesión activa almacenada', () => {
    // Limpiamos la sessión del Storage
    cy.clearLocalStorage();
    cy.visit('/');
});

When('el usuario intenta acceder forzadamente a la página de Perfil Dashboard', () => {
    // Intentando saltarse el home/login para ver información privada
    cy.visit('/dashboard');
});

Then('el sistema debería denegar el acceso devolviéndolo a la vista principal o Login', () => {
    // Assert redirect
    cy.url().should('not.include', '/dashboard');

    // Vibrans maneja su ruta predeterminada al Home o Login
    cy.get('h1').should(($h1) => {
        const text = $h1.text().toLowerCase();
        expect(text).to.match(/iniciar sesión|elevate your grooming/i);
    });
});

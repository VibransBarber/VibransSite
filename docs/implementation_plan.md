# Vibrans Barbershop - Implementation Plan

## Goal Description
Build a premium urban dark mode web application for 'Vibrans Barbershop' using React, Tailwind CSS, and Supabase. The app will feature online check-in, appointment booking, membership management, and technical hair notes for users.

## User Stories (HUs)
- **HU1: Online Check-in (Fila Virtual)**
  - Como cliente, quiero ver el tiempo de espera y anotarme en la fila online con mi número telefónico, para minimizar mi tiempo de espera en la barbería.
- **HU2: Catálogo de Servicios**
  - Como cliente, quiero ver la lista de servicios con precios y duraciones para elegir el adecuado.
- **HU3: Perfil y Notas Técnicas (Vibrans Notes)**
  - Como cliente, quiero acceder a mis detalles técnicos de corte para asegurar la consistencia en el servicio.
- **HU4: Gestión de Barberos**
  - Como cliente, quiero ver y seleccionar a mi barbero preferido.
- **HU5: Membresías**
  - Como cliente, quiero suscribirme a planes de membresía para obtener beneficios exclusivos.
- **HU7: Registro de Usuarios Nuevos**
  - Como cliente nuevo, quiero registrarme en la plataforma usando mi correo o redes sociales para crear una cuenta personal.
  - Criterios de Aceptación:
    1. El usuario debe poder registrarse con correo y contraseña válidos.
    2. El usuario debe poder registrarse usando su cuenta de Google, Facebook o Instagram.
    3. El sistema debe validar que el correo no esté registrado previamente.
    4. Al completar el registro, el usuario debe quedar almacenado exitosamente en la base de datos de Auth.

## Proposed Changes

### [Component: Backend (Supabase)]
- Utilize the existing `users` table linked to Supabase Auth.
- Ensure RLS policies allow authenticated users to perform actions related to their own data.

### [Component: Frontend (React & Stitch)]
- [NEW] Auth Pages: Login and New User Registration (HU7).
- [NEW] Landing Page: Online Check-in flow (HU1).
- [NEW] User Dashboard: Access to Vibrans Notes and Appointments.
- [NEW] Booking System: Service/Barber selection.
- [NEW] Membership Section: Plan comparison.

## Verification Plan

### Automated Tests
- Build Cypress BDD tests for each HU in `cypress/e2e/features/`.
- Run `npm run test:bdd` to verify all scenarios.

### Manual Verification
- Verify responsive design across Desktop and Mobile using Browser Agent.
- Test the full booking flow from registration to appointment confirmation.
- Check Supabase Dashboard for data integrity after seeding.

### Browser Tests
1. Navigate to landing page.
2. Register a new user.
3. Select a service and barber.
4. Confirm booking.
5. Verify appointment appears in dashboard.
6. Check 'Vibrans Notes' technical details.

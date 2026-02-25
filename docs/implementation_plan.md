# Vibrans Barbershop - Implementation Plan

## Goal Description
Build a premium urban dark mode web application for 'Vibrans Barbershop' using React, Tailwind CSS, and Supabase. The app will feature online check-in, appointment booking, membership management, and technical hair notes for users.

## User Stories (HUs)
- **HU1: Registro y Agendamiento (Online Check-in)**
  - Como cliente, quiero registrarme y reservar un turno en tiempo real para minimizar mi tiempo de espera.
- **HU2: Catálogo de Servicios**
  - Como cliente, quiero ver la lista de servicios con precios y duraciones para elegir el adecuado.
- **HU3: Perfil y Notas Técnicas (Vibrans Notes)**
  - Como cliente, quiero acceder a mis detalles técnicos de corte para asegurar la consistencia en el servicio.
- **HU4: Gestión de Barberos**
  - Como cliente, quiero ver y seleccionar a mi barbero preferido.
- **HU5: Membresías**
  - Como cliente, quiero suscribirme a planes de membresía para obtener beneficios exclusivos.

## Proposed Changes

### [Component: Backend (Supabase)]
- [NEW] Create `users` table (linked to Auth).
- [NEW] Create `services` table (id, name, description, price, duration).
- [NEW] Create `appointments` table (id, user_id, service_id, barber_id, scheduled_at, status).
- [NEW] Create `vibrans_notes` table (id, user_id, notes, created_at).
- [NEW] Create `memberships` table (id, name, benefits, price).
- [NEW] Implement RLS policies for all tables.
- [NEW] Create seed script for initial services and barbers.

### [Component: Frontend (React & Stitch)]
- [NEW] Landing Page: Online Check-in flow.
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

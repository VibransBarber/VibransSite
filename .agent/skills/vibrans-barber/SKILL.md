---
name: vibrans-barber
description: Metodología estandarizada para la construcción de Historias de Usuario (HU) con BDD y diseño premium para la barbería Vibrans.
---

# Skill: Desarrollo Vibrans Barber

Esta skill define el proceso obligatorio para desarrollar la plataforma de la barbería Vibrans, asegurando una experiencia de usuario premium, coherencia visual y calidad técnica mediante BDD.

## 1. Fase de Definición (HU y Criterios)
Al iniciar o modificar una HU, se debe actualizar obligatoriamente en `docs/implementation_plan.md`:
- **Formato HU**: "Como [rol], quiero [acción], para [valor]".
- **Criterios de Aceptación**: Lista numerada de condiciones verificables.

## 2. Fase de Diseño y Prototipado
- Usar la herramienta **Stitch** para generar prototipos que reflejen una estética de barbería moderna y profesional.
- **Tokens de Diseño**:
  - **Mood**: Elegante, masculino, clásico-moderno.
  - **Paleta de Colores SUGERIDA**: Negros mates, dorados envejecidos o bronces, cueros oscuros y toques de blanco puro.
  - **Geometría**: Bordes limpios (subtly rounded) para una sensación de precisión.
  - **Tipografía**: Fuentes serif clásicas para títulos y sans-serif modernas para legibilidad en cuerpo de texto.

## 3. Fase de Calidad (BDD de Cypress)
Antes de escribir código, se debe crear la prueba funcional:
- **Ubicación del Feature**: `cypress/e2e/features/[nombre-hu].feature`.
- **Estándar de nomenclatura** (regla obligatoria):
  - Formato: **`huN_nombre_descriptivo.feature`** (snake_case, prefijo `huN` con el número de HU).
  - Siempre en minúsculas, palabras separadas por guión bajo `_`.
  - Tabla de referencia del proyecto (Sujeta a expansión):

    | HU | Archivo | Funcionalidad |
    |----|---------|---------------|
    | HU1 | `hu1_agendamiento_citas.feature` | Registro y reserva de horarios |
    | HU2 | `hu2_catalogo_servicios.feature` | Visualización de cortes, barba y tratamientos |
    | HU3 | `hu3_perfil_usuario.feature` | Gestión de datos y historial de visitas |
    | HU4 | `hu4_gestion_barberos.feature` | Listado y selección de profesionales |
    | HU5 | `hu5_pagos_online.feature` | Integración de pasarelas de pago o señas |
    | HU6 | `hu6_panel_administrador.feature` | Gestión de agenda y stock para el dueño |

- **Formato Gherkin Híbrido**:
  - Keywords (EN): `Feature`, `Scenario`, `Given`, `When`, `Then`, `And`.
  - Contenido (ES): Descripción de la acción y el resultado.
- **Organización de Step Definitions** (regla obligatoria):
  - Cada HU tiene **su propio archivo** en `cypress/e2e/step_definitions/steps_[nombre-hu].js`.
  - Usar alias semánticos para mejorar la legibilidad de los pasos (ej: "hace clic", "hace clic de nuevo").

## 4. Fase de Implementación (Vue 3 / Framework Moderno)
- **Componentes**: Focados en la interactividad (calendarios de reserva, selectores de servicio).
- **Estilos**: Uso de CSS Vanilla o Tailwind con una configuración que respete el lujo y la sobriedad del proyecto.

## 5. Fase de Verificación y Reporte
Es mandatorio ejecutar el ciclo completo antes de mergear:
1. `npm run test:bdd`
2. `npm run report:generate`
3. `npm run report:open`

## 6. Documentación y Sincronización
- **Carpeta `docs/`**: Mantener sincronizados `implementation_plan.md`, `task.md` y `walkthrough.md`.
- **Commits**: Seguir convenciones semánticas (`Feat:`, `Fix:`, `Style:`, etc.).
- **Visuals**: Documentar cambios de UI con capturas de pantalla para asegurar el estándar "Premium".

# ✂️ Vibrans Barbershop

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Framework: React](https://img.shields.io/badge/Framework-React-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Build Tool: Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Styling: Tailwind](https://img.shields.io/badge/Styling-Tailwind-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Database: Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E?style=flat&logo=supabase)](https://supabase.com/)

> **Vibrans Barbershop** es una plataforma web premium diseñada para elevar la experiencia urbana de barbería. Con un enfoque en la elegancia, precisión y eficiencia, permite a los clientes gestionar sus citas y detalles técnicos de corte en un entorno digital sofisticado.

---

## 🌟 Características Principales

- **HU1: Online Check-in** - Reservas en tiempo real para minimizar esperas.
- **HU2: Catálogo de Servicios** - Listado completo de servicios, precios y duraciones.
- **HU3: Vibrans Notes** - Perfil técnico personalizado donde se guardan los detalles específicos de tu corte para asegurar consistencia.
- **HU4: Gestión de Barberos** - Selecciona a tu profesional de preferencia.
- **HU5: Membresías** - Acceso a planes exclusivos y beneficios premium.

---

## 🛠️ Stack Tecnológico

- **Frontend:** React 18 + Vite
- **Estilos:** Tailwind CSS (Diseño "Dark Mode" Premium)
- **Backend/Base de Datos:** Supabase (Auth, RLS, Storage)
- **Iconografía:** Lucide React
- **Pruebas:** Cypress + Cucumber (BDD)

---

## 🚀 Inicio Rápido

### Requisitos Previos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/)

### Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/vibrans-barbershop.git
    cd vibrans-barbershop
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz basado en `.env.example` y añade tus credenciales de Supabase:
    ```env
    VITE_SUPABASE_URL=tu_url_aqui
    VITE_SUPABASE_ANON_KEY=tu_key_aqui
    ```

4.  **Ejecutar en modo desarrollo:**
    ```bash
    npm run dev
    ```

---

## 🧪 Calidad y Pruebas (BDD)

El proyecto sigue una metodología de desarrollo impulsado por comportamiento (BDD).

- **Ejecutar pruebas funcionales:**
  ```bash
  npm run test:bdd
  ```
- **Generar reporte de pruebas:**
  ```bash
  npm run report:generate
  ```

---

## 📁 Estructura del Proyecto

```text
VibransSite/
├── cypress/                # Pruebas BDD (Features & Steps)
├── docs/                   # Documentación técnica y planes
├── src/
│   ├── components/         # Componentes UI reutilizables
│   ├── pages/              # Vistas principales (Home, Dashboard)
│   ├── assets/             # Imágenes y recursos estáticos
│   └── App.jsx             # Punto de entrada de la aplicación
├── supabase/               # Configuraciones y migraciones
└── tailwind.config.js      # Configuración de diseño premium
```

---

## ✒️ Diseño y Estética

Vibrans utiliza una paleta de colores **clásico-moderna**:
- `Background Dark`: `#0A0A0A`
- `Primary (Gold)`: `#D4AF37`
- `Accent`: `#1A1A1A`

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
*Desarrollado con ❤️ para Vibrans Barbershop.*

# Design System: Vibrans Barbershop

## 1. Visual Identity
**Mood**: Premium, Masculine, Urban, Exclusive.
Inspirado en la estética "Abels on Queen", el diseño utiliza contrastes altos entre negros profundos y acentos en oro cepillado.

## 2. Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#ecc813` | Acentos, iconos, botones principales (Brushed Gold) |
| `background-dark` | `#181711` | Fondo principal de la aplicación |
| `surface-dark` | `#27251c` | Fondos de tarjetas y contenedores secundarios |
| `accent-dark` | `#2d2a1c` | Bordes y estados hover |
| `background-light` | `#f8f8f6` | Texto secundario y estados claros (opcional) |

## 3. Typography
- **Headings (Display/Serif)**: `Playfair Display`
  - Utilizada para títulos de secciones y branding. Transmite tradición y elegancia.
- **Body (Sans)**: `Manrope`
  - Utilizada para datos, descripciones y navegación. Transmite modernidad y legibilidad.

## 4. Design Tokens (Tailwind)
```javascript
theme: {
  extend: {
    colors: {
      "primary": "#ecc813",
      "background-dark": "#181711",
      "surface-dark": "#27251c",
      "accent-dark": "#2d2a1c",
    },
    fontFamily: {
      "display": ["Manrope", "sans-serif"],
      "serif": ["Playfair Display", "serif"]
    },
    borderRadius: {
      "xl": "0.75rem",
      "2xl": "1rem",
    },
  },
}
```

## 5. UI Components
- **Sidebar**: Navegación lateral integrada en el Dashboard con iconos de `lucide-react`.
- **Membership Cards**: Tarjetas con gradientes sutiles y bordes realzados para planes Silver, Gold y Platinum.
- **Waitlist Counter**: Contador dinámico con tipografía serif de gran tamaño.
- **Vibrans Notes**: Sección de detalles técnicos con iconos descriptivos.

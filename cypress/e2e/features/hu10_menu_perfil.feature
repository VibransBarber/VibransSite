Feature: HU10 - Menú Contextual de Perfil (Navegación Dinámica)
  Como usuario visitante o autenticado
  Quiero tener un menú desplegable en la navegación principal
  Para acceder rápidamente al login, mi perfil o cerrar sesión dependiendo de mi estado

  Scenario: Desplegar menú de perfil como usuario no autenticado (Invitado)
    Given que el usuario no tiene ninguna sesión activa almacenada
    When el usuario abre la página de inicio
    And hace clic en el ícono de perfil en la esquina superior derecha
    Then se debería abrir un menú desplegable
    And el menú debe mostrar la opción "Iniciar Sesión"
    And el menú debe mostrar la opción "Crear Cuenta"

  Scenario: Desplegar menú de perfil como usuario autenticado
    Given que el cliente ha iniciado sesión correctamente en el sistema
    When el usuario abre la página de inicio
    And hace clic en el ícono de perfil (Avatar) en la esquina superior derecha
    Then se debería abrir un menú desplegable
    And el menú debe mostrar el correo del usuario "cliente.frecuente@gmail.com"
    And el menú debe mostrar la opción "Mi Perfil"
    And el menú debe mostrar la opción "Cerrar Sesión"

  Scenario: Cerrar Menú al hacer clic fuera (Click Outside)
    Given que un usuario despliega el menú contextual del perfil
    When el usuario hace clic en el logo principal de la aplicación
    Then el menú de perfil debe ocultarse automáticamente

Feature: HU9 - Visualizar Perfil de Usuario Real (Dashboard)
  Como cliente autenticado
  Quiero ver mis datos personales obtenidos directamente de la base de datos
  Para asegurar que mi sesión y configuración de cuenta es correcta

  Scenario: Visualizar datos reales en el Dashboard
    Given que el cliente ha iniciado sesión correctamente en el sistema
    When el cliente ingresa a su página de Perfil Dashboard
    Then el sistema debería consultar la sesión activa
    And reemplazar los datos de prueba mostrando el nombre y correo del usuario verificado
    And debería existir la opción de "Cerrar sesión"

  Scenario: Protección de rutas para usuarios invitados
    Given que el usuario no tiene ninguna sesión activa almacenada
    When el usuario intenta acceder forzadamente a la página de Perfil Dashboard
    Then el sistema debería denegar el acceso devolviéndolo a la vista principal o Login

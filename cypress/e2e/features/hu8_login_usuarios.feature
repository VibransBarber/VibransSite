Feature: HU8 - Iniciar Sesión de Usuarios
  Como cliente con cuenta existente
  Quiero hacer login verificando mis credenciales
  Para acceder a administrar mis reservas y datos en el Dashboard

  Scenario: Iniciar sesión exitoso con correo electrónico
    Given que el cliente registrado está en la página de login
    When el cliente ingresa su correo "cliente.frecuente@gmail.com"
    And ingresa su contraseña correcta "Password123!"
    And hace clic en el botón de iniciar sesión
    Then el sistema debería autenticar al usuario y redirigirlo al Dashboard
    And debería existir una sesión activa en la base de datos de Auth

  Scenario Outline: Iniciar sesión exitoso mediante redes sociales
    Given que el cliente registrado está en la página de login
    When el cliente hace clic en el botón de login con "<red_social>"
    And autoriza el acceso a través de "<red_social>"
    Then el sistema debería autenticar al usuario y redirigirlo al Dashboard
    And debería existir una sesión activa asociada a su cuenta social

    Examples:
      | red_social |
      | Google     |
      | Facebook   |
      | Instagram  |

  Scenario: Navegar hacia Pantalla de Registro desde el Login
    Given que un cliente nuevo entra a la página de login
    When el usuario selecciona el enlace "¿No tienes cuenta? Regístrate aquí"
    Then el sistema debe redirigir a la pantalla de Registro de Usuarios Nuevos

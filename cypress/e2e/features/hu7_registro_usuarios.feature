Feature: HU7 - Registro de Usuarios Nuevos
  Como cliente nuevo
  Quiero registrarme en la plataforma usando mi correo o redes sociales
  Para crear una cuenta personal y acceder a mis servicios

  Scenario: Registro exitoso con correo electrónico
    Given que el cliente se encuentra en la página de registro
    When el cliente ingresa un nombre válido "Nuevo Cliente"
    And ingresa un correo "nuevo.cliente@gmail.com"
    And ingresa una contraseña segura "Password123!"
    And hace clic en el botón de registrarse
    Then el sistema debería procesar el registro con éxito
    And el cliente debería aparecer almacenado en la base de datos de usuarios

  Scenario Outline: Registro exitoso usando redes sociales
    Given que el cliente se encuentra en la página de registro
    When el cliente selecciona la opción de continuar con "<red_social>"
    And completa el flujo de autenticación de "<red_social>"
    Then el sistema debería procesar el registro con éxito
    And el cliente debería aparecer almacenado en la base de datos de usuarios con su cuenta vinculada

    Examples:
      | red_social |
      | Google     |
      | Facebook   |
      | Instagram  |

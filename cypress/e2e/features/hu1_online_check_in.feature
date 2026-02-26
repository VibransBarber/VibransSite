Feature: HU1 - Online Check-in
  Como cliente
  Quiero ver el tiempo de espera actual y poder anotarme en la fila online
  Para ahorrar tiempo en la barbería

  Scenario: Ver tiempo de espera y formulario de check-in
    Given que el cliente está en la página principal
    Then debería ver la sección "Tiempo de Espera"
    And debería ver el formulario de "Check-in Online"
    And el botón de "Check-in Ahora" debería estar visible

  Scenario: Interactuar con el formulario de Check-in
    Given que el cliente está en la página principal
    When el cliente ingresa su número "555-0199" en el campo de teléfono
    And hace clic en el botón de check-in
    Then el sistema debería procesar la solicitud

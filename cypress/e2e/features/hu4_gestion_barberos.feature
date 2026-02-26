Feature: HU4 - Gestión de Barberos
  Como cliente
  Quiero ver los perfiles de los barberos disponibles
  Para elegir el que mejor se adapte a mi estilo

  Scenario: Ver perfiles de barberos en la página principal
    Given que el usuario entra a la barbería online
    Then debería ver la sección "Conoce a los Maestros del Oficio"
    And el barbero "Marcus 'The Blade'" debería estar listado
    And el barbero "Julian V." debería estar listado
    And el barbero "Silas Stone" debería estar listado

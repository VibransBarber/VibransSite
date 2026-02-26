Feature: HU2 - Catálogo de Servicios
  Como cliente
  Quiero ver el catálogo de servicios ofrecidos
  Para decidir qué corte o tratamiento quiero

  Scenario: Visualizar la lista de servicios principales
    Given que el cliente navega a la página principal
    Then debería ver la sección "Our Specialties"
    And el servicio "Signature Cut" debería estar visible
    And el servicio "Beard Grooming" debería estar visible
    And el servicio "The Royal Shave" debería estar visible

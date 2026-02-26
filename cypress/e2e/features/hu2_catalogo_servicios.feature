Feature: HU2 - Catálogo de Servicios
  Como cliente
  Quiero ver el catálogo de servicios ofrecidos
  Para decidir qué corte o tratamiento quiero

  Scenario: Visualizar la lista de servicios principales
    Given que el cliente navega a la página principal
    Then debería ver la sección "Nuestras Especialidades"
    And el servicio "Corte Exclusivo" debería estar visible
    And el servicio "Arreglo de Barba" debería estar visible
    And el servicio "El Afeitado Real" debería estar visible

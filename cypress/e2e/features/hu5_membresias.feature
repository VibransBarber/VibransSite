Feature: HU5 - Membresías Premium
  Como cliente frecuente
  Quiero ver los planes de membresía disponibles
  Para suscribirme y obtener beneficios exclusivos

  Scenario: Explorar planes de membresía
    Given que el cliente se encuentra en Vribrans Barbershop
    Then debería ver el título de membresías "Planes de Membresía Exclusivos"
    And el plan "Nivel Plata" debería mostrarse con su respectivo precio
    And el plan "Nivel Oro" debería destacar como popular con "$85"
    And el plan "Nivel Platino" debería mostrarse

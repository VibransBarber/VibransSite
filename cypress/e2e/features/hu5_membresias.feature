Feature: HU5 - Membresías Premium
  Como cliente frecuente
  Quiero ver los planes de membresía disponibles
  Para suscribirme y obtener beneficios exclusivos

  Scenario: Explorar planes de membresía
    Given que el cliente se encuentra en Vribrans Barbershop
    Then debería ver el título de membresías "Exclusive Membership Plans"
    And el plan "Silver Tier" debería mostrarse con su respectivo precio
    And el plan "Gold Tier" debería destacar como popular con "$85"
    And el plan "Platinum Tier" debería mostrarse

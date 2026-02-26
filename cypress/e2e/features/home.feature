Feature: Home Page
  As a customer
  I want to see the home page of Vibrans Barbershop
  So that I can explore the available services

  Scenario: Visitar la página principal
    Given que abro la página de Vibrans
    Then debería ver el título "Vibrans Barbershop"
    And debería ver el slogan "Precision, Style"
    And debería ver el botón para reservar cita

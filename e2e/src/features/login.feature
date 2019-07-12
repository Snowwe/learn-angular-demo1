Feature: Display the login form

  Scenario: Open login form
    Given I am on the home page
    When I click 'login-btn' button
    Then I should see login form title 'LOGIN'

Feature: Display the login form

  Scenario: Open login form
    Given I am on the home page
    When I click 'login-btn' button
    Then I should see login form title 'LOGIN'
#    Then I should see in login form input 'Email'
#    When I enter in input 'Email' '2@2'
#    Then I should see in login form input 'Password'
#    When I enter in input 'Password' '1234qwerty'
#    When I click 'login-btn' button

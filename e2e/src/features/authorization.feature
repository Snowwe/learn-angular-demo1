Feature: Display the login form

  Scenario: Open login form
    Given I am on the home page
    When I click 'login-btn' button
    Then I should see login form title 'LOGIN'
    Then I should see in login form input 'email' with ''
    When I enter in input 'email' '2@2'
    Then I should see in login form input 'email' with '2@2'
    Then I should see in login form input 'password' with ''
    When I enter in input 'password' '1234qwerty'
    When I click 'login-auth-btn' button
    Then I get info from LocalStorage by key 'authData' 'userName: 2@2'

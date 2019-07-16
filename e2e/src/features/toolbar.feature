Feature: Display the title

  Background: On home Page
    Given I am on the home page

  Scenario: Toolbar
    When I do nothing
    Then I should see the button 'menu-btn' title 'menu'
    Then I should see the button 'phone-btn' title 'phone_forwarded'
    Then I should see 6 buttons

  Scenario: Click menu
    When I click 'menu-btn' button
    Then I should see 3 buttons in menuList

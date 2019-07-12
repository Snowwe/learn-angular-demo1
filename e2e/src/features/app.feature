Feature: Go to the home
  Display the title

  Scenario: Toolbar on Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the button 'menu-btn' title 'menu'
    Then I should see the button 'phone-btn' title 'phone_forwarded'
    Then I should see 6 buttons

  Scenario: Click menu
    Given I am on the home page
    When I do nothing
    When I click 'menu-btn' button
    Then I should see 3 buttons in menuList

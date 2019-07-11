Feature: Go to the home
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the button title
    Then I should see 6 buttons
    When I click menu button
    Then I see links
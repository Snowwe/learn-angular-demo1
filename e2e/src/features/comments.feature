Feature: Comments component

    Background: On home Page
        Given I am on the home page

    Scenario: add comment
        When l should see comment list
        When I enter in input with id 'comment-input' text 'Hello, Vasia!'
        When I click 'add-comment-btn' button
        # When l should see comment list
        Then I should see comment list + 1
Feature: Editing a dog with correct data

Background: Page is open
  Given I am on the dog shop page
  And Initial number of dogs in the table is known

@regression
Scenario: Deletion a dog
  When I click "Delete" button of 2. dog in the table
  Then The dog table contains 1 less elements
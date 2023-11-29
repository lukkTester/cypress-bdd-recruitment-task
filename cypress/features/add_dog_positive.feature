Feature: Adding a dog with correct data

Background: Page is open
  Given I am on the dog shop page

@smoke
Scenario: Adding a dog
  Given Initial number of dogs in the table is known
  When I fill out the form with breed "Wolf" nick "Lone" price "3000" and "wolf" image
  And I click the "Add" button
  Then The dog table contains "Wolf", "Lone", "3000", and "wolf" image at the last position
  And The dog table contains 1 more elements
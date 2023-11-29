Feature: Editing a dog with correct data

Background: Page is open
  Given I am on the dog shop page

@regression
Scenario: Editing a dog
  When I click "Edit" button of 3. dog in the table
  And I fill out the form with breed "Husky" nick "Buddy" price "999" and "wolf" image
  And I click the "Update" button
  Then The dog table contains "Husky", "Buddy", "999", and "wolf" image at the 3. position

@regression
Scenario: Cancel editing a dog
  When I click "Edit" button of 3. dog in the table
  And I fill out the form with breed "Husky" nick "Buddy" price "999" and "wolf" image
  And I click the "Cancel" button
  Then The dog table NOT contains "Husky", "Buddy", "999", and "wolf" image at the 3. position
  And The dog form is empty
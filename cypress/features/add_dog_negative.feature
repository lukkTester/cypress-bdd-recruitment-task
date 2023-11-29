Feature: Adding a dog with incorrect data

Background: Dog Shop is open
  Given I am on the dog shop page
  And Initial number of dogs in the table is known

@regression
Scenario Outline: Scenario Outline name: Adding a dog with incorrect data
  When I fill out the form with breed "<breed>" nick "<nick>" price "<price>" and "<image>" image
  And I click the "Add" button
  Then Error message about incorrect data is shown
  And Dog is not added to the table
Examples:
  | breed   | nick   | price   | image      |
  | ?!@#$   | LESSIE | 200     | wolf       | 
  | BEEGLE  | ?!@#$  | 200     | wolf       | 
  | BEEGLE  | LESSIE | -200    | wolf       | 
  | BEEGLE  | LESSIE | 200     | incorrect  | 

@regression
Scenario: Adding an already existing dog
  When I fill out the form with breed "Akita" nick "As" price "100" and "akita" image
  And I click the "Add" button
  Then Error message about already existing dog is shown
  And Dog is not added to the table

@regression
Scenario: Adding a dog with empty data
  When I click the "Add" button
  Then Dog is not added to the table
# Dog Shop Test Framework

This project is a test framework for a dog shop application. It uses Cypress with Cucumber to run end-to-end tests.

## Test Patterns

The App Actions pattern is followed for writing tests. This involves creating custom functions that interact with the application in a way a user would, such as filling out forms or clicking buttons. These custom functions are then used in the step definitions, making the test code cleaner and more maintainable.

Test scenarios are written according to BDD approach and those are placed in the `feature` folder. Tests are divided into positive and negative scenarios.

## Tags

Two tags are used to categorize the tests:

- `@smoke`: This tag is used for smoke tests, which are a subset of tests that cover the main functionalities of the application.
- `@regression`: This tag is used for regression tests, which are comprehensive tests that cover all aspects of the application.


## How to Run Tests

1. Install dependencies:

`npm install`

2. Run application under tests:

`npm start`

3. Open Cypress Test Runner:

`npx cypress open`

4. Run tests:

Select the test you want to run from the Cypress Test Runner, or run all tests using the following command:

`npx cypress run`


## Running through docker

1. Install docker

2. On project folder run command:

`docker-compose build`

3. On project folder run command:

`docker-compose up`

The application should be available on localhost:3000 and Cypress tests should run in docker container.

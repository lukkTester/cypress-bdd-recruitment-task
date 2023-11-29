import {clickEditButton, clickDeleteButton} from "../actions/tableActions"
import {verifyNumberOfDogsInTableIsIncreasedBy,
    verifyNumberOfDogsInTableIsDecreasedBy,
    verifyNumberOfDogsInTableIsEqualToInitial,
    verifyDogWithIndexIsNotExpectedTo,
    verifyDogInTable} from "../assertions/tableAssertions"

When('I click {string} button of {int}. dog in the table', (button, position) => {
    switch(button) {
        case "Edit": clickEditButton(position - 1); break;
        case "Delete": clickDeleteButton(position - 1); break;
        default : console.log("Not supported button")
    }
});

Then('The dog table contains {int} more elements', (number) => {
    verifyNumberOfDogsInTableIsIncreasedBy(number)
});

Then('The dog table contains {int} less elements', (number) => {
    verifyNumberOfDogsInTableIsDecreasedBy(number)
});

Then('Dog is not added to the table', () => {
    verifyNumberOfDogsInTableIsEqualToInitial()
});

Then('The dog table contains {string}, {string}, {string}, and {string} image at the last position', (breed, nick, price, image) => {
    verifyDogInTable(breed, nick, price, image, 'last');
});

Then('The dog table contains {string}, {string}, {string}, and {string} image at the {int}. position', (breed, nick, price, image, position) => {
    verifyDogInTable(breed, nick, price, image, position - 1);
});

Then('The dog table NOT contains {string}, {string}, {string}, and {string} image at the {int}. position', (breed, nick, price, image, position) => {
    verifyDogWithIndexIsNotExpectedTo(position - 1, breed, nick, price, image);
});


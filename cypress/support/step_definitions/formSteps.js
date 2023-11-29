import {fillOutForm, clickAddButton, clickUpdateButton, clickCancelButton} from "../actions/formActions"
import {verifyDuplicationErrorMessageIsPresented, 
     verifyInvalidEntryErrorMessageIsPresented,
     verifyFormIsEmpty} from "../assertions/formAssertions"

When('I fill out the form with breed {string} nick {string} price {string} and {string} image', (breed, nick, price, image) => {
    fillOutForm(breed, nick, price, image);
});
  
And('I click the {string} button', (buttonText) => {
    switch(buttonText) {
        case "Add": clickAddButton(); break;
        case "Update": clickUpdateButton(); break;
        case "Cancel": clickCancelButton(); break;
        default : console.log("Not supported button")
    }
 });

Then('Error message about already existing dog is shown', () => {
    verifyDuplicationErrorMessageIsPresented();
});

Then('Error message about incorrect data is shown', () => {
    verifyInvalidEntryErrorMessageIsPresented();
});

And('The dog form is empty', () => {
    verifyFormIsEmpty();
});
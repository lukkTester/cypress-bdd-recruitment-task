import {openDogShop} from "../actions/navigation"
import {saveInitialDogsNo} from "../actions/helpers"

Given('I am on the dog shop page', () => {
    openDogShop();
});

Given('Initial number of dogs in the table is known', () => {
    saveInitialDogsNo();
});

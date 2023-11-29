import elements from "../locators/form"

const { WOLF_IMAGE_URL, AKITA_IMAGE_URL, DEFAULT_IMAGE_URL } = require('../../constants/urls.js');

export function fillOutForm(breed, nick, price, image) {
    enterBreed(breed);
    enterNick(nick);
    enterPrice(price);
    enterImage(image);
};

export function enterBreed(breed) {
    cy.get(elements.breedInpt).clear().type(breed, { force: true });
};

export function enterNick(nick) {
    cy.get(elements.nickInpt).clear().type(nick, { force: true });
};

export function enterPrice(price) {
    cy.get(elements.priceInpt).clear().type(price, { force: true });
};

export function enterImage(image) {

    let url;

    switch (image) {
        case 'wolf': url = WOLF_IMAGE_URL; break;
        case 'akita': url = AKITA_IMAGE_URL; break;
        case 'incorrect': url = "incorrect.jpg"; break;
        case 'empty': url = '';  break;
        default : url = DEFAULT_IMAGE_URL
    }

    cy.get(elements.urlInpt).clear().type(url, { force: true });
};

export function clickAddButton() {
    cy.get(elements.form).contains(elements.addBtnText).click();
};

export function clickUpdateButton() {
    cy.get(elements.form).contains(elements.updateBtnText).click();
};

export function clickCancelButton() {
    cy.get(elements.form).contains(elements.cancelBtnText).click();
};
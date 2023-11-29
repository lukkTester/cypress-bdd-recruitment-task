import table from "../locators/dogTable";

const { WOLF_IMAGE_URL, AKITA_IMAGE_URL, DEFAULT_IMAGE_URL } = require('../../constants/urls.js');

export function verifyDogInTable(breed, nick, price, image, index) {

    let url;

    switch (image) {
        case 'wolf': url = WOLF_IMAGE_URL; break;
        case 'akita': url = AKITA_IMAGE_URL; break;
        case 'incorrect': url = "incorrect.jpg"; break;
        case 'empty': url = '';  break;
        default : url = DEFAULT_IMAGE_URL
    }

    if (index === 'last') {
        verifyLastDogInTheTableIsAsExpected(breed, nick, price, url);
    } else {
        verifyDogWithIndexIsAsExpected(index, breed, nick, price, url);
    }
}

function verifyLastDogInTheTableIsAsExpected(breed, nick, price, image) {
    cy.get(table.dogsRows).last().then(row => verifyDogDetails(cy.wrap(row), breed, nick, price, image));
}

function verifyDogWithIndexIsAsExpected(index, breed, nick, price, image) {
    cy.get(table.dogsRows).eq(index).then(row => verifyDogDetails(cy.wrap(row), breed, nick, price, image));
}

const verifyDogDetails = (row, breed, nick, price, image) => {
    row.find('td:nth-child(1)').should('have.text', breed);
    row.parent().find('td:nth-child(2)').should('have.text', nick);
    row.parent().find('td:nth-child(3)').should('have.text', price);
    row.parent().find('td:nth-child(4) img').should('have.attr', 'src', image);
};

export function verifyNumberOfDogsInTableIsIncreasedBy(expectedMoreDogs) {
    cy.get('@initialCount').then((initialCount) => {
        const expectedCount = initialCount + expectedMoreDogs;
        cy.get(table.dogsRows).should('have.length', expectedCount)
    });
};

export function verifyNumberOfDogsInTableIsDecreasedBy(expectedLessDogs) {
    cy.get('@initialCount').then((initialCount) => {
        const expectedCount = initialCount - expectedLessDogs;
        cy.get(table.dogsRows).should('have.length', expectedCount)
    });
};

export function verifyNumberOfDogsInTableIsEqualToInitial() {
    cy.get('@initialCount').then((initialCount) => {
        cy.get(table.dogsRows).should('have.length', initialCount)
    });
}

export function verifyDogWithIndexIsNotExpectedTo(index, breed, nick, price, image) {
    cy.get(table.dogsRows).eq(index).find('td:nth-child(1)').should('not.have.text', breed);
    cy.get(table.dogsRows).eq(index).find('td:nth-child(2)').should('not.have.text', nick);
    cy.get(table.dogsRows).eq(index).find('td:nth-child(3)').should('not.have.text', price);
    cy.get(table.dogsRows).eq(index).find('td:nth-child(4) img').should('not.have.attr', 'src', image);
};
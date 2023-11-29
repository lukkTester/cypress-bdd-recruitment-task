import formElements from "../locators/form"

const { ERROR_DUPLICATION, ERORR_INVALID } = require('../../constants/messages.js');

export function verifyFormIsEmpty() {
    cy.get(formElements.breedInpt).should('have.value', '');
    cy.get(formElements.nickInpt).should('have.value', '');
    cy.get(formElements.priceInpt).should('have.value', '');
    cy.get(formElements.urlInpt).should('have.value', '');
}

export function verifyInvalidEntryErrorMessageIsPresented() {
    cy.get(formElements.errorMsgPlaceholder).should('have.text', ERORR_INVALID);
}

export function verifyDuplicationErrorMessageIsPresented() {
    cy.get(formElements.errorMsgPlaceholder).should('have.text', ERROR_DUPLICATION);
}
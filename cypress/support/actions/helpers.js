import elements from "../locators/dogTable"

export function countDogsInTable() {
    return cy.get(elements.dogsRows.length);
}

export function saveInitialDogsNo() {
    cy.get(elements.dogsRows)
        .then(rows => {
             cy.wrap(rows.length).as('initialCount');
    });
}
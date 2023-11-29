import table from "../locators/dogTable"

export function clickEditButton(rowIndex) {
    cy.get(table.dogsRows).eq(rowIndex).contains(table.editBtnText).click();
};

export function clickDeleteButton(rowIndex) {
    cy.get(table.dogsRows).eq(rowIndex).contains(table.deleteBtnText).click();
};
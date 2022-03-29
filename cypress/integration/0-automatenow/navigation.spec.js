/// <reference types="cypress" />

describe('browser nav', () => {

    it('navigates to Form Fields page', () => {
        cy.contains('Form Fields').click({force: true})
        cy.title().should('contain', 'Form Fields')
    })

    it('verifies text in Tables page', () =>{
        cy.contains('Tables').click({force: true})
        cy.get('#simple-table-item-prices').should('contain.text', 'Item prices')
    })

    it('navigates to Calendars page', () => {
        cy.contains('Calendars').click({force: true})
        cy.title().should('contain', 'Calendars')
    })
})
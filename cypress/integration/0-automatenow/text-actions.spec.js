/// <reference types="cypress" />

describe('text actions', () => {
    it('enters text', () =>{
        const text = 'my text'

        cy.visit('/')
        cy.contains('Form Fields').click({force: true})
        cy.get('#g1103-inputfield').type(`${text}{enter}`, {force: true})
        // cy.get('#g1103-inputfield').should('have.value', `${text}`)
    })
})
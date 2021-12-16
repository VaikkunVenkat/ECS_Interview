// App.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

import { cyan } from "@material-ui/core/colors"


// https://on.cypress.io/writing-first-test
describe('main e2e tests on table', () => {
  it('visit main site', () => {
    cy.visit('http://localhost:3000')
    cy.contains('table')
  })
  it('Add row', () => {
    cy.get('.MTableToolbar-actions-8 > :nth-child(1) > div > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    cy.get('.MuiTable-root .MuiTableRow-root:nth-child(5)').within(() => {
      cy.get('.MuiFormControl-root:first').type('Bugatti')
      cy.get('.MuiFormControl-root:nth(1)').type('Veyron')
      cy.get('.MuiFormControl-root:nth(2)').type('Red')
      cy.get('.MuiFormControl-root:nth(3)').type('1000{enter}')
    })
    cy.get('table').contains('td', 'Bugatti').should('be.visible')
    cy.get('table').contains('td', 'Veyron').should('be.visible')
    cy.get('table').contains('td', 'Red').should('be.visible')
    cy.get('table').contains('td', '1000').should('be.visible')
  })
  it('Delete Row', () => {
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > [title="Delete Car"]').click()
    cy.get('table').contains('td', 'Porsche').should('not.exist')
    cy.get('table').contains('td', 'Boxter').should('not.exist')
    cy.get('table').contains('td', 'blue').should('not.exist')
    cy.get('table').contains('td', '72000').should('not.exist')
  })
  it('Update Row', () => {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Edit"]').click()
    cy.get('.MuiTable-root .MuiTableRow-root:nth-child(2)').within(() => {
      cy.get('.MuiFormControl-root:first input').clear().type('Mercedes')
      cy.get('.MuiFormControl-root:nth(1) input').clear().type('E-class')
      cy.get('.MuiFormControl-root:nth(2) input ').clear().type('silver')
      cy.get('.MuiFormControl-root:nth(3) input').clear().type('500000{enter}')
    })
    cy.get('table').contains('td', 'Toyota').should('not.exist')
    cy.get('table').contains('td', 'Celica').should('not.exist')
    cy.get('table').contains('td', 'red').should('not.exist')
    cy.get('table').contains('td', '35000').should('not.exist')

    cy.get('table').contains('td', 'Mercedes').should('be.visible')
    cy.get('table').contains('td', 'E-class').should('be.visible')
    cy.get('table').contains('td', 'silver').should('be.visible')
    cy.get('table').contains('td', '500000').should('be.visible')
  })
})
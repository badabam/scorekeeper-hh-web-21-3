Cypress.Commands.add('createGame', () => {
  cy.visit('http://localhost:3000')
  cy.findByLabelText(/name.*game/i).type('Carcassonne')
  cy.findByLabelText(/player.*name/i).type('Jane, John{Enter}')
})

describe('App', () => {
  it('creates a game with a title and 2 users', () => {
    cy.createGame()
    cy.url().should('contain', '/game')
  })

  it('adds and subtracts scores', () => {
    cy.createGame()
    cy.findAllByTestId('player')
      .first()
      .within(() => {
        cy.findByRole('button', { name: '+' }).first().click().click().click()
        cy.get('output').should('have.text', '3')
      })
  })
})

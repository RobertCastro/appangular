describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('[href="/generos"]').click()
    cy.wait(4000)
    
    cy.get('[data-test-id="boton-crear-genero"]').click()
    cy.get('[data-test-id="crear-genero-input-tipo"]').type('GeneroPrueba')
    cy.wait(2000)
    cy.get('[data-test-id="crear-genero-button-crear"]')
    cy.get('[data-test-id="crear-genero-button-crear"]').click()
    cy.contains('GeneroPrueba')

  })
})

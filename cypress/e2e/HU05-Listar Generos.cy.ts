describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('[href="/generos"]').click()
    cy.wait(4000)
    //[data-test-id="elemento-lista-genero"] should have length greater than 2

    //cotiene el listado de los 3 primeros generos  de la app
    cy.contains('a', 'Drama')
    cy.contains('a', 'Crime')
    cy.contains('a', 'Film-Noir')

  })
})

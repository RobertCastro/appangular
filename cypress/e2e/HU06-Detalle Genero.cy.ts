describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('[href="/generos"]').click()
    cy.wait(4000)
    //[data-test-id="elemento-lista-genero"] should have length greater than 2

    //Le damos click al primer elemento del listado de generos
    cy.get('.nav > :nth-child(1) > .nav-link').click()

    cy.wait(4000)
    
    //debe tener al menos una pelicula en el detalle
    cy.get('[data-test-id="detalle-genero-card"]').should('have.length.at.least', 1)

    //the first element of the list should have a non empy title
    cy.get('[data-test-id="detalle-genero-card"]').first().find('[data-test-id="detalle-genero-card-title"]').should('not.be.empty')

    //the first element of the list should have 3 card-text
    cy.get('[data-test-id="detalle-genero-card"]').first().find('[data-test-id="detalle-genero-card-text-pais"]').should('not.be.empty')
    cy.get('[data-test-id="detalle-genero-card"]').first().find('[data-test-id="detalle-genero-card-text-duracion"]').should('not.be.empty')
    cy.get('[data-test-id="detalle-genero-card"]').first().find('[data-test-id="detalle-genero-card-text-popularidad"]').should('not.be.empty')

  })
})

describe('Create director page', () => {
    beforeEach(() => {
      cy.visit('/directores/crear');
    });
  
    it('should display the form to create a new director', () => {
      cy.get('h1').contains('Crear un nuevo director');
      cy.get('#nombre').should('be.visible');
      cy.get('#foto').should('be.visible');
      cy.get('#biografia').should('be.visible');
      cy.get('#fechaNacimiento').should('be.visible');
      cy.get('#nacionalidad').should('be.visible');
    });
  
    it('should allow creating a new director', () => {
      // Llena el formulario con los datos del director
      cy.get('#nombre').type('Nombre del Director');
      cy.get('#foto').type('https://dummyimage.com/128x128.png');
      cy.get('#biografia').type('Datos del director');
      cy.get('#fechaNacimiento').type('1950-01-01');
      cy.get('#nacionalidad').type('Nacionalidad del Director');
    cy.wait(2000);
      // Enviar el formulario
      cy.get('.block form').submit();

    });
  });
  
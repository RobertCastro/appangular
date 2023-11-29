describe('Director flow', () => {
    it('should navigate from the list of directors to the details of the first director', () => {
      cy.visit('/directores');
  
      // Hacer clic en el primer botón "Ver más" del listado
      cy.get('table').find('tr').eq(1).within(() => {
        cy.get('button').contains('Ver más').click();
      });
  
      // Verifica que los detalles del director están presentes
      cy.wait(2000);
      cy.get('h1').should('not.be.empty');
      cy.url().should('include', '/directores/'); // Verificar la URL
  
      // Verifica los detalles del director como la nacionalidad, fecha de nacimiento y biografía
      cy.get('.block').within(() => {
        cy.contains('h3', 'Nacionalidad:').next('p').should('not.be.empty');
        cy.contains('h3', 'Fecha de nacimiento:').next('p').should('not.be.empty');
        cy.contains('h3', 'Biografía:').next('p').should('not.be.empty');
      });
    });
  });
  
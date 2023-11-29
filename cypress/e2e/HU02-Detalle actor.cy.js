describe('Detalle de un actor', () => {
    it('should navigate from the list of directors to the details of the first director', () => {
      cy.visit('/actores');
  
      // Hacer clic en el primer botón "Ver más" del listado
      cy.get('table').find('tr').eq(1).within(() => {
        cy.get('button').contains('Ver Detalle').click();
      });
  
      // Verifica que los detalles del actor están presentes
      cy.wait(2000);
      
      cy.get('h1').should('not.be.empty');

      // Verificar la URL
      cy.url().should('include', '/actores/'); 
  
      // Verifica los detalles del actor como la nacionalidad, fecha de nacimiento y biografía
      cy.contains('h3', 'Nacionalidad:').next('p').should('not.be.empty');
      cy.contains('h3', 'Fecha de nacimiento:').next('p').should('not.be.empty');
      cy.contains('h3', 'Biografía:').next('p').should('not.be.empty');
      
      // Verificacion foto del actor
      cy.get('img').should('exist');
      cy.get('img').first().should('have.attr', 'src');
      cy.get('img').first().should('have.attr', 'alt');

    });
  });
  
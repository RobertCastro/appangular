describe('Listar Actores', () => {
    beforeEach(() => {
      cy.visit('/actores');
    });
  
    it('should contain an h3 with the correct title', () => {
      cy.get('h3').contains('Listado de actores');
    });
  
    it('should display a list of movie directors', () => {
      // Comprueba que existe una tabla y que tiene filas
      cy.get('table').find('tr').its('length').should('be.gte', 1); 
  
      // Comprobar que las filas contienen datos
      cy.get('table').find('tr').each(($el, index) => {
        // Comprobamos de que haya más filas
        if (index > 0) {
          // Comprobar que cada fila tiene datos
          cy.wrap($el).find('td').eq(1).should('not.be.empty');
        }
      });
    });
  
  });
  
describe('Directores de cine page', () => {
    beforeEach(() => {
      cy.visit('/directores');
    });
  
    it('should contain an h1 with the correct title', () => {
      cy.get('h1').contains('Directores de cine');
    });
  
    it('should display a list of movie directors', () => {
      // Comprueba que existe una tabla y que tiene filas
      cy.get('table').find('tr').its('length').should('be.gte', 1); // Debe haber al menos una fila para el encabezado
  
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
  
describe('Crear un actor nuevo', () => {
    beforeEach(() => {
      cy.visit('/crear-actor');
    });
  
    it('should display a form to create a new actor', () => {
      cy.get('h3').contains('Crear un nuevo actor');
      cy.get('#name').should('be.visible');
      cy.get('#photo').should('be.visible');
      cy.get('#biography').should('be.visible');
      cy.get('#birthDate').should('be.visible');
      cy.get('#nationality').should('be.visible');
    });
  
    it('should allow creating a new actor', () => {
      cy.get('#name').type('Un nombre de actor');
      cy.get('#photo').type('https://dummyimage.com/600x400/000/fff&text=foto');
      cy.get('#biography').type('Biografia del actor');
      cy.get('#birthDate').type('1900-10-10');
      cy.get('#nationality').type('Nacionalidad del actor');
      cy.wait(2000);
      
      cy.get('.block form').submit();

    });
  });
  
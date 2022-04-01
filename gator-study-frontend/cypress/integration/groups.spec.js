describe('Groups page', () => {
  
    it('navigates to the page', () => {
    cy.visit('http://localhost:3000/groups')
  })
    it('displays groups', () => {
    cy.get('[data-cy=modinfo]').contains('Moderator')
    })
    it('user has option to enter groups ', () => {
   cy.get('Button').contains('Enter')
    })
    
    it('adds user to group when they click enter ', () => {
        cy.get('Button').contains('Enter').click()
    })
    
})
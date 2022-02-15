describe('Login page', () => {
  
  it('Logs in user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="login"]').click({force: true})
    cy.url().should('include', '/login')
    const username = "dummy@gmail.com"
    const password ="dummy"
    cy.get('[data-cy=email]').type(username)
    cy.get('[data-cy=password]').type(`${password}{enter}`)
    
  })
  it('displays logout button',() => {
    cy.get('[data-cy=logoutbtn]').contains('Logout')
  })
  it('shows chat component',() => {
    cy.get('div').contains('Chat')
    
  })
})
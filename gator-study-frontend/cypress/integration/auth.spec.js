describe('User authentication', () => {
  
  it('Successfully registers new user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="register"]').click({force: true})
    cy.url().should('include', '/register')
      
    const name= "testing"  
    const username = "testing@gmail.com"
    const password = "testing"
    cy.get('[data-cy=name]').type(name)
    cy.get('[data-cy=email]').type(username)
    cy.get('[data-cy=password]').type(`${password}{enter}`)
      
    
  })
    it('Redirects user to login page afterwards', () => {
    cy.url().should('include', '/login')
      
    
    })
    it('Logs the user in correctly', () => {
    const username = "testing@gmail.com"
    const password ="testing"
    cy.get('[data-cy=email]').type(username)
    cy.get('[data-cy=password]').type(`${password}{enter}`)
    
  })
})
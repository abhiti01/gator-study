describe('Navigation', () => {
  
  it('should navigate to the home page', () => {
    cy.visit('http://localhost:3000/')
  })
  it('should navigate to gator-study-backend page',() => {
    cy.get('a[href*="gator-study-backend"]').click({force: true})
    cy.url().should('include', '/gator-study-backend')
  })
  it('should navigate to signup page',() => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="register"]').click({force: true})
    cy.url().should('include', '/register')
    
  })
  it('should navigate to timer',() => {
    cy.visit('http://localhost:3000/time')
    cy.get('Button').contains('Pomodoro')
    cy.url().should('include', '/time')
  })
})
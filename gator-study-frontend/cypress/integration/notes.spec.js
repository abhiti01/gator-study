describe('Notes component', () => {
  
    it('renders notes card on login', () => {
        cy.visit('http://localhost:3000/login')
        // cy.get('a[href*="login"]').click({ force: true })
        const username = "dummy@gmail.com"
    const password ="dummy"
    cy.get('[data-cy=email]').type(username)
    cy.get('[data-cy=password]').type(`${password}{enter}`)
        
  })
    it('displays feild for typing notes', () => {
        cy.wait(1000)
    cy.get('[data-cy=notesbox]')
    })
    it('user can type notes ', () => {
        cy.get('[data-cy=clear-note-btn]').click()
    const note = "This is a sample note"
        cy.get('[data-cy=notes-input]').type(note)
        
    })
    
    it('saves note for later ', () => {
        cy.get('[data-cy=save-note-btn]').click()

    })

    it('clears note ', () => {
        cy.get('[data-cy=clear-note-btn]').click()
        
    })
    
})
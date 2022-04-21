describe('Playlist Component', () => {
  
    it('Shows suggested playlists', () => {
    cy.get('[data-cy=music-header]').contains('Suggested beats')
  })
    
})
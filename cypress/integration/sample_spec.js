describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to sdlfsdlkfjl').click();
  })
})

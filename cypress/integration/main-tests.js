describe('home page tests', () => {
  beforeEach(() => {
    cy.intercept('https://wordsapiv1.p.rapidapi.com/words/movie/hasTypes', {
      statusCode: 200,
      fixture: 'movie'
    }).as('movie')
    cy.intercept('https://wordsapiv1.p.rapidapi.com/words/photo/hasTypes', {
      statusCode: 200,
      fixture: 'photo'
    }).as('photo')
    cy.intercept('https://wordsapiv1.p.rapidapi.com/words/color/hasTypes', {
      statusCode: 200,
      fixture: 'color'
    }).as('color')
    cy.intercept('https://wordsapiv1.p.rapidapi.com/words/animal/hasTypes', {
      statusCode: 200,
      fixture: 'animal'
    }).as('animal')
  })
  it('should display a welcome message', () => {
    cy.visit('http://localhost:3000/').get('.main-title').contains('Idea Ideabox Box')
  })

  it('should have buttons that complete various tasks', () => {
    cy.get('#lockTheme').contains('Lock Theme')
    cy.get('#lockType').contains('Lock Ideabox Type')
    cy.get('#clickRandomize').contains('Randomize')
    cy.get('#clickSave').contains('Save Ideabox')
  })

  it('should be able to lock a theme', () => {
    cy.get('#lockTheme').click().contains('Unlock Theme').click()
  })

  it('should be able to lock an Ideabox Type', () => {
    cy.get('#lockType').click().contains('Unlock Ideabox Type').click()
  })

  it('should be able to randomize the given ideabox', () => {
    cy.get('#clickRandomize').click()
  })

  it('should be able to save an Ideabox', () => {
    cy.get('#clickSave').click()
  })

  it('should be able to open the sidebar', () => {
    cy.get('.nav-icon').click()
  })
})

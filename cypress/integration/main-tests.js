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
    cy.visit('http://localhost:3000/')
  })
})

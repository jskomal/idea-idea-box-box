describe('Create view tests', () => {
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

  it('should be able to create an idea and save it', () => {
    cy.visit('http://localhost:3000/create')
      .get('[data-theme-input]')
      .type('Corgi')
      .get('[data-type-input]')
      .type('Calendar')
      .get('[data-save-ideabox]')
      .click()
  })
})

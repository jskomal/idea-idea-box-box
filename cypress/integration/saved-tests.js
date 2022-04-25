describe('savedView Tests', () => {
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

  it('should navigate to the saved view after saving a few ideaboxes', () => {
    cy.visit('http://localhost:3000/')
      .get('#clickSave')
      .click()
      .get('.nav-icon')
      .click()
      .get('#buttonSaved')
      .click()
      .get('.nav-icon')
      .click()
  })

  it('should be able to mark an idea as completed', () => {
    cy.get('article button[data-complete]').click()
  })

  it('should should be able to delete an idea', () => {
    cy.get('article button[data-delete').click()
  })
})

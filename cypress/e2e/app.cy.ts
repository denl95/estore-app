describe('Home', () => {
  beforeEach(() => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
  })
  it('should navigate to the home page', () => {
    cy.get('[data-testid="product-grid"]').should('have.length', 1)

    cy.get('[data-testid="sort-buttons"]').children().should('have.length', 6)

    cy.get('[data-testid="filter-checkbox"]')
      .children()
      .should('have.length', 20)
  })
  it('filters and sorts products', () => {
    // Filter by category
    cy.get('[data-testid="filter-checkbox"]')
      .get('#smartphones')
      .check('smartphones')

    // Verify that the filtered results are displayed
    cy.get('[data-testid="product-grid"]').children().should('have.length', 5)

    // Sort by price descending
    cy.get('[data-testid="sort-buttons"]')
      .contains('Price: High to Low')
      .click()

    // Verify that the sorted results are displayed
    cy.get('[data-testid="product-grid"]')
      .children()
      .first()
      .contains('$1,249.00')

    // Sort by price ascending
    cy.get('[data-testid="sort-buttons"]')
      .contains('Price: Low to High')
      .click()

    // Verify that the sorted results are displayed
    cy.get('[data-testid="product-grid"]')
      .children()
      .first()
      .contains('$280.00')
  })
})

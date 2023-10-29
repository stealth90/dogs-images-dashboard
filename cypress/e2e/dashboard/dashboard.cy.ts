/// <reference types="cypress" />

describe('Dashboard app', () => {
  const DOG_API_BASE_URL = 'https://dog.ceo/api';
  const NUMBER_OF_IMAGES = 10;
  beforeEach(() => {
    cy.viewport('macbook-13');
    cy.visit('http://localhost:3000');
    cy.intercept({ url: `${DOG_API_BASE_URL}/breeds/list/all` }).as('getBreeds');
  });

  it('should displays four board', () => {
    cy.getByTestId('imagesListByBread').should('exist');
    cy.getByTestId('randomBreedDogImage').should('exist');
    cy.getByTestId('imagesListByBreadAndSubBreed').should('exist');
    cy.getByTestId('randomImageByBreedAndSubBreed').should('exist');
  });

  describe('Images list by breed board', () => {
    it('should display placeholder', () => {
      cy.getByTestId('imagesListByBread').should('exist');
      cy.getByTestId('imagesListByBread-placeholder').should('exist');
    });
    it('should display images list when breed is selected ', () => {
      cy.wait('@getBreeds');
      cy.getByTestId('imagesListByBread').should('exist').and('be.visible');
      cy.getByTestId('imagesListByBread-button').should('exist').and('have.attr', 'disabled');
      cy.getByTestId('imagesListByBread-placeholder').should('exist').and('be.visible');
      cy.getByTestId('imagesListByBread-breedSelect').should('exist').and('be.visible');
      cy.getByTestId('imagesListByBread-breedSelect-dropdown').should('exist').and('be.visible');
      cy.getByTestId('imagesListByBread-breedSelect-dropdown')
        .click()
        .then(() => {
          cy.getByTestId('imagesListByBread-breedSelect-dropdown-list')
            .should('be.visible')
            .and('have.class', 'is-open');

          cy.getByTestId('imagesListByBread-breedSelect-item-0')
            .invoke('text')
            .then((el) => {
              const breedSelected = el.toLowerCase();
              cy.intercept({
                url: `${DOG_API_BASE_URL}/breed/${breedSelected}/images/random/${NUMBER_OF_IMAGES}`,
              }).as('getImages');
              cy.getByTestId('imagesListByBread-breedSelect-item-0')
                .click()
                .then(() => {
                  cy.getByTestId('imagesListByBread-breedSelect-dropdown-list')
                    .should('not.be.visible')
                    .and('not.have.class', 'is-visible');
                  cy.getByTestId('imagesListByBread-button').should('not.have.attr', 'disabled');
                  cy.getByTestId('imagesListByBread-button').click();
                  cy.wait('@getImages').then((xhr) => {
                    expect(xhr.state).to.eq('Complete');
                    const imagesUrl = xhr.response?.body.message;
                    expect(xhr.response?.body.message.length).to.eq(NUMBER_OF_IMAGES);
                    cy.getByTestId('imagesListByBread-carousel').should('exist').and('be.visible');
                    cy.getByTestId('imagesListByBread-carousel-image-0')
                      .should('exist')
                      .and('be.visible')
                      .and('have.attr', 'src', imagesUrl[0]);
                    cy.getByTestId('imagesListByBread-carousel-slide-1')
                      .should('exist')
                      .and('have.attr', 'style')
                      .and('contain', 'transform: translateX(100%');
                    cy.getByTestId('imagesListByBread-carousel-nextButton')
                      .should('exist')
                      .and('be.visible')
                      .click();
                    cy.getByTestId('imagesListByBread-carousel-slide-0')
                      .should('have.attr', 'style')
                      .and('contain', 'transform: translateX(-100%');
                    cy.getByTestId('imagesListByBread-carousel-slide-1')
                      .should('have.attr', 'style')
                      .and('contain', 'transform: translateX(0%)');
                    cy.getByTestId('imagesListByBread-carousel-image-1')
                      .should('exist')
                      .and('be.visible')
                      .and('have.attr', 'src', imagesUrl[1]);
                  });
                });
            });
        });
    });
  });

  describe('Images list by breed and sub breed board', () => {
    it('should display placeholder', () => {
      cy.getByTestId('imagesListByBreadAndSubBreed').should('exist');
      cy.getByTestId('imagesListByBreadAndSubBreed-placeholder').should('exist');
    });
    it('should display images list when breed and sub breed is selected ', () => {
      cy.wait('@getBreeds');
      cy.getByTestId('imagesListByBreadAndSubBreed').should('exist').and('be.visible');
      cy.getByTestId('imagesListByBreadAndSubBreed-button')
        .should('exist')
        .and('have.attr', 'disabled');
      cy.getByTestId('imagesListByBreadAndSubBreed-placeholder').should('exist').and('be.visible');
      cy.getByTestId('imagesListByBreadAndSubBreed-breedSelect').should('exist').and('be.visible');
      cy.getByTestId('imagesListByBreadAndSubBreed-breedSelect-dropdown')
        .should('exist')
        .and('be.visible');
      cy.getByTestId('imagesListByBreadAndSubBreed-subBreedSelect')
        .should('exist')
        .and('be.visible')
        .and('have.class', 'disabled');
      cy.getByTestId('imagesListByBreadAndSubBreed-subBreedSelect-dropdown')
        .should('exist')
        .and('be.visible');
      cy.getByTestId('imagesListByBreadAndSubBreed-breedSelect-dropdown')
        .click()
        .then(() => {
          cy.getByTestId('imagesListByBreadAndSubBreed-breedSelect-dropdown-list')
            .should('be.visible')
            .and('have.class', 'is-open');

          cy.getByTestId('imagesListByBreadAndSubBreed-breedSelect-item-0')
            .invoke('text')
            .then((el) => {
              const breedSelected = el.toLowerCase();

              cy.getByTestId('imagesListByBreadAndSubBreed-breedSelect-item-0')
                .click()
                .then(() => {
                  cy.getByTestId('imagesListByBreadAndSubBreed-breedSelect-dropdown-list')
                    .should('not.be.visible')
                    .and('not.have.class', 'is-visible');

                  cy.getByTestId('imagesListByBreadAndSubBreed-subBreedSelect-dropdown')
                    .click()
                    .then(() => {
                      cy.getByTestId('imagesListByBreadAndSubBreed-subBreedSelect-dropdown-list')
                        .should('be.visible')
                        .and('have.class', 'is-open');

                      cy.getByTestId('imagesListByBreadAndSubBreed-subBreedSelect-item-0')
                        .invoke('text')
                        .then((el) => {
                          const subBreedSelected = el.toLowerCase();
                          cy.intercept({
                            url: `${DOG_API_BASE_URL}/breed/${breedSelected}/${subBreedSelected}/images/random/${NUMBER_OF_IMAGES}`,
                          }).as('getImages');
                          cy.getByTestId('imagesListByBreadAndSubBreed-subBreedSelect-item-0')
                            .click()
                            .then(() => {
                              cy.getByTestId(
                                'imagesListByBreadAndSubBreed-subBreedSelect-dropdown-list'
                              )
                                .should('not.be.visible')
                                .and('not.have.class', 'is-visible');

                              cy.getByTestId('imagesListByBreadAndSubBreed-button').should(
                                'not.have.attr',
                                'disabled'
                              );
                              cy.getByTestId('imagesListByBreadAndSubBreed-button').click();
                              cy.wait('@getImages').then((xhr) => {
                                expect(xhr.state).to.eq('Complete');
                                const imagesUrl = xhr.response?.body.message;
                                cy.getByTestId('imagesListByBreadAndSubBreed-carousel')
                                  .should('exist')
                                  .and('be.visible');
                                cy.getByTestId('imagesListByBreadAndSubBreed-carousel-image-0')
                                  .should('exist')
                                  .and('be.visible')
                                  .and('have.attr', 'src', imagesUrl[0]);
                                cy.getByTestId('imagesListByBreadAndSubBreed-carousel-slide-1')
                                  .should('exist')
                                  .and('have.attr', 'style')
                                  .and('contain', 'transform: translateX(100%');
                                cy.getByTestId('imagesListByBreadAndSubBreed-carousel-nextButton')
                                  .should('exist')
                                  .and('be.visible')
                                  .click();
                                cy.getByTestId('imagesListByBreadAndSubBreed-carousel-slide-0')
                                  .should('have.attr', 'style')
                                  .and('contain', 'transform: translateX(-100%');
                                cy.getByTestId('imagesListByBreadAndSubBreed-carousel-slide-1')
                                  .should('have.attr', 'style')
                                  .and('contain', 'transform: translateX(0%)');
                                cy.getByTestId('imagesListByBreadAndSubBreed-carousel-image-1')
                                  .should('exist')
                                  .and('be.visible')
                                  .and('have.attr', 'src', imagesUrl[1]);
                              });
                            });
                        });
                    });
                });
            });
        });
    });
  });

  describe('Random image from a breed board', () => {
    it('should display placeholder', () => {
      cy.getByTestId('randomBreedDogImage').should('exist');
      cy.getByTestId('randomBreedDogImage-placeholder').should('exist');
    });

    it('should display image when breed is selected ', () => {
      cy.wait('@getBreeds');
      cy.getByTestId('randomBreedDogImage').should('exist').and('be.visible');
      cy.getByTestId('randomBreedDogImage-button').should('exist').and('have.attr', 'disabled');
      cy.getByTestId('randomBreedDogImage-placeholder').should('exist').and('be.visible');
      cy.getByTestId('randomBreedDogImage-breedSelect').should('exist').and('be.visible');
      cy.getByTestId('randomBreedDogImage-breedSelect-dropdown').should('exist').and('be.visible');
      cy.getByTestId('randomBreedDogImage-breedSelect-dropdown')
        .click()
        .then(() => {
          cy.getByTestId('randomBreedDogImage-breedSelect-dropdown-list')
            .should('be.visible')
            .and('have.class', 'is-open');

          cy.getByTestId('randomBreedDogImage-breedSelect-item-0')
            .invoke('text')
            .then((el) => {
              const breedSelected = el.toLowerCase();
              cy.intercept({
                url: `${DOG_API_BASE_URL}/breed/${breedSelected}/images/random`,
              }).as('getImage');
              cy.getByTestId('randomBreedDogImage-breedSelect-item-0')
                .click()
                .then(() => {
                  cy.getByTestId('randomBreedDogImage-breedSelect-dropdown-list')
                    .should('not.be.visible')
                    .and('not.have.class', 'is-visible');
                  cy.getByTestId('randomBreedDogImage-button').should('not.have.attr', 'disabled');
                  cy.getByTestId('randomBreedDogImage-button').click();
                  cy.wait('@getImage').then((xhr) => {
                    expect(xhr.state).to.eq('Complete');
                    const imageUrl = xhr.response?.body.message;
                    cy.getByTestId('randomBreedDogImage-image')
                      .should('exist')
                      .and('be.visible')
                      .and('have.attr', 'src', imageUrl);
                  });
                });
            });
        });
    });
  });

  describe('Random image from a breed and sub breed board', () => {
    it('should display placeholder', () => {
      cy.getByTestId('randomImageByBreedAndSubBreed').should('exist');
      cy.getByTestId('randomImageByBreedAndSubBreed-placeholder').should('exist');
    });
    it('should display images list when breed and sub breed is selected ', () => {
      cy.wait('@getBreeds');
      cy.getByTestId('randomImageByBreedAndSubBreed').should('exist').and('be.visible');
      cy.getByTestId('randomImageByBreedAndSubBreed-button')
        .should('exist')
        .and('have.attr', 'disabled');
      cy.getByTestId('randomImageByBreedAndSubBreed-placeholder').should('exist').and('be.visible');
      cy.getByTestId('randomImageByBreedAndSubBreed-breedSelect').should('exist').and('be.visible');
      cy.getByTestId('randomImageByBreedAndSubBreed-breedSelect-dropdown')
        .should('exist')
        .and('be.visible');
      cy.getByTestId('randomImageByBreedAndSubBreed-subBreedSelect')
        .should('exist')
        .and('be.visible')
        .and('have.class', 'disabled');
      cy.getByTestId('randomImageByBreedAndSubBreed-subBreedSelect-dropdown')
        .should('exist')
        .and('be.visible');
      cy.getByTestId('randomImageByBreedAndSubBreed-breedSelect-dropdown')
        .click()
        .then(() => {
          cy.getByTestId('randomImageByBreedAndSubBreed-breedSelect-dropdown-list')
            .should('be.visible')
            .and('have.class', 'is-open');

          cy.getByTestId('randomImageByBreedAndSubBreed-breedSelect-item-0')
            .invoke('text')
            .then((el) => {
              const breedSelected = el.toLowerCase();

              cy.getByTestId('randomImageByBreedAndSubBreed-breedSelect-item-0')
                .click()
                .then(() => {
                  cy.getByTestId('randomImageByBreedAndSubBreed-breedSelect-dropdown-list')
                    .should('not.be.visible')
                    .and('not.have.class', 'is-visible');

                  cy.getByTestId('randomImageByBreedAndSubBreed-subBreedSelect-dropdown')
                    .click()
                    .then(() => {
                      cy.getByTestId('randomImageByBreedAndSubBreed-subBreedSelect-dropdown-list')
                        .should('be.visible')
                        .and('have.class', 'is-open');

                      cy.getByTestId('randomImageByBreedAndSubBreed-subBreedSelect-item-0')
                        .invoke('text')
                        .then((el) => {
                          const subBreedSelected = el.toLowerCase();
                          cy.intercept({
                            url: `${DOG_API_BASE_URL}/breed/${breedSelected}/${subBreedSelected}/images/random`,
                          }).as('getImage');
                          cy.getByTestId('randomImageByBreedAndSubBreed-subBreedSelect-item-0')
                            .click()
                            .then(() => {
                              cy.getByTestId(
                                'randomImageByBreedAndSubBreed-subBreedSelect-dropdown-list'
                              )
                                .should('not.be.visible')
                                .and('not.have.class', 'is-visible');

                              cy.getByTestId('randomImageByBreedAndSubBreed-button').should(
                                'not.have.attr',
                                'disabled'
                              );
                              cy.getByTestId('randomImageByBreedAndSubBreed-button').click();
                              cy.wait('@getImage').then((xhr) => {
                                expect(xhr.state).to.eq('Complete');
                                const imageUrl = xhr.response?.body.message;
                                cy.getByTestId('randomImageByBreedAndSubBreed-image')
                                  .should('exist')
                                  .and('be.visible')
                                  .and('have.attr', 'src', imageUrl);
                              });
                            });
                        });
                    });
                });
            });
        });
    });
  });
});

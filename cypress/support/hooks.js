before(() => {
    cy.log('Runs ONCE before ALL tests in the suite');
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
    cy.intercept('GET', "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location").as('location')
    cy.intercept('GET', "https://cdn.growthbook.io/api/features/*").as('features')
    cy.intercept('GET', "https://cdn-ukwest.onetrust.com/scripttemplates/*").as('scripttemplates')
    cy.intercept('GET', 'https://privacyportal-uk.onetrust.com/request/v1/consentreceipts').as('consentreceipts')
    cy.intercept('POST', '**/GetViewportInfo').as('GetViewportInfo')
    cy.intercept('POST', 'https://www.googleapis.com/geolocation/v1/geolocate*').as('geolocate')
  });
  
  beforeEach(() => {
    cy.log('Runs BEFORE EACH test');
    cy.reload();
    cy.viewport(1920, 1080);
    cy.fixture('testdata').then(function(data) {
        this.data = data;
    })
  });
  
  afterEach(() => {
    cy.log('Runs AFTER EACH test');
  });
  
  after(() => {
    cy.log('Runs ONCE after ALL tests in the suite');
  });
  
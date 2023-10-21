import {browser, By, element} from "protractor";

describe('ng-weather App', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('should have the right rendering', () => {
            cy.get('h2').first().should('have.text','Enter a zipcode:')
            cy.get('h2')
                .should('have.length', 2)
                .eq(1)
                .should('have.text','Cache configuration')
            cy.get('button').contains('Add location')
            cy.get('input').should('be.visible')
        }
    );

    it('should be possible to add a new location', () => {
        cy.get('input').first().type('95742')
        cy.get('button').click()
        cy.get('.tab-header').should('contain.text','Rancho Cordova')
    });

    it('should be possible to add 2 locations',()=>{});
    it('should be possible to see the current conditions',()=>{});
    it('should be possible to switch between 2 tabs',()=>{});
    it('should be possible to change the cache time to live',()=>{});
    it('should be possible to remove a location',()=>{});
    it('should be possible to see a 5-day forecast',()=>{});

    after( ()=>{
        localStorage.clear();
    })
});

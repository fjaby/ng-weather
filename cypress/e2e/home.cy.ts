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
        cy.get('button').first().click()
        cy.get('.tab-header').should('contain.text','Rancho Cordova')
    });

    it('should be possible to add 2 locations',()=>{
        cy.get('input').first().type('95742')
        cy.get('button').first().click()
        cy.get('input').first().clear().type('10001')
        cy.get('button').first().click()
        cy.get('.tab-header').first().should('contain.text','Rancho Cordova')
        cy.get('.tab-header').eq(1).should('contain.text','New York')
    });

    it('should be possible to see the current conditions',()=>{
        cy.get('input').first().type('95742')
        cy.get('button').first().click()
        cy.get('h4').first().should('contain.text','Current conditions')
    });
    it('should be possible to remove a location',()=>{
        cy.get('input').first().type('95742')
        cy.get('button').first().click()
        cy.get('input').first().clear().type('10001')
        cy.get('button').first().click()
        cy.get('button.close').first().click()
        cy.get('.tab-header').should('have.length',1)
    });
    it('should be possible to see a 5-day forecast',()=>{
        cy.get('input').first().type('95742')
        cy.get('button').first().click()
        cy.get('div.pane').click()
        cy.get('h3').should('contain.text','5-day forecast for')
    });

    after( ()=>{
        localStorage.clear();
    })
});

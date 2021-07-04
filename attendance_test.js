/// <reference types="cypress" />

const { contains } = require("cypress/types/jquery")

describe('login', ()=>{

    it('login to attendence site', ()=>{

        cy.visit('https://dev-nba.dutfin.net/signin')
        cy.get('button button--transparent-dark button--undefined button--undefined button-skip').click()
        cy.get('#employee_code').type('automation')
        cy.get('#password').type('Test1234!')
        cy.get('.button__content').contains().click()
    
    })

    it('Create Remote work attendance', ()=>{

        cy.visit('https://dev-nba.dutfin.net/homepage')
        cy.get('clock-attendance').click()
        cy.get('#is_remote').contains('Saya bekerja remote').should('be.checked')

    
        cy.get('#approver_id').click().contains('Employee Two').click()
        cy.get('.detail__action').click()
        cy.url().should('include', 'homepage')
    })

    it('Attendance filter', ()=>{

        cy.visit('https://dev-nba.dutfin.net/homepage')
        cy.get('#Capa_1').click()
        cy.get('button__content').first().click()
        cy.get('#dateRangeStartDate').click()
        cy.get('DayPickerNavigation_svg__vertical DayPickerNavigation_svg__vertical_1').first().click()
        cy.get('.CalendarMonth CalendarMonth_1')

    
    })

    it('Message filter', ()=>{

        cy.visit('https://dev-nba.dutfin.net/inbox')
        cy.get('button__content').first().click()
        cy.get('#type').click().contains('Safety').click()
        cy.get('.filter__action').contains('Filter').click()
        

    
    })




}) 
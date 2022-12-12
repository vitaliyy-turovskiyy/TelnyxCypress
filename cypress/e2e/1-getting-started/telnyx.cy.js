
beforeEach(() => {
  cy.visit('https://telnyx.com/')
  cy.viewport(1366, 768)
  
})

  describe('telnyx', () => {
    
  
    it('id:TEL_001 Checking the transition to the create a new account tab from the main page by entering an e-mail', () => {
        cy.get('[class="sc-876fcb71-2 eZNiRr"]').type('fake@email.com')
        .should('have.value', 'fake@email.com')
        cy.get('[class="sc-5d3a275a-2 krPznm"]').click()
        cy.get('[class="Text-sc-5o8owa-0 sc-1e9319a3-4 gkWopw gjiitA"]')
        .should('contain', 'Create a free account')

      })

    xit('id:TEL_002 Checking the ability to select a country in the Messaging pricing section', () => {
      
        cy.get('[class="sc-7b6c9f9b-0 dKHwUU"]').scrollIntoView().should('be.visible')
        cy.contains('SMS API Pricing').click()
        cy.get('[class="sc-3ccaa17d-0 jGFDkY"]').type('Ukraine')
        cy.get('li [class="sc-e64845a7-0 fKAnLC"]').should('contain', 'Ukraine').click()
        cy.title().should('include', 'Ukraine Messaging Pricing - SMS/MMS & More')
    
      })

    xit('id:TEL_003 Checking the availability of the information window call us ', () => {
       
        cy.contains("Call Us").should('be.visible').click()
        cy.get('[class="sc-d9b163cf-9 jcrFQg"]').should('be.visible')
    
      })
      
    xit('id:TEL_004 Checking the transition of the Telnix Support page to the Getting Started tab ', () => {
       
        cy.contains("Support Center").should('be.visible').click()
        cy.title().should('include', 'Telnyx Support')
        cy.get('[href="/en/collections/133094-getting-started"]').should('be.visible').click()
        cy.title().should('include', 'Getting Started | Telnyx Support')
      })

    it('id:TEL_005 Checking the ability of the user to send comments to the expert ', () => {
       
        cy.contains("Talk to an expert").should('be.visible').click()
        cy.get('[id="Reason_for_Contact__c"]', { timeout: 7000 }).select('Support').should('be.visible')
        cy.get('[id="FirstName"]').type('Vitalii')
        .should('have.value', 'Vitalii')
        cy.get('[id="LastName"]').type('Last Name')
        .should('have.value', 'Last Name')
        cy.get('[id="Email"]').type('Businessemail@telnyx.com')
        .should('have.value', 'Businessemail@telnyx.com')
        cy.get('[id="Website"]').type('Business.website.com')
        .should('have.value', 'Business.website.com')
        cy.get('[id="Form_Additional_Information__c"]').type('test text')
        .should('have.value', 'test text')
        cy.get('[class="mktoButton"]').click()
        cy.get('h1[class="Text-sc-5o8owa-0 sc-55a4f07f-1 iTsrVq cgMQXX"]').should('contain', 'Thanks for Reaching Out!')
      })
      
    xit('id:TEL_006 Checking the user`s ability to access the password recovery page ', () => {
       
        cy.get('h2 [href="https://telnyx.com/sign-up"]').scrollIntoView()
        .should('be.visible').click()
        cy.title().should('include', 'Sign Up | Telnyx')
        cy.get('[href="https://portal.telnyx.com/#"]').scrollIntoView()
        .should('be.visible').click()
        cy.title().should('include', 'Login')
        cy.get('[href="/#/login/password-reset"]').scrollIntoView()
        .should('be.visible').click()
        cy.title().should('include', 'Password Reset')

      })
       
    xit('id:TEL_007 Checking the ability to create an account by a user without a mark of agreement with the Telnyx Privacy Policy', () => {
        cy.get('footer [href="/sign-up"]').scrollIntoView().click()
        cy.get('[id="email"]').type('fake@email.com').should('have.value', 'fake@email.com')
        cy.get('[id="full_name"]').type('Full name').should('have.value', 'Full name')
        cy.get('[id="password"]').type('FullnameFullname1!')
        cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-7 cSsJix fqfWHQ eUnEoi hBNXWZ"]').click()
        cy.get('[class="sc-570b157-1 eUoKGn"]').should('have.text', 'Please accept the terms and conditions')

      })

      xit('id:TEL_008 Checking the ability of the user to send a request for control and viewing of data without selecting the type of request', () => {
        cy.get('[href="/privacy-policy"]').scrollIntoView().click()
        cy.get('[href="https://telnyx.com/request-to-control-review-data"]').scrollIntoView().click()
        cy.get('[class="mktoButton"]').scrollIntoView().click()
        cy.get('[id="ValidMsgrequestType"]').should('have.text', 'This field is required.')

      })

      xit('id:TEL_009 Checking the transition to the Products tab', () => {
        cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-7 cSsJix UYAGn eUnEoi hBNXWZ mchNoDecorate"]').scrollIntoView().click()
        cy.title().should('include', 'VoIP, SIP Trunks, Programmable SMS, Call Control & More')
        
      })

      xit('id:TEL_010 Testing the page switching feature on the Resources tab', () => {
        cy.get('[href="/resources"][class="sc-f97529d6-0 bjUuRN mchNoDecorate"]').scrollIntoView().click()
        cy.get('[href="/resources/page/3"]').scrollIntoView().click()
        cy.title().should('include', 'Read Our Blog Posts, Updates and Tutorials - Page 3')
        
      })

    
      
})

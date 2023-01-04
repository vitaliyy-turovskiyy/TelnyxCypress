export class TelnyxHomePage {
    
    elements = {

        userEmail : () => cy.get('[class="sc-876fcb71-2 eZNiRr"]'),
        tryForFryBtn : () => cy.get('[class="sc-5d3a275a-2 krPznm"]'),
        createFreeAccount : () => cy.get('[class="Text-sc-5o8owa-0 sc-1e9319a3-4 gkWopw gjiitA"]'),
        footer : () => cy.get('[class="sc-7b6c9f9b-0 dKHwUU"]'),
        smsApiPricingBtn : () => cy.get('footer [href="/pricing/messaging"]'),
        seeSmsPricingFor : () => cy.get('[class="Text-sc-5o8owa-0 sc-b9992a3b-2 frufKM hrQdsr"]'),
        countryList : () => cy.get('li [class="sc-e64845a7-0 fKAnLC"]'),
        callUsBtn : () => cy.get('[class="Text-sc-5o8owa-0 sc-28d89a84-0 sc-d9b163cf-7 frufKM bJzgmA"]'),
        callUsWindow : () => cy.get('[class="sc-d9b163cf-9 jcrFQg"]'),
        supportCenterBtn : () => cy.get('[class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM blLdCs mchNoDecorate"][href="https://support.telnyx.com/en/"]'),
        gettingStartedLink : () => cy.get('[href="/en/collections/133094-getting-started"]'),
        talkToAnExpertBtn : () => cy.get('[href="/contact-us"][class="sc-f97529d6-0 bjUuRN sc-b74bae4-0 fVDMEa mchNoDecorate"]'),
        chooseReasonForContactBtn : () => cy.get('[id="Reason_for_Contact__c"]', { timeout: 7000 }),
        firstName : () => cy.get('[id="FirstName"]'),
        lastName : () => cy.get('[id="LastName"]'),
        businessEmail : () => cy.get('[id="Email"]'),
        businessWebsitel : () => cy.get('[id="Website"]'),
        additionalInformation : () => cy.get('[id="Form_Additional_Information__c"]'),
        submitBtn : () => cy.get('[class="mktoButton"]'),
        thanksforReachingOutMessage : () => cy.get('h1[class="Text-sc-5o8owa-0 sc-55a4f07f-1 iTsrVq cgMQXX"]'),
        privacyPolicyBtn : () => cy.get('[href="/privacy-policy"]'),
        transferYourPersonalDataLink : () => cy.get('[href="https://telnyx.com/request-to-control-review-data"]'),
        submitButton : () => cy.get('[class="mktoButton"]'),
        thisFieldIsRequiredMessage : () => cy.get('[id="ValidMsgrequestType"]'),
        exploreOurProducts : () => cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-7 cSsJix UYAGn eUnEoi hBNXWZ mchNoDecorate"]'),
        blogBtn : () => cy.get('[href="/resources"][class="sc-f97529d6-0 bjUuRN mchNoDecorate"]'),
        page3Btn : () => cy.get('[href="/resources/page/3"]'),

    }

    enteringUserEmail() {
        this.elements.userEmail().type('fake@email.com').should('have.value', 'fake@email.com');
    }
    clickTryForFryBtn() {
        this.elements.tryForFryBtn().click();
    }
    checkCreateFreeAccount() {
        this.elements.createFreeAccount().should('contain', 'Create a free account');
    }
    scrollToFooter() {
        this.elements.footer().scrollIntoView().should('be.visible');
    }
    clickSmsApiPricing() {
        this.elements.smsApiPricingBtn().click();
    }
    enteringSeeSmsPricingFor() {
        this.elements.seeSmsPricingFor().type('Ukraine');
    }
    checkCountryList() {
        this.elements.countryList().should('contain', 'Ukraine').click();
    }
    checkCallUsBtn() {
        this.elements.callUsBtn().should('be.visible').click();
    }
    checkcallUsWindow() {
        this.elements.callUsWindow().should('be.visible');
    }
    clickSupportCenterBtn() {
        this.elements.supportCenterBtn().should('be.visible').click();
    }
    clickGettingStartedLink() {
        this.elements.gettingStartedLink().should('be.visible').click();
    }
    clickTalkToAnExpertBtn() {
        this.elements.talkToAnExpertBtn().should('be.visible').click();
    }
    selectReasonForContactBtn() {
        this.elements.chooseReasonForContactBtn().select('Support').should('be.visible');
    }
    addFirstName() {
        this.elements.firstName().type('First Name').should('have.value', 'First Name');
    }
    addLastName() {
        this.elements.lastName().type('Last Name').should('have.value', 'Last Name');
    }
    addBusinessEmail() {
        this.elements.businessEmail().type('Businessemail@telnyx.com').should('have.value', 'Businessemail@telnyx.com');
    }
    addBusinessWebsitel() {
        this.elements.businessWebsitel().type('Businessemail@telnyx.com').should('have.value', 'Businessemail@telnyx.com');
    }
    addAdditionalInformation() {
        this.elements.additionalInformation().type('test text').should('have.value', 'test text');
    }
    clickSubmitBtn() {
        this.elements.submitBtn().click();
    }
    checkThanksforReachingOutMessage() {
        this.elements.thanksforReachingOutMessage().should('contain', 'Thanks for Reaching Out!');
    }
    clickPrivacyPolicyBtn() {
        this.elements.privacyPolicyBtn().scrollIntoView().click();
    }
    clickTransferYourPersonalDataLink() {
        this.elements.transferYourPersonalDataLink().scrollIntoView().click();
    }
    clickSubmitButton() {
        this.elements.submitButton().scrollIntoView().click();
    }
    chackThisFieldIsRequiredMessage() {
        this.elements.thisFieldIsRequiredMessage().should('have.text', 'This field is required.')
    }
    clickExploreOurProducts() {
        this.elements.exploreOurProducts().scrollIntoView().click()
    }
    clickBlogBtn() {
        this.elements.blogBtn().scrollIntoView().click()
    }
    clickPage3Btn() {
        this.elements.page3Btn().scrollIntoView().click()
    }

}
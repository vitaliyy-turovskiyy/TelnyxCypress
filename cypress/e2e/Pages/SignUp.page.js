export class SignUpPage {
    
    elements = {

        signUpLink : () => cy.get('footer [href="/sign-up"]'),
        workEmail : () => cy.get('[id="email"]'),
        fullName : () => cy.get('[id="full_name"]'),
        userPassword : () => cy.get('[id="password"]'),
        createAccountBtn : () => cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-7 cSsJix fqfWHQ eUnEoi hBNXWZ"]'),
        acceptTheTermsAndConditionsMessage : () => cy.get('[class="sc-570b157-1 eUoKGn"]'),

    }

    clickSignUpLink() {
        this.elements.signUpLink().scrollIntoView().click();
    }
    addWorkEmail(email) {
        this.elements.workEmail().type(email).should('have.value', email);
    }
    addFullName(Fullname) {
        this.elements.fullName().type(Fullname).should('have.value', Fullname);
    }
    addUserPassword(Password) {
        this.elements.userPassword().type(Password);
    }
    clickCreateAccountBtn() {
        this.elements.createAccountBtn().click();
    }
    chackAcceptTheTermsAndConditionsMessage() {
        this.elements.acceptTheTermsAndConditionsMessage().should('have.text', 'Please accept the terms and conditions');
    }

}
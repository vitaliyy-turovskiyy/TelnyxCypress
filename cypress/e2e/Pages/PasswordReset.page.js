export class PasswordResetPage {
    
    elements = {

        switchSaveWithTelnyxLink : () => cy.get('h2 [href="https://telnyx.com/sign-up"]'),
        logInLink : () => cy.get('[href="https://portal.telnyx.com/#"]'),
        forgotYourPasswordLink : () => cy.get('[href="/#/login/password-reset"]'),

    }

    clickSwitchSaveWithTelnyxLink() {
        this.elements.switchSaveWithTelnyxLink().scrollIntoView().should('be.visible').click();
    }
    clickLogInLink() {
        this.elements.logInLink().scrollIntoView().should('be.visible').click();
    }
    clickForgotYourPasswordLink() {
        this.elements.forgotYourPasswordLink().scrollIntoView().should('be.visible').click();
    }

}
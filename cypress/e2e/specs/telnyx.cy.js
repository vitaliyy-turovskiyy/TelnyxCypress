import { CookiePage } from "../Pages/Cookie.page.js";
import { TelnyxHomePage } from "../Pages/Home.page.js";
import { PasswordResetPage } from "../Pages/PasswordReset.page.js";
import { SignUpPage } from "../Pages/SignUp.page.js";

const Cookie = new CookiePage();
const homePage = new TelnyxHomePage();
const passwordResetPage = new PasswordResetPage();
const signUpPage = new SignUpPage();

beforeEach(() => {
  cy.visit('https://telnyx.com/');
  cy.viewport(1366, 768);
  Cookie.closeCookiePopup();
})

  describe('telnyx', () => {
    
    it('id:TEL_001 Checking the transition to the create a new account tab from the main page by entering an e-mail', () => {
      homePage.enteringUserEmail();
      homePage.clickTryForFryBtn();
      homePage.checkCreateFreeAccount();
    })

    it('id:TEL_002 Checking the ability to select a country in the Messaging pricing section', () => {
        homePage.scrollToFooter();
        homePage.clickSmsApiPricing();
        homePage.enteringSeeSmsPricingFor();
        homePage.checkCountryList();
        cy.title().should('include', 'Ukraine Messaging Pricing - SMS/MMS & More');
    })

    it('id:TEL_003 Checking the availability of the information window call us ', () => {
        homePage.checkCallUsBtn();
        homePage.checkcallUsWindow();
    })
      
    it('id:TEL_004 Checking the transition of the Telnix Support page to the Getting Started tab ', () => {
        homePage.clickSupportCenterBtn();
        cy.title().should('include', 'Telnyx Support');
        homePage.clickGettingStartedLink();
        cy.title().should('include', 'Getting Started | Telnyx Support')
    })

    it('id:TEL_005 Checking the ability of the user to send comments to the expert ', () => {
        homePage.clickTalkToAnExpertBtn();
        homePage.selectReasonForContactBtn();
        homePage.addFirstName();
        homePage.addLastName();
        homePage.addBusinessEmail();
        homePage.addBusinessWebsitel();
        homePage.addAdditionalInformation();
        homePage.clickSubmitBtn();
        homePage.checkThanksforReachingOutMessage();
    })
      
    it('id:TEL_006 Checking the user`s ability to access the password recovery page ', () => {
        passwordResetPage.clickSwitchSaveWithTelnyxLink();  
        cy.title().should('include', 'Sign Up | Telnyx')
        passwordResetPage.clickLogInLink();
        cy.title().should('include', 'Login')
        passwordResetPage.clickForgotYourPasswordLink();
        cy.title().should('include', 'Password Reset')
    })
       
    it('id:TEL_007 Checking the ability to create an account by a user without a mark of agreement with the Telnyx Privacy Policy', () => {
        signUpPage.clickSignUpLink();
        cy.fixture('testdata').then(function(regdata){
            signUpPage.addWorkEmail(regdata.email);
            signUpPage.addFullName(regdata.Fullname);
            signUpPage.addUserPassword(regdata.Password);  
        })

        signUpPage.clickCreateAccountBtn();
        signUpPage.chackAcceptTheTermsAndConditionsMessage();
    })

    it('id:TEL_008 Checking the ability of the user to send a request for control and viewing of data without selecting the type of request', () => {
        homePage.clickPrivacyPolicyBtn();
        homePage.clickTransferYourPersonalDataLink();
        homePage.clickSubmitButton();
        homePage.chackThisFieldIsRequiredMessage();
    })

    it('id:TEL_009 Checking the transition to the Products tab', () => {
        homePage.clickExploreOurProducts();
        cy.title().should('include', 'VoIP, SIP Trunks, Programmable SMS, Call Control & More')   
    })

    it('id:TEL_010 Testing the page switching feature on the Resources tab', () => {
        homePage.clickBlogBtn();
        homePage.clickPage3Btn();
        cy.title().should('include', 'Read Our Blog Posts, Updates and Tutorials - Page 3')   
    })
    
})
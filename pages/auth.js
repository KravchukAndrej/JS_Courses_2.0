const { clickSignIn } = require("./home");

const { I } = inject();

module.exports = {
  newUserEmailInput: {css: '#email_create'},
  createAccountButton: {css: '#SubmitCreate'},
  existUserEmailInput: {css: '#email'},
  existUserPasswordInput: {css: '#passwd'},
  userSignInButton: {css: '#SubmitLogin'},
  


  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },
  
  fillNewUserEmail(email) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

   fillExistUserEmail(email){
    this.waitForPageLoad();
    I.fillField(this.existUserEmailInput, email);
  },

  fillExistUserPassword(password){
    this.waitForPageLoad();
    I.fillField(this.existUserPasswordInput, password);
  },

  clickUserSignInButton(){
    I.click(this.userSignInButton);
  },
}
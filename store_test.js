

Feature('Store');

// home work 1 //

/*
Scenario('test something', ({ I }) => {
I.amOnPage('http://automationpractice.com/index.php');
I.click('Dresses');
I.wait(5);
I.click('Evening Dresses');
});
Scenario ('Test GitHub', ({I}) => {
I.amOnPage('https://github.com');
I.click('Sign in', '//html/body/div[1]/header');
I.see('Sign in to GitHub', 'h1');
I.fillField('Username or email address', 'something@totest.com');
I.fillField('Password', '123456');
I.click('Sign in');
I.see('Incorrect username or password.', '.flash-error');
});*/

 //  Home work 2 //

 let user = {
    firstName: 'Test',
    lastName: 'Automation',
    company: 'Samsung',
    password: 'Password1',
    birthDay: '1',
    birthMonth: '1',
    birthYear: '2000',
    state: 'Alabama',
    city: 'Birmingham',
    address: '801 Tom Martin Dr.Birmingham, AL 35211 ',
    address2: 'located off I-459 at the Grants Mill Road',
    postalCode: '35211',
    city: 'Birmingham',    
    additionalInfo: 'Some very closely information',
    homePhone: '+1 202-543-5155',
    mobilePhone:'+1 888-904-1932',    
}
Scenario('form filling', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    myAccountPage.seeMyAccount();
    pause();
    
});

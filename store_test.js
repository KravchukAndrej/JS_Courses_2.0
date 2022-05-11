const { userSignIn } = require("./pages/auth");

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
    mobilePhone: '+1 888-904-1932',
    userEmail: Date.now() + '@test.com',
    newUserEmail: 'nk123456nk@gmail.com',
    newUserPassword: 'nk123456nk',
    
    
};

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



// Home work 2 //


/*

Scenario('form filling', ({
    I,
    homePage,
    authPage,
    createAccountPage,
    myAccountPage
}) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(user.userEmail);
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    myAccountPage.seeMyAccount();


});
After(({ I, myAccountPage}) => { // or Background
    myAccountPage.clickSignOut();
    //pause();
});*/


// Home work 3 //

// Дописать предыдущий сценарий что бы он сохранял почту и пароль в обьект user
// Дописать в предыдущий сценарий after-обёртку которая вылогинивает созданого пользователя
// Перед новым сценарием дописать функционал before который например открывает головную страницу сайта
//Добавить новый сценарий, который будет логиниться, выбирать любой товар, получать его цену со страницы товара,
// добавлять товар в корзину и сравнивать цену со страницы товара и в корзине, завершить покупку


Before(({ I, homePage}) => {
    homePage.openStore();
});

Scenario('Choose, compare amount and buy a product', async ({ I, homePage, authPage, myAccountPage}) => {
    homePage.clickSignIn();
    //authPage.fillExistUserEmail(user.userEmail);
    //authPage.fillExistUserPassword(user.password);
    //временно используем статическую почту и пароль от уже залогиненого юзера
    authPage.fillExistUserEmail(user.newUserEmail);
    authPage.fillExistUserPassword(user.newUserPassword);
    authPage.clickUserSignInButton();
    myAccountPage.waitForUserSignIn();
    myAccountPage.clickTshirts();
    myAccountPage.waitForFadedShort();
    myAccountPage.clickFadedShort();
    myAccountPage.getProductPrice();
    //console.log(await priseFromMenu);
    myAccountPage.waitForAddToCart();
    myAccountPage.clickAddToCart();
    myAccountPage.clickProceedToCheckout();
    myAccountPage.getProductUnitPrice();
    //console.log(await priseFromUnit);
    myAccountPage.priceComparison();
    pause();

});
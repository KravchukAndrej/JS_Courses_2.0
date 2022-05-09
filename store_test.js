

Feature('Store');


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
});
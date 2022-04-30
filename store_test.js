const { pause } = require("codeceptjs");

Feature('Store');

Scenario('test something', ({ I }) => {
I.amOnPage('http://automationpractice.com/index.php');
I.click('Dresses');
I.wait(5);
I.click('Evening Dresses');
pause();
});

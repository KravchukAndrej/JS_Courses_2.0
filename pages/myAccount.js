const { I } = inject();

module.exports = {

  signOutButton: {css: 'a.logout'},
  tshirtsButton: {xpath: '//div/ul/li/a[@title="T-shirts"]'},
  fadedShortButton: {xpath: '//div/h5/a[@itemprop="url"]'}, //#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span
  addToCartButton: {xpath: '//div/p/button[@class="exclusive"]'},
  proceedToCheckoutButton:{xpath: '//*[contains(text(),"checkout")]'},
  price: {css: '#our_price_display'},
  unitPrice: {xpath: '//tr/td/span/span[@class="price"]'},
  unitPrice: {xpath: '//tr/td/span/span[@class="price"]'},
  proceedToCheckoutButtonOne: { css:'#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span'},
  proceedToCheckoutButtonTwo: {xpath: '//p/button/span[text()="Proceed to checkout"]'},
  iAgreeInput: {xpath: '//div/span/input[@name="cgv"]'},
  proceedToCheckoutButtonThree: {xpath: '//button[@name="processCarrier"]'},
  payButton: {xpath: '//div/p/a[@class="bankwire"]'},
  confirmButton: {xpath: '//p/button/span[text()="I confirm my order"]'},

  waitForPageLoad() {
    I.waitForVisible(this.signOutButton);
  },
  seeMyAccount(){
        I.see('My account');
  },
  clickSignOut(){
      I.click(this.signOutButton);
    },
    waitForUserSignIn(){
      I.waitForVisible(this.tshirtsButton);
    },
  clickTshirts(){
    I.click(this.tshirtsButton);
  },
  waitForFadedShort(){
    I.waitForVisible(this.fadedShortButton);
  },
  clickFadedShort(){
    I.click(this.fadedShortButton);
  },
  openProduct(){
    I.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
  },
  async getProductPrice(){
    return await I.grabTextFrom(this.price);
  },

  waitForAddToCart(){
    I.waitForVisible(this.addToCartButton);
  },
  clickAddToCart(){
    I.click(this.addToCartButton);
  },
  clickProceedToCheckout(){
    I.click(this.proceedToCheckoutButton);
  },
  async getProductUnitPrice(){
    return await I.grabTextFrom(this.unitPrice);
  },/*
  priceComparison(){
    if (getProductPrice() == getProductUnitPrice()){
        alert("Суммы в каталоге товара и в корзине совпадают. Можно завершить покупку");
    }else{
        alert("Суммы в каталоге товара и в корзине не совпадают!!! Обратитесь в отдел продаж!");
    };
  },*/
  clickProceedToCheckoutOne(){
    I.click(this.proceedToCheckoutButtonOne);
  },
  waitForButtonTwo(){
    I.waitForVisible(this.proceedToCheckoutButtonTwo);
  },
    clickProceedToCheckoutTwo(){
    I.click(this.proceedToCheckoutButtonTwo);
  },
  waitForAgreeInput(){
    I.waitForVisible(this.iAgreeInput);
  },
  clickIagree(){
    I.click(this.iAgreeInput);
  },
  clickProceedToCheckoutThree(){
    I.click(this.proceedToCheckoutButtonThree);
  },
  waitForPayButton() {
    I.waitForVisible(this.payButton);
  },
  clickPayButton(){
   
    I.click(this.payButton);
  },

  clickConfirmButton(){
   // I.waitForInvisible(this.confirmButton);
    I.click(this.confirmButton);
  },


}


const { I } = inject();

module.exports = {

  signOutButton: {css: 'a.logout'},
  tshirtsButton: {xpath: '//div/ul/li/a[@title="T-shirts"]'},
  fadedShortButton: {xpath: '//div/h5/a[@itemprop="url"]'},
  addToCartButton: {xpath: '//div/p/button[@class="exclusive"]'},
  proceedToCheckoutButton:{xpath: '//*[contains(text(),"checkout")]'},
  price: {css: '#our_price_display'},
  unitPrice: {xpath: '//tr/td/span/span[@class="price"]'},
  unitPrice: {xpath: '//tr/td/span/span[@class="price"]'},
  proceedToCheckoutButtonOne: { css:'#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span'},
  proceedToCheckoutButtonTwo: {xpath: '//button[@class="button btn btn-default button-medium"]'},
  iAgreeInput: {css: '#cgv'},

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
  clickProceedToCheckoutTwo(){
    I.click(this.proceedToCheckoutButtonTwo);
  },
  clickIagree(){
    I.click(this.iAgreeInput);
  },
}

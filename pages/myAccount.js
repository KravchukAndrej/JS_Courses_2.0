const { I } = inject();

module.exports = {

  signOutButton: {css: 'a.logout'},
  tshirtsButton: {xpath: '//div/ul/li/a[@title="T-shirts"]'},
  fadedShortButton: {xpath: '//div/h5/a[@itemprop="url"]'},
  addToCartButton: {xpath: '//div/p/button[@class="exclusive"]'},
  proceedToCheckoutButton:{xpath: '//*[contains(text(),"checkout")]'},
  price: {css: '#our_price_display'},
  unitPrice: {xpath: '//tr/td/span/span[@class="price"]'},

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
  },
  priceComparison(){
    if (getProductPrice() == getProductUnitPrice()){
        alert("Суммы в каталоге товара и в корзине совпадают. Можно завершить покупку");
    }else{
        alert("Суммы в каталоге товара и в корзине не совпадают!!! Обратитесь в отдел продаж!");
    };
  },
}

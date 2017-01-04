describe("Razorpay", function() {

    var sleep_time = 3000;

    beforeEach(function () {

      //Razorpay
      element.all(by.repeater('paymentMode in payment.paymentModes')).get(0).click();

      browser.sleep(sleep_time);

      //Pay Booking Charges
      element(by.xpath('/html/body/div[1]/div[2]/div/div/div/div/div[2]/div/div[6]/button')).click();

      browser.sleep(sleep_time);

      // browser.waitForAngular();

    });

    xit("1) Cancel", function() {

        //Close
        // element(by.id('modal-close')).click();
        browser.navigate().back();

        browser.sleep(sleep_time);

    });

    it("2) Card - Failure", function () {

      var card = element(by.css('.payment-option.item'));
      // browser.wait(EC.visibilityOf(card), 3000);

      //Card
      card.click();

      browser.sleep(sleep_time);

      element(by.id('card_number')).sendKeys('4111 1111 1111 1111');

      browser.sleep(sleep_time);

      //Failure
      element(by.xpath('/html/body/form/p[1]/input[2]')).click();

      browser.sleep(sleep_time);

      browser.navigate().back();

      browser.sleep(sleep_time);

    });

});

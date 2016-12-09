describe("User App: Gateway Payments - Razorpay / Paytm", function() {

  var sleep_time = 3000;

    it("Login", function() {

        browser.get("http://staging.web.sminq.com");

        browser.sleep(sleep_time);

        //Login
        element(by.xpath('/html/body/div[1]/div[1]/div/div[2]/div[2]/ul/li[1]/a')).click();

        browser.sleep(sleep_time);

        var mobile = 7000000022;

        var pin = 1111;

        var login_btn = element(by.id('sign-in-button'));

        //Mobile
        element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[1]/input')).clear().then(function() {

            element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[1]/input')).sendKeys(mobile);

        });

        login_btn.click();

        browser.sleep(sleep_time);

        //PIN
        element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[2]/input')).clear().then(function() {

            element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[2]/input')).sendKeys(pin);

        });

        var login_btn2 = element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[4]/button'));

        login_btn2.click();

        browser.sleep(sleep_time);

        expect(element(by.id('toast-container')).getText()).toContain('IN');

        browser.sleep(sleep_time);

    });

});

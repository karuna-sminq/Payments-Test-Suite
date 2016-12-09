describe("Biz App: Link payments - Instamojo / Razorpay", function() {

    var sleep_time = 3000;

    it("Login", function() {
        browser.ignoreSynchronization = true;

        browser.get("http://staging.business.sminq.com/login")

        browser.sleep(sleep_time);

        //Mobile No.
        element(by.model('phoneNo')).sendKeys(9393939393);

        browser.sleep(sleep_time);

        //Login
        element(by.xpath('/html/body/div/div[2]/md-content/div[1]/md-card/md-card-content/form/md-card-actions/button')).click();

        browser.sleep(sleep_time);

        //PIN
        element(by.model('pin')).sendKeys(2222);

        browser.sleep(sleep_time);

        //Login with PIN
        element(by.xpath('/html/body/div/div[2]/md-content/div[2]/md-card/md-card-content/form[2]/div/div/button')).click();

        browser.sleep(sleep_time);

    });

    xit("Book Appointment", function() {

        //Add Token
        element(by.xpath('/html/body/div/div[2]/md-content/add-new-token/div/md-fab-speed-dial/md-fab-trigger/button')).click();

        browser.sleep(sleep_time);

        element(by.model('mobile')).sendKeys(7000000022);

        browser.sleep(sleep_time);

        //Join button
        element(by.xpath('/html/body/div[3]/md-dialog/form/md-dialog-actions/button')).click();

        browser.sleep(sleep_time);

        //Close popup
        element(by.xpath('/html/body/div[3]/md-dialog/form/md-dialog-content/div[1]/h4/md-icon')).click();

        browser.sleep(sleep_time);

    });

    it("Make payment for token", function() {

        //Token popup
        // element.all(by.repeater('token in tokenGroup')).get(0).click();
        element(by.xpath('/html/body/div/div[2]/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[1]/div/div[2]/div/div[2]/div/div/div/div/ul/li/div[1]/div[2]')).click();

        browser.sleep(sleep_time);

        //Make Payment
        element(by.xpath('/html/body/div[3]/md-dialog/md-dialog-content/div[6]/md-input-container/button')).click();

        browser.sleep(sleep_time);

        //Select Online
        element(by.xpath('/html/body/div[3]/md-dialog/md-dialog-content/div[7]/div[2]/div[1]/md-radio-group/md-radio-button')).click();

        browser.sleep(sleep_time);

        //Add Amount
        element(by.model('amountOnline')).sendKeys(10);

        browser.sleep(sleep_time);

        //Send Link button
        element(by.xpath('/html/body/div[3]/md-dialog/md-dialog-content/div[7]/div[2]/div[3]/button')).click();

        browser.sleep(sleep_time);

        //Confirm - Ok
        element(by.xpath('/html/body/div[3]/md-dialog/md-dialog-actions/button[2]')).click();

        browser.sleep(sleep_time);

        //Check for payment link
        element(by.xpath('/html/body/md-toast/div/span')).getText().then(function(linkToast) {

          console.log(linkToast);
          expect(linkToast).toMatch(/sent/);

        });

        browser.sleep(sleep_time);

    });

});

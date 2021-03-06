// conf.js

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    },
    specs: [
        // '1_1_link_payments.js',
        '1_2_1_gateway_payments.js',
        '1_2_2_razorpay.js',
    ],

    /*=============================================>>>>>
    = Spec files =
    ===============================================>>>>>*/

    // '1_1_link_payments.js',
    // '1_2_1_gateway_payments.js'
    // '1_2_2_razorpay.js',

    /*= End of Spec files =*/
    /*=============================================<<<<<*/

    onPrepare: function() {
        browser.manage().window().maximize();
        global.EC = protractor.ExpectedConditions;
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './reports/',
                takeScreenshotsOnlyOnFailures: true,
            })
        );
    }

}

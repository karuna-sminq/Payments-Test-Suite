# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import unittest, time, re

class Razorpay(unittest.TestCase):
    # def setUp(self):
    #     self.driver = webdriver.Firefox()
    #     self.driver.implicitly_wait(30)
    #     self.base_url = "http://localhost:9000"
    #     self.verificationErrors = []
    #     self.accept_next_alert = True
        self.sleep_time = 2
    #     self.driver.maximize_window()

    def test_razorpay_case2(self):
        driver = self.driver

        driver.find_element_by_id("testing-payment-modes").click()
        time.sleep(self.sleep_time)
        driver.find_element_by_xpath("//*[@id='my-wrapper']/div[2]/div/div/div/div/div[2]/div/div[6]/button").click()
        time.sleep(self.sleep_time)
        driver.switch_to_frame(driver.find_element_by_tag_name("iframe"))
        time.sleep(self.sleep_time)

        # Card
        driver.find_element_by_xpath("//*[@id='payment-options']/div[1]").click()
        time.sleep(sleep_time)
        driver.find_element_by_id("card_number").send_keys("4111 1111 1111 1111")
        time.sleep(sleep_time)
        driver.find_element_by_id("card_expiry").send_keys("11 19")
        time.sleep(sleep_time)
        driver.find_element_by_id("card_name").clear()
        driver.find_element_by_id("card_name").send_keys("QA Test")
        time.sleep(sleep_time)
        driver.find_element_by_id("card_cvv").send_keys("111")
        time.sleep(sleep_time)
        driver.find_element_by_xpath("//*[@id='footer']/span[2]").click()
        time.sleep(sleep_time)
        driver.find_element_by_id("otp-sec").click()
        time.sleep(sleep_time)
        driver.find_element_by_id("modal-close").click()
        time.sleep(sleep_time)

    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True

    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True

    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True

    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()

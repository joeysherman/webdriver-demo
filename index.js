/**
 * Created by Joey on 4/18/2017.
 */
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const EMAIL = 'joey.a.sherman@gmail.com',
      PASSWORD = '3Zt5r8ixe5HH';

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:9515')
    .build();

/**
 *  Flow for Freelancer.com
 *
 *  - check if logged if
 *  no - login | yes - navigate home
 *
 *  -
 */


function login() {
    driver.get('http://www.freelancer.com/login');
    driver.findElement(By.id('username')).sendKeys(EMAIL);
    driver.sleep(1000);
    driver.findElement(By.id('passwd')).sendKeys(PASSWORD);
    driver.findElement(By.id('login_btn')).click()
    driver.sleep(1000);
    driver.close();
}


login();
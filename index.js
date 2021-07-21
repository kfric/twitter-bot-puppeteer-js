require("dotenv").config();

const puppeteer = require("puppeteer");
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  page = await browser.newPage();
  page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false,
  });

  await page.goto("https://twitter.com/login", { waitUntil: "networkidle2" });

  await page.type('input[name="session[username_or_email]"]', USERNAME, {
    delay: 25,
  });
  await page.type('input[name="session[password]"]', PASSWORD, {
    delay: 25,
  });

  await page.click('div[data-testid="LoginForm_Login_Button"]');

  await page.waitFor('input[data-testid="SearchBox_Search_Input"]');
  await page.type('input[data-testid="SearchBox_Search_Input"]', "d4nnycat", {
    delay: 25,
  });
  await page.keyboard.press("Enter");
  await page.waitFor(2000);

  await page.click(
    'a[class="css-4rbku5 css-18t94o4 css-1dbjc4n r-kemksi r-sdzlij r-1loqt21 r-1adg3ll r-1ny4l3l r-1udh08x r-o7ynqc r-6416eg r-13qz1uu"]'
  );
  await page.click(
    'div[class="css-901oao r-1awozwy r-13gxpu9 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]'
  );

  await page.waitFor('input[data-testid="searchPeople"]');
  await page.type('input[data-testid="searchPeople"]', "d4nnycat", {
    delay: 25,
  });
  await page.keyboard.press("Enter");
  await page.waitFor(2000);

  await page.click(
    'div[class="css-901oao css-bfa6kz r-1fmj7o5 r-1qd0xha r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-1udh08x r-3s2u2q r-qvutc0"]'
  );
})();

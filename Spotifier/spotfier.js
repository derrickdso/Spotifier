const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({width : 1440,height : 810});
  await page.goto('https://accounts.spotify.com/en/login?continue=https:%2F%2Fartists.spotify.com%2Fc%2Fartist%2F3Zck7FW6CnWWdKMmZMYsyr%2Fsongs');
  await page.click('body > div.container-fluid.login.ng-scope > div > div:nth-child(1) > div > a');
  await page.waitFor(1000);
  await page.type('#email','');
  await page.type('#pass','');
  await page.click('#loginbutton');
  await page.waitFor(5000);
  //await page.click('#timeline > div > div > div > div > span > span > a');

  await page.screenshot({ path: './stats/github.png' });

  browser.close();
}

run();


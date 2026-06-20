const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
  await page.goto('http://localhost:8001/index.html');
  await page.waitForLoadState('networkidle');

  // Add records (clear localStorage first and add new ones)
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  // Add records
  await page.fill('input[id="studyDate"]', '2026-06-10');
  await page.selectOption('select[id="studyLang"]', '英語');
  await page.fill('input[id="studyMinutes"]', '30');
  await page.click('button:has-text("学習を記録する")');
  await page.waitForTimeout(300);

  await page.fill('input[id="studyDate"]', '2026-06-09');
  await page.selectOption('select[id="studyLang"]', '中国語');
  await page.fill('input[id="studyMinutes"]', '45');
  await page.click('button:has-text("学習を記録する")');
  await page.waitForTimeout(300);

  await page.fill('input[id="studyDate"]', '2026-06-08');
  await page.selectOption('select[id="studyLang"]', '英語');
  await page.fill('input[id="studyMinutes"]', '60');
  await page.click('button:has-text("学習を記録する")');
  await page.waitForTimeout(300);

  // Scroll to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);

  // Take screenshot
  await page.screenshot({ path: '/tmp/app-hero.png' });
  console.log('Hero section screenshot saved');

  await browser.close();
})();

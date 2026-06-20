const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
  await page.goto('http://localhost:8001/index.html');
  await page.waitForLoadState('networkidle');

  // Add a study record
  await page.fill('input[id="studyDate"]', '2026-06-10');
  await page.selectOption('select[id="studyLang"]', '英語');
  await page.fill('input[id="studyMinutes"]', '30');
  await page.fill('input[id="studyContent"]', 'リスニング練習');
  await page.click('button:has-text("学習を記録する")');
  
  await page.waitForTimeout(500);

  // Add another record
  await page.fill('input[id="studyDate"]', '2026-06-09');
  await page.selectOption('select[id="studyLang"]', '中国語');
  await page.fill('input[id="studyMinutes"]', '45');
  await page.fill('input[id="studyContent"]', '会話練習');
  await page.click('button:has-text("学習を記録する")');

  await page.waitForTimeout(500);

  // Add third record
  await page.fill('input[id="studyDate"]', '2026-06-08');
  await page.selectOption('select[id="studyLang"]', '英語');
  await page.fill('input[id="studyMinutes"]', '60');
  await page.fill('input[id="studyContent"]', '単語学習');
  await page.click('button:has-text("学習を記録する")');

  await page.waitForTimeout(500);

  // Scroll down to see charts
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(500);

  // Take screenshot
  await page.screenshot({ path: '/tmp/app-with-charts.png' });
  console.log('Screenshot saved with charts');

  await browser.close();
})();

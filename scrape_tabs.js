const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
    try {
        console.log("Connecting to browser...");
        // You might need full puppeteer if puppeteer-core doesn't work, but let's try fetching the websocket URL first.
        const resp = await fetch('http://localhost:9222/json/version');
        const data = await resp.json();
        const wsUrl = data.webSocketDebuggerUrl;
        
        const browser = await puppeteer.connect({ browserWSEndpoint: wsUrl });
        const pages = await browser.pages();
        console.log(`Found ${pages.length} pages.`);
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const title = await page.title();
            const url = page.url();
            console.log(`\nTab ${i}: ${title}`);
            console.log(`URL: ${url}`);
            if (!url.startsWith('chrome-extension')) {
                const html = await page.content();
                const safeTitle = title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
                fs.writeFileSync(`tab_${i}_${safeTitle}.html`, html);
                console.log(`Saved tab_${i}_${safeTitle}.html`);
                
                // If it's the Search Console tab, let's extract some text just to be sure
                if (url.includes('search.google.com')) {
                    const text = await page.evaluate(() => document.body.innerText);
                    fs.writeFileSync(`tab_${i}_${safeTitle}_text.txt`, text);
                }
            }
        }
        browser.disconnect();
        console.log("Done.");
    } catch (e) {
        console.error(e);
    }
})();

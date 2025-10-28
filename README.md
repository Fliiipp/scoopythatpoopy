# 🐾 Scoopy That Poopy

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)](#)
[![Accessibility Friendly](https://img.shields.io/badge/Accessibility-Friendly-3c9?logo=accessible-icon&logoColor=fff&style=for-the-badge)](#)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-181717?logo=github&logoColor=fff&style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey?style=for-the-badge)](#)

A responsive, accessible, and modular website for **Scoopy That Poopy LLC**, a Las Vegas–based pet waste removal service.  
Built with clean HTML5, modular ES6 JavaScript, and scalable CSS for maintainability and SEO performance.

---

## 🚀 Project Overview

Scoopy That Poopy provides reliable, pet-friendly yard cleaning services for residential and commercial clients in the Las Vegas area.  
The website showcases services, pricing, and contact options, built with performance and accessibility in mind.

---

## 🗂️ Project Structure

```
/
├── index.html
├── services.html
├── contact.html
├── terms.html
├── privacy.html
├── robots.txt
├── sitemap.xml
├── /assets
│   ├── /css
│   │   ├── index.css
│   │   ├── components.css
│   │   └── variables.css
│   ├── /js
│   │   ├── main.js
│   │   └── /modules
│   │       ├── formSubmit.js
│   │       ├── phoneFormatter.js
│   │       ├── notification.js
│   │       ├── priceList.js
│   │       ├── randomImages.js
│   │       └── schemaData.js
│   ├── /images
│   │   ├── /dogs
│   │   ├── /logos
│   │   └── /social
│   └── /icons
│       ├── favicon.ico
│       ├── favicon.svg
│       ├── manifest.webmanifest
│       └── apple-touch-icon.png
```

---

## ⚙️ Local Setup & Preview

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/scoopy-that-poopy.git
cd scoopy-that-poopy
```

### 2. Local Preview
Open `index.html` directly in your browser, or start a local server:

```bash
python -m http.server 5500
```

Then visit [http://localhost:5500](http://localhost:5500)

---

## 🌐 Deployment — GitHub Pages

### 🧭 Steps
1. Commit and push all files to your **main** branch.  
2. Go to **Settings → Pages** in your repository.  
3. Under *Build and deployment*, select:
   - **Source:** Deploy from branch  
   - **Branch:** `main`  
   - **Folder:** `/ (root)`
4. Click **Save**.  
5. Your site will be available at:
   ```
   https://<yourusername>.github.io/scoopy-that-poopy/
   ```

### 🧾 If Using a Custom Domain
If you own **scoopythatpoopy.com**, add a `CNAME` file at your project root containing:
```
scoopythatpoopy.com
```
Then, set the custom domain in **Settings → Pages → Custom Domain**.

---

## 🧩 SEO & Metadata

**Files required at root for search engines:**
- `robots.txt` – tells search engines which pages to crawl.  
- `sitemap.xml` – lists public URLs for indexing.  

These help Google and Bing correctly find and rank your pages.

### Quick Tests
- [Robots.txt Tester](https://www.google.com/webmasters/tools/robots-testing-tool)
- [Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Google Search Console](https://search.google.com/search-console)

---

## ✨ Features Summary

| Feature | Description |
|----------|--------------|
| 🧱 Modular JS | Each feature (pricing, form, phone input, etc.) loads only when needed |
| 🎨 Responsive CSS | Uses grid + flexbox for mobile-first design |
| 🦮 Accessibility | Keyboard and screen reader friendly |
| 💬 Notifications | Custom banner system for user messages |
| 📜 SEO Ready | Schema.org LocalBusiness markup injected dynamically |
| 📋 Legal Pages | Includes Terms & Conditions + Privacy Policy |
| 🌐 Sitemap & Robots | Fully optimized for indexing and crawling |

---

## 💡 Maintenance Tips

- Update `sitemap.xml` `<lastmod>` dates after publishing changes.  
- Keep `robots.txt` sitemap path valid (use `/sitemap.xml` for GitHub Pages).  
- Use [TinyPNG](https://tinypng.com/) to compress images before uploading.  
- Check [PageSpeed Insights](https://pagespeed.web.dev/) after deployment.  

---

**© 2025 Scoopy That Poopy LLC. All rights reserved.**  
Las Vegas, Nevada  
Website maintained via GitHub Pages.

```markdown
# LinkedIn Scraping Extension 🚀

A Chrome extension + backend application to scrape LinkedIn profiles and store data for research, recruiting, or analytics purposes.

---

## 🧰 Features

- **Browser Extension**: Scrape LinkedIn profiles directly from your browser.
- **Backend Storage**: Send scraped data to a Node.js/Express backend for processing and storage.
- **Structured Data**: Collect profile information like name, headline, bio, location, followers, connections, etc.
- **Easy Setup**: Minimal configuration to start scraping and storing data.
- **Extensible**: Can be extended to handle bulk profiles or other social networks.

---

## 📂 Folder Structure

```

/extension/                  # Browser extension code (manifest, UI, content scripts, etc.)
/linkedin-scraper-backend/   # Backend API and database integration
README.md                     # Project documentation

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Pooja0410-ui/LinkedIn-scraping-extension.git
cd LinkedIn-scraping-extension
````

### 2. Setup the Backend

```bash
cd linkedin-scraper-backend
npm install
# configure environment variables (e.g., PORT, DATABASE_URL)
npm start
```

The backend should now be running at `http://localhost:5000`.

### 3. Setup the Extension

```bash
cd ../extension
npm install
# build the extension if needed
npm run build
```

Then, in Chrome:

1. Go to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked** and select the `extension/dist` (or `extension/`) folder.

---

## 🧩 Architecture Overview

1. **Extension**: Runs in the browser → scrapes profile information from LinkedIn.
2. **Backend**: Receives the scraped data → stores it in a database or exports as JSON/CSV.
3. **Communication**: REST API between extension and backend.
4. **Data Flow**: LinkedIn page → Browser extension → Backend → Database/export.

---

## ⚠️ Legal & Usage Notes

* Automated scraping of LinkedIn may violate their Terms of Service. Use responsibly and only where legally permitted.
* Avoid large-scale scraping to prevent IP blocking or account restrictions.
* This project is **for educational purposes** — no warranty is provided.

---

## 📦 Future Enhancements

* Bulk scraping multiple profiles.
* CAPTCHA & rate-limit handling.
* Backend dashboard for monitoring scraping.
* Export options: CSV, JSON, Excel.
* UI improvements for filtering and managing scraped data.

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License © 2025 Pooja Patil
```

---

## 📸 Screenshots (Optional)


<img width="553" height="292" alt="image" src="https://github.com/user-attachments/assets/ba0e2c90-cb5c-4df5-8e55-ef81e4797fb1" />

---

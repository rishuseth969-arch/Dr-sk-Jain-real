# 🌐 Dr. S.K. Jain Clinic Platform - Netlify Live Deploy Guide

This medical website is fully built as a high-performance **static client-side Single-Page Application (SPA)**. This means it has **zero backend hosting dependencies** and can be deployed for **FREE** to Netlify in just a few clicks by dragging and dropping!

---

## 🚀 How to deploy on Netlify (Drag-and-Drop)

Follow these simple steps to make the website live:

### Step 1: Build the Project in AI Studio
Before downloading the code, ensure the compilation build is complete. In your terminal or during the download packaging step, Vite compiles the source code into a highly optimized, single `dist` folder.
* Locate the **`dist/`** folder inside your downloaded project directory. 
* If you haven't built it locally, open your computer terminal in the folder and run:
  ```bash
  npm run build
  ```
  *(This compiles all the TSX files and Tailwind CSS into clean, static HTML, JavaScript, and asset files inside the `dist/` folder).*

### Step 2: Open Netlify Drop
1. Open your web browser and go to: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. You do not even need to create an account immediately (though creating a free account is highly recommended so your site never expires!).

### Step 3: Drag & Drop the `dist` Folder
1. Select the **`dist`** folder inside your project directory (do **NOT** upload the whole project root ZIP—only drag the **`dist`** folder which contains the compiled live files).
2. Drag and drop the **`dist`** folder directly into the designated upload area on the Netlify Drop webpage.

### Step 4: Your Website is Live!
* Netlify will instantly upload, register, and deploy your static build.
* Within 5 seconds, Netlify will generate a free live URL (e.g., `https://wonderful-clinic-12345.netlify.app`).
* You are all set! You can map a custom domain (like `www.drskjain.com`) in Netlify Settings at any time if you wish.

---

## 🔒 Activating Your AI Health Assistant with Gemini
To make the AI Clinical Assistant answer deep medical questions dynamically in production:
1. Open your live deployed Netlify website.
2. Click the floating **AI Clinical Assistant** badge in the bottom-right corner.
3. Click the **Key (🔑)** icon in the chat header.
4. Input your personal Google **Gemini API Key** and click **Unlock**.
5. Your key is stored securely to your phone or computer's private client-side `localStorage`. It will run the live Gemini model (`gemini-3.5-flash`) securely without needing any custom backend!

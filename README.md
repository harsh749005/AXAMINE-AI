# AXAMINE-AI — Setup & Installation Guide

A quick, step‑by‑step guide for cloning the repo, installing dependencies, and running the app locally.

## Prerequisites

* **Git** (2.20+)
* **Node.js LTS** (v18 or v20 recommended) — npm comes with Node
* (Optional) **VS Code** or any editor

> Check versions:

```bash
node -v
npm -v
git --version
```

## 1) Clone the repository

```bash
git clone https://github.com/harsh749005/AXAMINE-AI.git
cd AXAMINE-AI
```

## 2) Install dependencies

If `package-lock.json` exists (it should), prefer a clean, reproducible install:

```bash
npm ci
```

If `npm ci` fails for any reason, use:

```bash
npm install
```

## 3) Run the app (development)

First, check available scripts in `package.json`:

```bash
cat package.json
```

Then run **one** of the following (depending on the tooling used):

* **Vite** projects:

```bash
npm run dev
```

* **Create React App** projects:

```bash
npm start
```

The terminal will print a local URL (typically `http://localhost:5173` for Vite or `http://localhost:3000` for CRA). Open it in your browser.

## 4) Build & preview (optional)

* **Vite**:

```bash
npm run build
npm run preview
```

* **CRA**:

```bash
npm run build
npx serve -s build
```

## 5) Environment variables (if applicable)

If the repo contains a `.env.example`, copy it to `.env` and fill values:

```bash
cp .env.example .env
```

Restart the dev server after changes.

## 6) Common issues & fixes

* **ENOENT: no such file or directory, open '.../package.json'**
  You’re not in the project root or you didn’t clone the full project. The root must include `package.json`, `package-lock.json`, `src/`, `public/`, etc.

* **`npm: command not found`**
  Install Node.js LTS from nodejs.org, then reopen your terminal.

* **Module not found (icons or UI libs)**
  Install the icon/UI package actually referenced in imports, then restart the dev server. For example:

  ```bash
  npm i react-icons
  # or
  npm i motion


* **Port already in use**
  Stop any other dev server, or run on another port (e.g., Vite: `npm run dev -- --port 5174`).

* **Node version mismatch**
  If the repo includes an `.nvmrc`, run `nvm use`. Otherwise use Node 18 or 20.

## 7) Project structure (example)

```
AXAMINE-AI/
├─ public/
├─ src/
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md
```

## 8) How to share updates

**Preferred (Git):**

```bash
git checkout -b feature/my-change
git add .
git commit -m "Describe your change"
git push origin feature/my-change
```

**Alternatively (Zip):** Zip the **entire project** (include `package.json`, `package-lock.json`, `src`, `public`, etc.; **exclude** `node_modules` and the `build` folder) and share the zip file.

---

**That’s it!** If anything fails, share the terminal error output so we can help quickly.

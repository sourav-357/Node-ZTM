# 🚀 Node.js‑ZTM 

> 📚 A clean, beginner‑friendly **Node.js learning repo** following the **Zero To Mastery** (ZTM) path — with examples, notes, and mini‑projects.

---

## ⭐ Overview

This repository documents my journey learning **Node.js** — from fundamentals to building APIs. It contains small, focused examples (like `hello.js`) and will grow with middleware, REST, databases, auth, testing, and deployment.

---

## ✨ Features

* 📄 Minimal examples that explain **one concept at a time**
* 🟢 **Plain JavaScript** (no frameworks to start)
* 📝 Helpful comments and **README notes** alongside code
* ⚙️ Ready‑to‑use **NPM scripts** for running examples

---

## 🧰 Tech Stack

* ⚡ **Runtime:** Node.js (LTS recommended)
* 🖊 **Language:** JavaScript (ES2015+)
* 📦 **Tooling:** NPM

> 💡 Tip: Install the latest LTS from [https://nodejs.org/](https://nodejs.org/) and verify with `node -v` and `npm -v`.

---

## ⚡ Quick Start

```bash
# 1️⃣ Clone
git clone https://github.com/sourav-357/Node-ZTM.git
cd Node.js-ZTM

# 2️⃣ Install deps (if any are added later)
npm install

# 3️⃣ Run a demo file
node hello.js
```

✅ If everything is set up correctly, you should see a greeting printed in your terminal.

---

## 🗂 Project Structure

```
Node.js-ZTM/
├─ hello.js            # 👋 Basic Node example (console output)
├─ README.md           # 📘 You are here
└─ package.json        # 📦 NPM scripts & metadata (will evolve)
```

> 📌 The structure will expand with folders like `src/`, `examples/`, `notes/`, and `tests/` as the repo grows.

---

## 📜 Scripts

Add or use scripts via **NPM**. Example:

```json
{
  "name": "nodejs-ztm",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node hello.js",
    "dev": "node --watch hello.js",
    "lint": "echo 'Add ESLint later'"
  }
}
```

▶️ Run them with:

```bash
npm run start
npm run dev
```

---

## ✅ Learning Checklist

*  🟢 Setup Node & NPM
*  👋 Run a basic script (`hello.js`)
*  📦 CommonJS vs ESM modules (`require` vs `import`)
*  📂 File System (fs), Path, OS modules
*  🌐 HTTP basics – build a simple server
*  🚏 Express.js fundamentals
*  🔄 REST API (CRUD)
*  🛡 Middleware & error handling
*  🔑 Environment variables (`dotenv`)
*  🗄 MongoDB / PostgreSQL integration
   🔐 Authentication (JWT)


---

## 🧭 Roadmap

 1. 🟢 **Core Node** (modules, event loop, async patterns)
 2. 🌐 **HTTP & Express** (routing, middleware)
 3. 🗄 **Data layer** (MongoDB or Postgres)
 4. 🔐 **Auth & security** (JWT, hashing, validation)
 5. 🧪 **Testing** (unit/integration)
 6. 🐳 **Docker & CI** (image, pipeline)
 7. ☁️ **Deploy** (cloud host)

---

## 🤝 Contributing

💡 Ideas, fixes, or learning notes are welcome! Feel free to open an **issue** or a **pull request**.

---

## 🧑‍💻 Author

**Sourav Kumar** · 🎓 UCET Hazaribagh

* 🐙 GitHub: [@sourav-357](https://github.com/sourav-357)
* 💻 Interests: Java, DSA, Web, Cloud, App Dev

---

## 📄 License

📜 This project is licensed under the **MIT License** (add a `LICENSE` file if you plan to keep it MIT).

---

## 📚 Appendix: hello.js (super simple)

```js
// hello.js
console.log("Hello from Node.js-ZTM! 👋");
```

> ✏️ Try editing the message and re‑running `node hello.js` to confirm your setup.


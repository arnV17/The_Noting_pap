<h1 align="center">🧠 THE NOTING APP</h1>
<p align="center">
  Revolutionize your study game. Upload. Ask. Quiz. Note. <br />
  Powered by AI, built for students, crafted by devs.
</p>

<p align="center">
  <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="300" />
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Tech-MERN-blueviolet?style=flat-square"></a>
  <a href="#"><img src="https://img.shields.io/badge/AI-Powered by LLMs-green?style=flat-square"></a>
  <a href="#"><img src="https://img.shields.io/badge/RAG-Enabled-orange?style=flat-square"></a>
  <a href="#"><img src="https://img.shields.io/badge/Status-In_Progress-yellow?style=flat-square"></a>
</p>

---

## ⚡ What It Does

> “Not just notes. A complete academic intelligence system.”

- 📄 **Upload your syllabus** – PDF or DOCX? We got it.
- 💬 **Ask questions** – Like a personal tutor, but faster.
- 🧠 **Generate smart notes** – Structured, formatted, and accurate.
- 🎯 **Auto-create MCQs** – Test yourself with AI-crafted quizzes.
- 🧩 **Powered by RAG architecture** – Retrieval-Augmented Generation ensures relevant, contextual answers.

---

## 📸 UI Sneak Peek

> *"Because intelligence deserves a beautiful interface."*

> 🔗 Add screenshots or a Loom demo here.

---

## 🧠 The Magic Stack

| Layer         | Tech Stack                                  |
|--------------|----------------------------------------------|
| **Frontend**  | React.js, Framer Motion, Plain CSS / Tailwind-ready |
| **Backend**   | Node.js, Express.js                         |
| **Auth**      | Firebase (Google Sign-In)                   |
| **DB**        | MongoDB                                     |
| **AI + LLMs** | LangChain.js, OpenRouter-compatible APIs    |
| **File Parsing**| `pdf-parse`, `mammoth`                   |
| **Vector Store** | In-memory similarity search              |

---

## 🛠️ Architecture

```mermaid
graph TD
A[Upload Syllabus] --> B[Extract Text]
B --> C[Chunk & Embed]
C --> D[Store in Vector DB]
D --> E[RAG via LangChain.js]
E --> F[Outputs: Notes / Answers / MCQs]

# The Noting App

An AI-powered document summarization and note-taking platform. Upload your documents, get instant AI-generated summaries, and interact with a chatbot to ask questions about your content.

---

## Features

- **Modern UI/UX**: Responsive, beautiful design with smooth animations (shadcn, Tailwind CSS)
- **Document Upload**: Drag-and-drop PDF, DOCX, or TXT files
- **AI Summarization**: Instant, downloadable PDF summaries
- **AI Chatbot**: Ask questions about your uploaded documents
- **Real-time Feedback**: Live status and animated loaders
- **Mobile Responsive**: Works on all device sizes

---

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, shadcn UI, framer-motion, react-dropzone, react-hot-toast
- **Backend**: Node.js, Express, Multer, PDFKit, OpenAI/LLM integration
- **Other**: TypeScript (frontend), REST API, Markdown rendering

---

## Project Structure

```
THE NOTING APP/
├── frontend/           # React frontend (Vite, Tailwind, shadcn)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/    # Shared UI components (shadcn style)
│   │   │   ├── Chatbot.jsx
│   │   │   ├── DocumentUpload.jsx
│   │   │   └── ...
│   │   ├── lib/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
├── server/             # Node.js backend (Express)
│   ├── controllers/
│   ├── routes/
│   ├── uploads/        # Uploaded and generated files
│   ├── utils/
│   ├── server.js
│   └── ...
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/arnV17/The_Noting_pap
cd THE\ NOTING\ APP 
```

---

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../server
npm install
```

---

### 3. Run the App

#### Backend

```bash
cd server
node server.js
# or use nodemon for development
```

#### Frontend

```bash
cd frontend
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## API Endpoints

- `POST /api/upload` — Upload and process documents
- `POST /api/ask` — Chat with AI about your document
- `GET /uploads/:filename` — Download/view generated summaries

---

## Key Components

- **DocumentUpload**: Handles file upload, validation, and download
- **Chatbot**: Modal AI assistant with animated loader (`TextShimmer`)
- **TextShimmer**: Animated shimmer text loader (shadcn UI style)
- **PDF Generation**: Summaries are rendered as PDFs and available for download/view

---

## Styling & UI

- Uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [shadcn UI](https://ui.shadcn.com/) structure for reusable components (`/components/ui`)
- Animated loaders with [framer-motion](https://www.framer.com/motion/)
- Responsive and accessible

---

## Customization

- To add new UI components, place them in `frontend/src/components/ui/`
- Use the `TextShimmer` component for animated loading states
- Use [lucide-react](https://lucide.dev/) for icons

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## License

MIT

---

**For more details, see the `frontend/README.md` for frontend-specific instructions.**

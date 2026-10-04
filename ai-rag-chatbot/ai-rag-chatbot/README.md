# StudyBuddy AI — RAG Chatbot SaaS

Chat with your own notes. React + Node/Express + LangChain + FAISS + OpenAI + PostgreSQL.

Full specs: `docs/PRD_RAG_Chatbot.md` and `docs/SaaS_Workflow_RAG_Assistant.md`.

## Quick start

### 1. Prerequisites
Node 20+, PostgreSQL 15+ (or `docker compose up db redis`), OpenAI API key.

### 2. Server
```bash
cd server
cp .env.example .env        # fill values
npm i express cors helmet morgan dotenv compression cookie-parser \
  bcryptjs jsonwebtoken express-rate-limit zod express-validator pg \
  multer pdf-parse mammoth cheerio csv-parse \
  langchain @langchain/core @langchain/openai @langchain/community @langchain/textsplitters faiss-node openai \
  uuid p-limit winston nodemailer node-cron bullmq ioredis razorpay stripe
npm i -D nodemon jest supertest eslint prettier
npm run migrate             # creates all tables
npm run seed:plans
npm run seed:admin
npm run dev
```

### 3. Client
```bash
cd client
cp .env.example .env
npm i react react-dom react-router-dom axios zustand react-markdown remark-gfm rehype-highlight highlight.js \
  lucide-react react-hot-toast clsx recharts react-dropzone @tanstack/react-query date-fns
npm i -D vite @vitejs/plugin-react tailwindcss@3 postcss autoprefixer
npm run dev
```

Open http://localhost:5173

## Build order
Follow the 7 sprints in `docs/SaaS_Workflow_RAG_Assistant.md` (Section 17).

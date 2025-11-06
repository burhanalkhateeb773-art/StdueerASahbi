# Studeerasahbi — Study Organizer (starter)

This repository is a starter for "studeerasahbi" — a study organizer with:
- Library and folder organization
- PDF viewer (inline)
- File upload + text extraction scaffolding
- AI endpoints for generating flashcards & quizzes from documents (OpenAI)
- Pomodoro timer with tomato icon
- i18n (English, Dutch, Arabic)
- Prisma schema for Users/Folders/Documents
- Starter UI (Tailwind CSS)

Quick start (local)
1. Clone repo
2. Copy `.env.example` to `.env` and fill the values
3. Install dependencies:
   - npm install
4. Setup database:
   - For quick local development (SQLite): run `npx prisma migrate dev --name init` (Prisma will create a local SQLite DB).
   - For production (Postgres / Supabase): set DATABASE_URL in .env to your Postgres connection string then run the migrate command.
5. Run dev server:
   - npm run dev
6. Open http://localhost:3000

Important environment variables (.env.example)
- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_SECRET=(generate a random secret)
- DATABASE_URL=(sqlite: default or Postgres URL)
- OPENAI_API_KEY=(your OpenAI key)
- SUPABASE_URL and SUPABASE_ANON_KEY (optional if using Supabase storage)
- SMTP settings if you enable email sign-in (optional)

Notes
- The AI endpoints expect extracted text for documents to be stored in Document.text. The upload endpoint scaffolds file storage and extraction but you may need to implement extraction for scanned PDFs (OCR).
- The flashcard & quiz endpoints call the OpenAI Chat API and request strict JSON output. If the model returns non-JSON, the endpoints try to extract JSON blocks.
- Real-time collaboration (Yjs, TipTap), spaced repetition, and advanced RAG/embeddings are left as next milestones and can be added on top of this starter.

Deployment to Vercel
1. Connect your GitHub repo to Vercel.
2. In Vercel project settings add environment variables (same names as in `.env.example`).
3. Deploy — Vercel will build automatically.

If you want, I can:
- Add the remaining pages and wire upload + text extraction fully.
- Implement transcription (Whisper/AssemblyAI), real-time notes (Yjs), and share/permission logic.
- Set up a production Supabase project and connect storage and DB.
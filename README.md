# 🎁 Squiggle — Gift-Giving Chat App with AI Magic

**Squiggle** is a modern web application that transforms everyday chatting into something more meaningful — by making **gift giving the heart of your conversations**.

🧠 Powered by AI.  
💬 Built for connections.  
🎁 Designed to surprise.

---

## ✨ Features

### 💬 Real-Time Chat
- Sleek and responsive chat interface
- Fast and smooth experience with React + Vite + TailwindCSS

### 🎁 Gift Giving at Its Core
- Send gifts right within the chat
- Every gift is **100% unique** — it's publicly announced in real-time to preserve its meaning

### 🤝 Joint Ventures for Gifting
- Team up with friends or loved ones to co-purchase gifts
- See live progress and who's contributing

### 🤖 AI-Powered Recommendations
- AI suggests personalized gift ideas based on your chat history
- Remembers context, keywords, and patterns to improve suggestions over time

### 🗃️ Persistent Chat History
- Past conversations and gift interactions are saved
- A full timeline of your shared moments

---

## 🛠 Tech Stack

| Tech             | Purpose                     |
|------------------|-----------------------------|
| React + Vite     | Frontend framework           |
| TailwindCSS      | Styling                      |
| Flask (Python)   | Backend API                  |
| SQLite / PostgreSQL | Database (depending on setup) |

---

## 📦 Installation Guide

### 1. Clone the repository
```bash
git clone https://github.com/your-username/squiggle.git
cd squiggle
```

### 2. Setup the Backend
```bash
python -m venv venv
source venv/bin/activate     # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
cd src/be
python app.py
```

### 3. Setup the Frontend
```bash
cd ../..
npm install
npm run dev
```

### 🚀 Run the App
- Backend: `http://127.0.0.1:5000/`
- Frontend: `http://localhost:5173/`

## 🔧 Environment Variables
Backend (server/.env)
```ini
OPENAI_API_KEY=your-secret-key
SERP_API_KEY=your-secret-key
```

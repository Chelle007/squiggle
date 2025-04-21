# 🎁 Squiggle — Gift-Giving Chat App with AI Magic

**Squiggle** is a modern web application that transforms everyday chatting into something more meaningful — by making **gift giving the heart of your conversations**.

🧠 Powered by AI.  
💬 Built for connections.  
🎁 Designed to surprise.

---

## ✨ Features

### 🤖 AI-Powered Recommendations
- AI suggests personalized gift ideas based on your chat history
- Remembers context, keywords, and patterns to improve suggestions over time
- Utilises OpenAI's GPT-4o model

### 📝 Wishlist Management 
User can add wishes by:
- Type in the product name to fetch product details with SerpAPI
- Paste the e-commerce link (e.g. Amazon) and get the product details with webscraping
- Write their own wish

### ⚡️ Quick Join
- Just drop your budget and we’ll match you to a gift group
- Team up with friends or loved ones to co-purchase gifts
- See live progress and who's contributing

---

## 🛠 Tech Stack

| Tech             | Purpose                                                         |
|------------------|-----------------------------------------------------------------|
| React + Vite     | Frontend framework                                              |
| TailwindCSS      | Styling                                                         |
| Flask (Python)   | Backend API                                                     |
| Selenium         | Scraping dynamic product pages (e.g., Amazon)                   |
| SerpAPI          | Retrieving product and search data from Google, Amazon, etc.    |
| OpenAI API       | Generating wishlist recommendations from user prompts or links  |

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

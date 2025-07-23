# DocAnalyzer

AI-powered document analysis with topic modeling, sentiment analysis, and entity recognition.  
Unlock insights from your PDF, TXT, and DOCX documents — all processed locally for privacy.

---

## 🚀 Features

- **Multi-Format Support:** Upload and analyze PDF, TXT, and DOCX files.
- **AI-Powered Analysis:** Advanced topic modeling (LDA), sentiment analysis, and entity recognition.
- **Privacy First:** All processing happens locally; your documents never leave your system.
- **Export Results:** Download analysis as CSV files and word cloud images.
- **Real-time Processing:** Fast document processing with live progress updates.
- **Open Source:** Built with transparency and open for community contributions.

---

## 🖥️ Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [FastAPI](https://fastapi.tiangolo.com/) (Python backend)
- [NLTK](https://www.nltk.org/), [Gensim](https://radimrehurek.com/gensim/), [spaCy](https://spacy.io/), [TextBlob](https://textblob.readthedocs.io/), [WordCloud](https://github.com/amueller/word_cloud)

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) & npm
- [Python 3.8+](https://www.python.org/)

### 1. Clone the Repository

```sh
git clone https://github.com/Devansh-Kumar-Saini/DocAnalyzer.git
cd DocAnalyzer
```

### 2. Install Frontend Dependencies

```sh
npm install
```

### 3. Start the Frontend

```sh
npm run dev
```

### 4. Set Up the Python Backend

```sh
# (Optional) Create a virtual environment
conda create -p venv python==3.11.0 -y
conda activate venv/

# Install required libraries and dependencies
pip install -r requirements.txt

# Starting the Backend
uvicorn app:app --reload
```

The backend will start on `http://localhost:8000`.

---

## 📝 Usage

1. **Upload Documents:** Drag & drop or select PDF, TXT, or DOCX files.
2. **Analyze:** Click "Analyze" to start AI processing.
3. **Explore Results:** View topics, sentiment, and download reports.

---
## ⚡ Quick Test (No UI)

If you only want to test the code functionality without using the UI, simply run the [`Code.ipynb`](./Code.ipynb) Jupyter notebook.  
This notebook demonstrates topic modeling and analysis on the 20 Newsgroups dataset using Python.

---

## 📂 Project Structure

```
├── app.py                  # FastAPI backend for document analysis
├── src/                    # Frontend source code (React + TypeScript)
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   ├── pages/              # Main pages (Home, About, Demo, etc.)
│   └── App.tsx             # App entry point
├── public/                 # Static assets (images, favicon, etc.)
├── requirements.txt        # Python dependencies
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation
```

---

## 👤 Author

- **Devansh Kumar**  
  [LinkedIn](https://www.linkedin.com/in/devansh-kumar-b2b972261/) | [GitHub](https://github.com/Devansh-Kumar-Saini)  
  Final Year B.Tech student at Amity University Punjab, specializing in machine learning.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

---

## 🌐 Live Demo

Check out the live project: 
[Lovable Project](https://lovable.dev/projects/4a3a9950-b7e4-448e-869a-5bc4aa44c09c)

Note: This is a preview of the web UI only. The backend functionality is not active here. For the full experience, please run the project locally as described above.


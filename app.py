import os
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
import pandas as pd
import nltk
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
# import gensim #
# from gensim import corpora #
from gensim.corpora import Dictionary
from gensim.models import LdaModel
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import io
import base64
from fastapi.middleware.cors import CORSMiddleware
from textblob import TextBlob
import spacy

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure NLTK data
for data in ['punkt', 'wordnet', 'stopwords']:
    try:
        nltk.data.find(f'tokenizers/{data}' if data == 'punkt' else f'corpora/{data}')
    except LookupError:
        nltk.download(data)

lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))
nlp = spacy.load("en_core_web_sm")

def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    tokens = [lemmatizer.lemmatize(token) for token in tokens if token.isalpha() and token not in stop_words]
    return tokens

def generate_wordcloud(topic_words):
    word_freq = {word: freq for word, freq in topic_words}
    wordcloud = WordCloud(width=400, height=200, background_color='white').generate_from_frequencies(word_freq)
    buf = io.BytesIO()
    plt.figure(figsize=(4,2))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.tight_layout()
    plt.savefig(buf, format='png')
    plt.close()
    buf.seek(0)
    img_bytes = buf.read()
    img_b64 = base64.b64encode(img_bytes).decode('utf-8')
    return img_b64

def analyze_sentiment(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    if polarity > 0.1:
        label = "Positive"
    elif polarity < -0.1:
        label = "Negative"
    else:
        label = "Neutral"
    return {"score": polarity, "label": label}

def extract_entities(text):
    doc = nlp(text)
    return [ent.text for ent in doc.ents]

@app.post("/api/analyze")
async def analyze(files: list[UploadFile] = File(...)):
    texts = []
    for file in files:
        content = await file.read()
        print("Received file:", file.filename, "Size:", len(content))
        texts.append(content.decode('utf-8', errors='ignore'))
    df = pd.DataFrame({'text': texts})
    df['tokens'] = df['text'].apply(preprocess_text)
    dictionary = Dictionary(df['tokens'])
    dictionary.filter_extremes(no_below=1, no_above=1.0)
    corpus = [dictionary.doc2bow(text) for text in df['tokens']]
    if len(corpus) == 0 or len(dictionary) == 0:
        return JSONResponse({"error": "Not enough data for topic modeling."}, status_code=400)
    lda_model = LdaModel(
        corpus=corpus,
        id2word=dictionary,
        num_topics=3,
        passes=5,
        alpha='auto',
        eta='auto',
        random_state=42
    )
    topics = lda_model.show_topics(num_topics=3, num_words=10, formatted=False)
    topic_results = []
    for topic_id, topic_words in topics:
        topic_results.append({
            "topic_id": topic_id,
            "words": [word for word, _ in topic_words],
            "wordcloud": generate_wordcloud(topic_words)
        })
    sentiment_results = []
    entity_results = []
    for i, text in enumerate(texts):
        sentiment = analyze_sentiment(text)
        entities = extract_entities(text)
        sentiment_results.append(sentiment)
        entity_results.append(entities)
    return {"topics": topic_results, "sentiments": sentiment_results, "entities": entity_results}
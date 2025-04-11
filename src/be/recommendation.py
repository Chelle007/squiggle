from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from PIL import Image, ImageOps
import numpy as np
import tensorflow as tf
import openai
from be.recommendation import GoogleSearch
from dotenv import load_dotenv
import json

app = Flask(__name__)
CORS(app)

load_dotenv()

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
SERP_API_KEY = os.getenv('SERP_API_KEY')

def shorten_text(text, min, max):
    system_msg = "You are a helpful assistant that is good at shortening text."
    prompt = f"Shorten this text into {min} to {max} (inclusive) words: {text}"

    response = openai.ChatCompletion.create(
        model = "gpt-4o",
        api_key = OPENAI_API_KEY,
        messages = [
            {"role": "system", "content": system_msg},
            {"role": "user", "content": prompt}
        ]
    )
    
    return response['choices'][0]['message']['content'].strip()

def google_shopping_search(query, num_results = 5):
    params = {
        "api_key": SERP_API_KEY,
        "engine": "google_shopping",
        "q": query,
        "hl": "en",
        "gl": "sg",
        "num": num_results
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    products = []

    for item in results.get("shopping_results", []):
        product = {
            "name": shorten_text(item.get("title"), 5, 8),
            "product_url": item.get("link"),
            "shop_name": shorten_text(item.get("source"), 1, 3),
            "img_url": item.get("thumbnail"),
            "price": item.get("price")
        }
        products.append(product)

    return products
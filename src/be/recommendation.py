import os
import numpy as np
import openai
from serpapi import GoogleSearch
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
SERP_API_KEY = os.getenv('SERP_API_KEY')
gpt_model = "gpt-4o"

def preference_analysis_with_keyword(chat_histories, user_data, keyword):
    system_msg = "You are a helpful assistant that is good at recommending gift for a person. Based on user's chat history, preference, and the keyword user entered, you must generate a very detailed and effective keyword to be used in serpapi google shopping search api."
    prompt = f"Chat history: {chat_histories}\nUser preference: {user_data}\nKeyword: {keyword}"

    response = openai.ChatCompletion.create(
        model = gpt_model,
        api_key = OPENAI_API_KEY,
        messages = [
            {"role": "system", "content": system_msg},
            {"role": "user", "content": prompt}
        ]
    )
    
    return response['choices'][0]['message']['content'].strip()

def preference_analysis_without_keyword(chat_histories, user_data):
    system_msg = "You are a helpful assistant that is good at recommending gifts for a person. Based on user's chat history and preference, you must generate 5 very detailed and effective keywords to be used in serpapi google shopping search api (separated by comma)."
    prompt = f"Chat history: {chat_histories}\nUser preference: {user_data}"

    response = openai.ChatCompletion.create(
        model = gpt_model,
        api_key = OPENAI_API_KEY,
        messages = [
            {"role": "system", "content": system_msg},
            {"role": "user", "content": prompt}
        ]
    )
    
    raw_output = response['choices'][0]['message']['content'].strip()
    keyword_list = [kw.strip() for kw in raw_output.split(",")]
    return keyword_list

def shorten_text(text, min, max):
    system_msg = "You are a helpful assistant that is good at shortening text."
    prompt = f"Shorten this text into {min} to {max} (inclusive) words: {text}"

    response = openai.ChatCompletion.create(
        model = gpt_model,
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
            "img_url": item.get("thumbnail"),
            "price": item.get("price")
        }
        products.append(product)

    return products
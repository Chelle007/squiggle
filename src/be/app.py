from flask import Flask, request, jsonify
from flask_cors import CORS
from recommendation import sentiment_analysis_with_keyword, sentiment_analysis_without_keyword, google_shopping_search
from webscrape import get_amazon_product_details
from database import get_chat_history, get_user_data, get_wishlist, add_wishlist

app = Flask(__name__)
CORS(app)

@app.route('/get-user-wishlist', methods=['GET'])
def get_user_wishlist(user):
    return get_wishlist(user)

@app.route('/add-user-wishlist', methods=['POST'])
def add_user_wishlist(user, name, img_url, shop_url, price, notes, added_by):
    return add_wishlist(user, name, img_url, shop_url, price, notes, added_by)

@app.route('/generate-recommendation-with-keyword', methods=['POST'])
def generate_recommendation_with_keyword(user, keyword):
    search_keyword = sentiment_analysis_with_keyword(get_chat_history(user), get_user_data(user), keyword)
    serpapi_list = google_shopping_search(search_keyword, 5)

    return jsonify(serpapi_list)

@app.route('/generate-recommendation-without-keyword', methods=['POST'])
def generate_recommendation_without_keyword(user):
    search_keyword_list = sentiment_analysis_without_keyword(get_chat_history(user), get_user_data(user))
    serpapi_list = []

    for search_keyword in search_keyword_list:
        serpapi_list.append(google_shopping_search(search_keyword, 1))

    return jsonify(serpapi_list)

@app.route('/get_amazon_product_details', methods=['GET'])
def get_amazon_product_details(shop_link):
    return jsonify(get_amazon_product_details(shop_link))

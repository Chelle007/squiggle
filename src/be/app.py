from flask import Flask, request, jsonify
from flask_cors import CORS
from recommendation import preference_analysis_with_keyword, preference_analysis_without_keyword, google_shopping_search
from webscrape import get_amazon_product_details as scrape_amazon_product_details
from database import get_chat_history, get_user_data, get_wishlist, add_wishlist, quick_join

app = Flask(__name__)
CORS(app)

@app.route('/get-user-wishlist', methods=['GET'])
def get_user_wishlist():
    user = request.args.get("user")
    return jsonify(get_wishlist(user))


@app.route('/add-user-wishlist', methods=['POST'])
def add_user_wishlist():
    data = request.json
    user = data.get("user")
    name = data.get("name")
    img_url = data.get("img_url")
    shop_url = data.get("shop_url")
    price = data.get("price")
    notes = data.get("notes")
    added_by = data.get("added_by")

    add_wishlist(user, name, img_url, shop_url, price, notes, added_by)
    return jsonify({"message": "Wishlist item added"})


@app.route('/generate-recommendation-with-keyword', methods=['POST'])
def generate_recommendation_with_keyword():
    data = request.json
    user = data.get("user")
    keyword = data.get("keyword")

    search_keyword = preference_analysis_with_keyword(get_chat_history(user), get_user_data(user), keyword)
    serpapi_list = google_shopping_search(search_keyword, 6)

    return jsonify(serpapi_list)


@app.route('/generate-recommendation-without-keyword', methods=['POST'])
def generate_recommendation_without_keyword():
    data = request.json
    user = data.get("user")

    search_keyword_list = preference_analysis_without_keyword(get_chat_history(user), get_user_data(user))
    serpapi_list = []

    for search_keyword in search_keyword_list:
        serpapi_list.append(google_shopping_search(search_keyword, 1)[0])

    return jsonify(serpapi_list)


@app.route('/get-amazon-product-details', methods=['POST'])
def get_amazon_product_details_route():
    data = request.json
    shop_link = data.get("shop_link")
    return jsonify(scrape_amazon_product_details(shop_link))


@app.route('/quick-join', methods=['POST'])
def user_quick_join():
    data = request.get_json()
    user = data.get("user")
    budget = float(data.get("budget"))
    item = quick_join(user, budget)
    return jsonify(item if item else {"message": "No item found within budget"})


if __name__ == '__main__':
    app.run(debug=True)

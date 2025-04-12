# DUMMY DATA

wishlist = {
    "user_a": [
        {
            "name": "Supima Cotton Crew Neck T-Shirt",
            "img_url": "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/img/product/item_05_kv.jpg?240112",
            "shop_url": "https://www.uniqlo.com/sg/en/products/E455365-000?colorCode=COL65&sizeCode=SMA005&istCompanyId=4d9c5d8f-302d-4f66-8407-acd79c161268&istFeedId=a288f40d-0d89-4fe6-ab91-ee14c78b59b2&istItemId=qwmqmlppi&istBid=t",
            "price": "S$19.90",
            "notes": "size L",
            "added_by": "user_a",
            "joined_users": []
        },
    ],
    "user_b": [
        {
            "name": "Jellycat Blossom Blush Bunny 'Cherry'",
            "img_url": "https://cdn11.bigcommerce.com/s-23s5gfmhr7/images/stencil/1280x1280/products/1692/49226/BASHFUL_BLOSSOMS_BLUSH_CHERRY__56734.1734429598.jpg?c=1",
            "shop_url": "https://shopee.sg/product/342358707/28224693907?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkY0N5akVpcE5OamJEdjRRTHBOTzhmbXVHczAwMzlGL0dNY09HQWRmNDU2a09vVmMzemt1MXNMVjArMWk2RzBTaTNXMjltMFN1VTlvbzdyTjZQMFlvTWxxRHZDMUdjMEM5L1dFaGczQTc1dTM&gad_source=1&gbraid=0AAAAADPpRQRKQ-ve0Q1RqdIOGucjnHk8v&gclid=CjwKCAjw--K_BhB5EiwAuwYoysr4xaLhroJ0dqSQ2RPRRMcLsbZGUmW-21fzscW_4AyDGHFD4m4VvxoCT64QAvD_BwE",
            "price": "S$57.00",
            "notes": "small",
            "added_by": "user_b",
            "joined_users": ["user_c", "user_d"]
        },
        {
            "name": "Fictional Books",
            "img_url": "",
            "shop_url": "",
            "price": "",
            "notes": "I love scifi genre.",
            "added_by": "user_b",
            "joined_users": []
        },
    ]
}

chat_history = {
    "user_a": [[{
            "timestamp": "10/04/2025, 11:33:22 AM",
            "message": "Sunscreen, sunglasses, hat, powerbank, swimwear, raincoat"
        },
        {
            "timestamp": "10/04/2025, 11:33:24 AM",
            "message": "Don't forget to bring beach towel too."
        },
        {
            "timestamp": "10/04/2025, 11:33:26 AM",
            "message": "What pattern do you like?"
        }]
    ],
    "user_b": [[{
            "timestamp": "10/04/2025, 11:33:21 AM",
            "message": "Hii I am going to travel to Bali next week, do you have any ideas regarding things that I should bring?"
        },
        {
            "timestamp": "10/04/2025, 11:33:23 AM",
            "message": "Hmm noted, I don't have sunglasses and hat, maybe I will search for it at Bali."
        },
        {
            "timestamp": "10/04/2025, 11:33:25 AM",
            "message": "Ohhh yeah beach towel! Will buy it later once I reach Bali."
        },
        {
            "timestamp": "10/04/2025, 11:33:27 AM",
            "message": "Huh pattern? I like flower patterns."
        }]
    ],
}

user_data = {
    "user_a": {
        "gender": "male",
        "age": "24",
        "favorite_color": "Red, Green, Blue",
        "favorite_animal": "Otter, Elephant, Zebra",
        "Hobbies": "Hiking, Swimming, Reading",
    },
    "user_b": {
        "gender": "female",
        "age": "19",
        "favorite_color": "blue",
    },
}


# FUNCTIONS

def get_chat_history(user):
    return chat_history.get(user)

def get_user_data(user):
    return user_data.get(user)

def get_wishlist(user):
    return wishlist.get(user)

def add_wishlist(user, name, img_url, shop_url, price, notes, added_by):
    item = {
        "name": name,
        "img_url": img_url,
        "shop_url": shop_url,
        "price": price,
        "notes": notes,
        "added_by": added_by,
        "joined_users": []
    }
    wishlist.get(user, []).append(item)

def quick_join(user, budget):
    items = wishlist.get("user_b", [])
    
    # Filter out items without a valid price, then sort by price descending
    valid_items = []
    for item in items:
        price_str = item.get("price", "")
        try:
            price = float(price_str[1:])
            item["parsed_price"] = price
            valid_items.append(item)
        except (ValueError, TypeError):
            continue
    sorted_items = sorted(valid_items, key=lambda x: x["parsed_price"], reverse=True)

    # Find the most expensive item that fits the budget per person
    for item in sorted_items:
        total_people = len(item["joined_users"]) + 1
        if item["parsed_price"] / total_people <= budget:
            if user not in item["joined_users"]:
                item["joined_users"].append(user)
            del item["parsed_price"]
            return item

    return None


print(quick_join("user_b", 100))
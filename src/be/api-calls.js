export async function getWishlist(user) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/get-user-wishlist?user=${encodeURIComponent(user)}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        return [];
    }
}

function addWishlist(user, name, imgUrl, shopUrl, price, notes, addedBy) {
    fetch('http://127.0.0.1:5000/add-user-wishlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user,
            name,
            imgUrl,
            shopUrl,
            price,
            notes,
            addedBy
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Wishlist added:", data);
        })
        .catch(error => {
            console.error("Error adding wishlist:", error);
        });
}

function getProductDetailsFromShopUrl(shopUrl) {
    fetch(`http://127.0.0.1:5000/get-amazon-product-details?shopUrl=${encodeURIComponent(shopUrl)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Product details: ", data);
        })
        .catch(error => {
            console.error("Error fetching product details:", error);
        });
}

function generateRecommendations(user) {
    const userKeyword = ""; // TODO: get from DOM
    let fetchUrl = "";
    let requestBody = { user };

    if (userKeyword) {
        fetchUrl = "http://127.0.0.1:5000/generate-recommendation-with-keyword";
        requestBody.keyword = userKeyword;
    } else {
        fetchUrl = "http://127.0.0.1:5000/generate-recommendation-without-keyword";
    }

    fetch(fetchUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Recommendations:", data);
        })
        .catch(error => {
            console.error("Error fetching recommendations:", error);
        });
}

function quickJoin(user, budget) {
    fetch("http://127.0.0.1:5000/quick-join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: user,
            budget: budget
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Quick join result:", data);
        })
        .catch(error => {
            console.error("Error in quick join:", error);
        });
}

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

export async function addWishlist(user, name, img_url, shop_url, price, notes, added_by) {
    fetch('http://127.0.0.1:5000/add-user-wishlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user,
            name,
            img_url,
            shop_url,
            price,
            notes,
            added_by
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

export async function generateRecommendation(user, searchPrompt) {
    let fetchUrl = "";
    let requestBody = { user };

    if (searchPrompt.trim() !== '' && searchPrompt !== null) {
        fetchUrl = "http://127.0.0.1:5000/generate-recommendation-with-keyword";
        requestBody.keyword = searchPrompt;
    } else {
        fetchUrl = "http://127.0.0.1:5000/generate-recommendation-without-keyword";
    }

    try {
        const response = await fetch(fetchUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Recommendations:", data);
        return data;
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        return null;
    }
}

export async function getProductDetailsFromShopUrl(shopUrl) {
    try {
        const response = await fetch('http://127.0.0.1:5000/get-amazon-product-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ shop_link: shopUrl })
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Product details: ", data);
        return data;
    } catch (error) {
        console.error("Error fetching product details:", error);
        throw error;
    }
}

export function quickJoin(user, budget) {
    return fetch("http://127.0.0.1:5000/quick-join", {
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
            return data; // Ensure you return the data here
        })
        .catch(error => {
            console.error("Error in quick join:", error);
            throw error; // Re-throw error to be handled in the calling function
        });
}
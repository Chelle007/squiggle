from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

def get_amazon_product_details(url):
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=chrome_options
    )

    driver.get(url)

    try:
        wait = WebDriverWait(driver, 15)

        # Product title
        title_element = wait.until(EC.visibility_of_element_located((By.ID, "productTitle")))
        product_title = title_element.text.strip()

        # Product image
        image = wait.until(EC.presence_of_element_located((By.ID, "landingImage")))
        img_src = image.get_attribute("src")

        # Price image
        price_whole = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "a-price-whole")))
        price_fraction = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "a-price-fraction")))
        price = price_whole.text.strip() + "." + price_fraction.text.strip()

        print("✅ Title:", product_title)
        print("🖼️ Image:", img_src)
        print("💰 Whole:", price_whole.text.strip())
        print("💰 Fraction:", price_fraction.text.strip())
        print("💰 Price:", price)

    except Exception as e:
        print("❌ Error extracting product details:", e)

    driver.quit()
    return {
        "title": product_title,
        "image": img_src,
        "price": price
    }

# Run it!
get_amazon_product_details("https://www.amazon.sg/UGREEN-Wireless-Ergonomic-Cordless-Chromebook/dp/B09SFPJS27")
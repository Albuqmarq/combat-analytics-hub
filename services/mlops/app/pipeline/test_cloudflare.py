import requests
from bs4 import BeautifulSoup
import logging
import time
import random

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def test_headers():
    url = "http://ufcstats.com/statistics/events/completed"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1"
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        logger.info(f"Status: {response.status_code}")
        if "Checking your browser" in response.text:
            logger.warning("Ainda barrado pelo Cloudflare.")
        else:
            logger.info("Sucesso! O Cloudflare foi bypassed com headers atualizados.")
            logger.info(response.text[:500])
    except Exception as e:
        logger.error(str(e))

if __name__ == "__main__":
    test_headers()

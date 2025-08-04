#!/bin/bash

# SCRIPT CHECK INDEXING STATUS
echo "🔍 Checking Google Indexing Status for sedotwcmandala.com..."
echo "============================================================"

DOMAIN="sedotwcmandala.com"

# URLs to check
urls=(
    "https://www.sedotwcmandala.com"
    "https://www.sedotwcmandala.com/area/jakarta-selatan"
    "https://www.sedotwcmandala.com/area/jakarta-barat"
    "https://www.sedotwcmandala.com/area/jakarta-timur"
    "https://www.sedotwcmandala.com/area/jakarta-utara"
    "https://www.sedotwcmandala.com/area/jakarta-pusat"
    "https://www.sedotwcmandala.com/tentang-kami"
    "https://www.sedotwcmandala.com/kontak"
    "https://www.sedotwcmandala.com/gallery"
)

echo "📊 Checking indexing status for all pages..."
echo ""

for url in "${urls[@]}"; do
    echo "🔗 Checking: $url"
    
    # Check if indexed by searching for exact URL
    search_url="https://www.google.com/search?q=site:${url#https://}"
    echo "   Google Search: $search_url"
    echo ""
done

echo "🎯 Manual Actions Required:"
echo "1. Open Google Search Console: https://search.google.com/search-console/"
echo "2. Add property: https://www.sedotwcmandala.com"
echo "3. Submit sitemap: sitemap.xml"
echo "4. Request indexing for each URL above"
echo ""

echo "📈 Quick check commands:"
echo "site:sedotwcmandala.com"
echo "\"sedot wc jakarta\" site:sedotwcmandala.com"
echo ""

echo "✅ Script completed! Check the URLs manually in Google."

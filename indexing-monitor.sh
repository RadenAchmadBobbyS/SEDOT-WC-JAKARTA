#!/bin/bash

# 📊 Google Search Console Monitoring Script
# Untuk memantau status indexing website sedotwcmandala.com

echo "🔍 MONITORING INDEXING STATUS - $(date)"
echo "=============================================="

# Array of URLs to check
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

echo "📋 1. CHECKING WEBSITE ACCESSIBILITY"
echo "-----------------------------------"
for url in "${urls[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$status" = "200" ]; then
        echo "✅ $url - OK ($status)"
    else
        echo "❌ $url - ERROR ($status)"
    fi
done

echo ""
echo "🗺️ 2. SITEMAP STATUS CHECK"
echo "-------------------------"
sitemap_status=$(curl -s -o /dev/null -w "%{http_code}" "https://www.sedotwcmandala.com/sitemap.xml")
if [ "$sitemap_status" = "200" ]; then
    echo "✅ Sitemap accessible: https://www.sedotwcmandala.com/sitemap.xml"
    echo "📊 Counting URLs in sitemap..."
    url_count=$(curl -s "https://www.sedotwcmandala.com/sitemap.xml" | grep -c "<url>")
    echo "📈 Total URLs in sitemap: $url_count"
else
    echo "❌ Sitemap ERROR ($sitemap_status)"
fi

echo ""
echo "🔍 3. GOOGLE INDEXING CHECK"
echo "--------------------------"
echo "Manual checks required. Open these URLs in browser:"
echo ""

for url in "${urls[@]}"; do
    # Create Google search URL for site: query
    search_url="https://www.google.com/search?q=site:$(echo $url | sed 's|https://||')"
    echo "🔗 Check indexing: $url"
    echo "   Google Search: $search_url"
    echo ""
done

echo "📊 4. KEYWORD RANKING CHECK"
echo "---------------------------"
keywords=(
    "sedot wc jakarta"
    "jasa sedot wc jakarta"
    "sedot wc jakarta murah"
    "sedot wc 24 jam jakarta"
    "sedot wc jakarta selatan"
    "sedot wc jakarta barat"
    "sedot wc jakarta timur"
    "sedot wc jakarta utara"
    "sedot wc jakarta pusat"
)

echo "Manual keyword checks (search in incognito mode):"
for keyword in "${keywords[@]}"; do
    search_url="https://www.google.com/search?q=$(echo $keyword | sed 's/ /+/g')"
    echo "🎯 '$keyword': $search_url"
done

echo ""
echo "📈 5. GOOGLE SEARCH CONSOLE TASKS"
echo "--------------------------------"
echo "Login to: https://search.google.com/search-console/"
echo ""
echo "Daily tasks:"
echo "1. Check Coverage report for indexing status"
echo "2. Review Performance for clicks/impressions"
echo "3. Monitor URL Inspection for individual pages"
echo "4. Check for crawl errors in Coverage"
echo "5. Review sitemap submission status"

echo ""
echo "🎯 6. INDEXING ACCELERATION TIPS"
echo "-------------------------------"
echo "1. Submit URLs manually via URL Inspection tool"
echo "2. Create internal links between pages"
echo "3. Share on social media for faster discovery"
echo "4. Update content regularly to trigger re-crawling"
echo "5. Build external backlinks from relevant sites"

echo ""
echo "📊 7. NEXT STEPS CHECKLIST"
echo "-------------------------"
echo "□ Setup Google Search Console (if not done)"
echo "□ Submit sitemap.xml"
echo "□ Request indexing for all URLs above"
echo "□ Create Google My Business profile"
echo "□ Build local citations"
echo "□ Monitor daily for first 2 weeks"

echo ""
echo "⏰ TIMELINE EXPECTATIONS:"
echo "- Day 1-2: Setup GSC & submit sitemap"
echo "- Day 3-7: Google starts crawling"
echo "- Week 2-3: Pages start appearing in search"
echo "- Month 1-2: Ranking improvements"

echo ""
echo "=============================================="
echo "🎉 Monitoring completed at $(date)"
echo "Next check recommended: $(date -d '+1 day')"
echo "=============================================="

#!/bin/bash

# SEO MONITORING SCRIPT LENGKAP
echo "📊 SEO MONITORING DASHBOARD - Sedot WC Jakarta"
echo "=============================================="
echo "Date: $(date)"
echo ""

DOMAIN="sedotwcmandala.com"
FULL_URL="https://www.sedotwcmandala.com"

# 1. CHECK WEBSITE STATUS
echo "🌐 1. WEBSITE STATUS CHECK"
echo "------------------------"
response=$(curl -I -s $FULL_URL | head -n 1)
echo "Website Response: $response"

if [[ $response == *"200 OK"* ]]; then
    echo "✅ Website is LIVE and accessible"
else
    echo "❌ Website issue detected!"
fi
echo ""

# 2. CHECK ROBOTS.TXT
echo "🤖 2. ROBOTS.TXT CHECK"
echo "--------------------"
robots_status=$(curl -I -s "$FULL_URL/robots.txt" | head -n 1)
echo "Robots.txt Status: $robots_status"

if [[ $robots_status == *"200 OK"* ]]; then
    echo "✅ Robots.txt accessible"
    echo "Content preview:"
    curl -s "$FULL_URL/robots.txt" | head -5
else
    echo "❌ Robots.txt issue!"
fi
echo ""

# 3. CHECK SITEMAP.XML
echo "🗺️ 3. SITEMAP.XML CHECK"
echo "----------------------"
sitemap_status=$(curl -I -s "$FULL_URL/sitemap.xml" | head -n 1)
echo "Sitemap Status: $sitemap_status"

if [[ $sitemap_status == *"200 OK"* ]]; then
    echo "✅ Sitemap accessible"
    echo "Checking number of URLs..."
    url_count=$(curl -s "$FULL_URL/sitemap.xml" | grep -c "<url>")
    echo "URLs in sitemap: $url_count"
else
    echo "❌ Sitemap issue!"
fi
echo ""

# 4. CHECK GOOGLE INDEXING
echo "🔍 4. GOOGLE INDEXING CHECK"
echo "--------------------------"
echo "Manual check required:"
echo "Search: site:$DOMAIN"
echo "URL: https://www.google.com/search?q=site:$DOMAIN"
echo ""

# 5. CHECK TARGET KEYWORDS IN CONTENT
echo "🎯 5. KEYWORD DENSITY CHECK"
echo "-------------------------"
echo "Checking homepage content for target keywords..."

# Download homepage content
homepage_content=$(curl -s $FULL_URL)

# Count keywords
sedot_wc_count=$(echo "$homepage_content" | grep -o -i "sedot wc" | wc -l)
jakarta_count=$(echo "$homepage_content" | grep -o -i "jakarta" | wc -l)
jasa_count=$(echo "$homepage_content" | grep -o -i "jasa" | wc -l)

echo "📈 Keyword Analysis:"
echo "   'sedot wc': $sedot_wc_count occurrences"
echo "   'jakarta': $jakarta_count occurrences"
echo "   'jasa': $jasa_count occurrences"

if [ $sedot_wc_count -gt 50 ] && [ $jakarta_count -gt 100 ]; then
    echo "✅ Keyword density looks good!"
else
    echo "⚠️ Consider optimizing keyword density"
fi
echo ""

# 6. CHECK SSL CERTIFICATE
echo "🔒 6. SSL CERTIFICATE CHECK"
echo "-------------------------"
ssl_info=$(curl -I -s $FULL_URL | grep -i "strict-transport-security")
if [[ ! -z "$ssl_info" ]]; then
    echo "✅ SSL Certificate active (HSTS enabled)"
    echo "$ssl_info"
else
    echo "⚠️ Check SSL configuration"
fi
echo ""

# 7. CHECK MOBILE RESPONSIVENESS
echo "📱 7. MOBILE RESPONSIVENESS CHECK"
echo "--------------------------------"
viewport_meta=$(curl -s $FULL_URL | grep -i "viewport")
if [[ ! -z "$viewport_meta" ]]; then
    echo "✅ Viewport meta tag found"
    echo "$viewport_meta"
else
    echo "❌ Mobile viewport meta tag missing!"
fi
echo ""

# 8. CHECK STRUCTURED DATA
echo "📋 8. STRUCTURED DATA CHECK"
echo "-------------------------"
json_ld=$(curl -s $FULL_URL | grep -c "application/ld+json")
if [ $json_ld -gt 0 ]; then
    echo "✅ JSON-LD structured data found ($json_ld instances)"
else
    echo "❌ No structured data detected!"
fi
echo ""

# 9. QUICK COMPETITOR CHECK
echo "🏆 9. QUICK COMPETITOR ANALYSIS"
echo "------------------------------"
echo "Manual competitive research needed:"
echo "Search 'sedot wc jakarta' and analyze top 3 competitors"
echo "Google Search: https://www.google.com/search?q=sedot+wc+jakarta"
echo ""

# 10. ACTION ITEMS SUMMARY
echo "📝 10. PRIORITY ACTION ITEMS"
echo "---------------------------"
echo "HIGH PRIORITY:"
echo "1. 🎯 Setup Google Search Console"
echo "   Link: https://search.google.com/search-console/"
echo ""
echo "2. 🏢 Create Google My Business"
echo "   Link: https://business.google.com/"
echo ""
echo "3. 📞 Request indexing for main pages"
echo "   Use URL Inspection in Search Console"
echo ""

echo "MEDIUM PRIORITY:"
echo "4. 📁 Submit to business directories"
echo "5. 📱 Create social media business profiles"  
echo "6. 🤝 Start local partnership outreach"
echo ""

echo "LOW PRIORITY (AFTER INDEXING):"
echo "7. 📝 Content marketing & guest posting"
echo "8. 📊 Advanced backlink building"
echo "9. 💰 Consider paid advertising"
echo ""

# 11. MONITORING SCHEDULE
echo "⏰ 11. MONITORING SCHEDULE"
echo "------------------------"
echo "DAILY (First 2 weeks):"
echo "- Check Google Search Console for indexing"
echo "- Monitor GMB verification status"
echo "- Test manual Google searches"
echo ""

echo "WEEKLY:"
echo "- Run this monitoring script"
echo "- Check backlink progress"
echo "- Review GMB insights"
echo "- Analyze competitor activities"
echo ""

echo "MONTHLY:"
echo "- Full SEO audit"
echo "- Ranking position tracking"
echo "- Content performance review"
echo "- Strategy adjustment"
echo ""

echo "=============================================="
echo "📊 SEO Monitoring Report Completed!"
echo "Next check recommended: $(date -d '+1 week')"
echo "=============================================="

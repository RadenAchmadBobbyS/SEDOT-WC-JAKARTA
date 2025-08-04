#!/bin/bash

# SEO Check Script untuk Sedot WC Jakarta
echo "🔍 Checking SEO Status for sedotwcmandala.com..."
echo "=================================================="

DOMAIN="sedotwcmandala.com"

echo "1. Checking if website is live..."
curl -I https://$DOMAIN 2>/dev/null | head -n 1

echo -e "\n2. Checking robots.txt..."
curl -s https://$DOMAIN/robots.txt | head -10

echo -e "\n3. Checking sitemap.xml..."
curl -I https://$DOMAIN/sitemap.xml 2>/dev/null | head -n 1

echo -e "\n4. Checking Google indexing status..."
echo "Search: site:$DOMAIN"
echo "Visit: https://www.google.com/search?q=site:$DOMAIN"

echo -e "\n5. Checking page speed..."
echo "Test at: https://pagespeed.web.dev/analysis?url=https://$DOMAIN"

echo -e "\n6. Checking mobile friendliness..."
echo "Test at: https://search.google.com/test/mobile-friendly?url=https://$DOMAIN"

echo -e "\n7. Next steps if not indexed yet:"
echo "   - Verify Google Search Console setup"
echo "   - Submit sitemap manually"
echo "   - Request indexing for main pages"
echo "   - Wait 3-7 days for initial indexing"

echo -e "\n✅ SEO check completed!"

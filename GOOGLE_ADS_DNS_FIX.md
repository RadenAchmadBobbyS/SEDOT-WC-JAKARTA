# SOLUSI GOOGLE ADS DNS ERROR - SEDOT WC JAKARTA

## 🚨 **MASALAH YANG TERJADI**
```
Platform: desktop
DNS error
Final URL: https://www.sedotwcmandala.com/
Expanded URL: https://www.sedotwcmandala.com/
Last checked: Dec 15, 2024 10 PM
```

## 🔍 **PENYEBAB DNS ERROR**

### 1. **URL Redirect Issues**
- Domain `sedotwcmandala.com` melakukan redirect 307 ke `www.sedotwcmandala.com`
- Google Ads sensitif terhadap redirect chains
- Canonical URL tidak konsisten

### 2. **Google Ads Policy Violation**
- Google memerlukan URL yang langsung accessible
- Redirect dapat dianggap sebagai misleading destination
- DNS resolution harus stabil

## ✅ **SOLUSI YANG TELAH DITERAPKAN**

### A. **Perbaikan URL Consistency**
1. **MetadataBase Updated:** `https://www.sedotwcmandala.com`
2. **Canonical URLs Fixed:** Semua menggunakan `www.` version
3. **Open Graph URLs:** Konsisten dengan canonical
4. **Sitemap & Robots:** Updated ke www version

### B. **File yang Diperbaiki:**
- ✅ `src/app/layout.tsx` - metadataBase & canonical URLs
- ✅ `src/app/robots.ts` - host & sitemap URLs
- ✅ `src/app/sitemap.ts` - baseUrl consistency
- ✅ `src/app/page.tsx` - homepage canonical URL

## 🚀 **LANGKAH SELANJUTNYA UNTUK GOOGLE ADS**

### 1. **Deploy Perubahan**
```bash
# Push perubahan ke production
git add .
git commit -m "Fix DNS & canonical URLs for Google Ads"
git push origin main
```

### 2. **Verifikasi URL di Google Ads**
Gunakan URL berikut dalam campaign:
- **Recommended:** `https://www.sedotwcmandala.com/`
- **Alternative:** `https://www.sedotwcmandala.com`

### 3. **Testing URLs**
Test semua URL sebelum submit campaign:
```bash
# Test direct access
curl -I https://www.sedotwcmandala.com/

# Test redirect
curl -I https://sedotwcmandala.com/

# Test robot access
curl https://www.sedotwcmandala.com/robots.txt
```

### 4. **Google Ads Campaign Setup**
```
Final URL: https://www.sedotwcmandala.com/
Display URL: www.sedotwcmandala.com
Tracking Template: (if needed)
```

## 🛠️ **VERIFIKASI SETELAH DEPLOY**

### A. **Check DNS Resolution:**
```bash
nslookup www.sedotwcmandala.com
nslookup sedotwcmandala.com
```

### B. **Check HTTP Response:**
```bash
curl -I https://www.sedotwcmandala.com/
```
**Expected:** `HTTP/1.1 200 OK`

### C. **Check Google Search Console:**
1. Submit new sitemap: `https://www.sedotwcmandala.com/sitemap.xml`
2. Test URL: `https://www.sedotwcmandala.com/`
3. Request re-indexing

### D. **Check Robot Access:**
```bash
curl https://www.sedotwcmandala.com/robots.txt
```

## ⚠️ **TROUBLESHOOTING TIPS**

### Jika Masih Error DNS:

1. **Wait 24-48 Hours:** DNS propagation membutuhkan waktu
2. **Clear Cache:** Clear browser dan Google Ads cache
3. **Use Different URL:** Coba tanpa trailing slash: `https://www.sedotwcmandala.com`
4. **Contact Vercel Support:** Jika DNS masih bermasalah

### Jika Policy Violation:

1. **Check Landing Page:** Pastikan content relevan dengan ads
2. **Add Privacy Policy:** `/privacy-policy` page
3. **Add Terms of Service:** `/terms-of-service` page
4. **Ensure Mobile Friendly:** Test mobile responsiveness

## 📊 **MONITORING SETELAH CAMPAIGN LIVE**

### Google Ads Metrics:
- **Quality Score:** Target 7+
- **Click-through Rate:** Target 3%+
- **Conversion Rate:** Target 5%+
- **Page Load Speed:** Target <3 seconds

### SEO Impact:
- **Core Web Vitals:** Monitor performance
- **Search Console:** Check for errors
- **Analytics:** Track organic vs paid traffic

## 🎯 **RECOMMENDED GOOGLE ADS SETUP**

### Campaign Structure:
```
Campaign: Sedot WC Jakarta
├── Ad Group 1: Brand Keywords
│   ├── sedot wc jakarta
│   ├── sedotwc jakarta
│   └── jasa sedot wc jakarta
│
├── Ad Group 2: Service Keywords  
│   ├── sedot wc 24 jam
│   ├── jasa sedot wc murah
│   └── sedot wc terdekat
│
└── Ad Group 3: Location Keywords
    ├── sedot wc jakarta selatan
    ├── sedot wc jakarta barat
    └── sedot wc jakarta timur
```

### Ad Copy Example:
```
Headline 1: Sedot WC Jakarta Terpercaya
Headline 2: 24 Jam | Harga Mulai 120rb
Description: ⭐ Teknisi Profesional ⭐ Respon Cepat ⭐ Bergaransi. Hubungi Sekarang!
```

---

## 📞 **SUPPORT**

Jika masih mengalami masalah:
1. **Check ini file:** Update status dan error messages
2. **Monitor GSC:** Google Search Console untuk errors
3. **Test Tools:** Google Ads Preview Tool
4. **Contact Support:** Google Ads support jika diperlukan

**Status Last Update:** August 4, 2025
**Expected Resolution:** 24-48 hours after deployment

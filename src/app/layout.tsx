import type React from "react"
import Script from "next/script"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { FloatingNav } from "@/components/floating-nav"
import { FloatingActionButtons } from "@/components/floating-action-buttons"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sedotwcmandala.com"),
  title: {
    default: "Sedot WC Jakarta - Layanan Sedot WC Profesional 24 Jam Terpercaya | Harga Murah Bergaransi",
    template: "%s | SedotWC Jakarta - Layanan Terpercaya 24 Jam",
  },
  description:
    "⭐ Sedot WC Jakarta TERPERCAYA 24 JAM ⭐ Melayani Jakarta Selatan, Barat, Timur, Utara, Pusat. Harga mulai 120rb, Teknisi Profesional, Bergaransi, Respon Cepat. HUBUNGI SEKARANG!",
  keywords: [
    // Primary keywords
    "sedot wc jakarta",
    "sedot wc",
    "layanan sedot wc jakarta",
    "jasa sedot wc jakarta",
    // Location-based keywords
    "sedot wc jakarta selatan",
    "sedot wc jakarta barat",
    "sedot wc jakarta timur",
    "sedot wc jakarta utara",
    "sedot wc jakarta pusat",
    // Service keywords
    "sedot wc 24 jam",
    "sedot wc murah",
    "sedot wc profesional",
    "sedot wc bergaransi",
    "sedot wc darurat",
    "sedot wc cepat",
    "sedot wc terpercaya",
    // Area-specific keywords
    "sedot wc kebayoran",
    "sedot wc cilandak",
    "sedot wc jagakarsa",
    "sedot wc pasar minggu",
    "sedot wc kebon jeruk",
    "sedot wc kembangan",
    "sedot wc palmerah",
    "sedot wc grogol",
    "sedot wc cakung",
    "sedot wc cipayung",
    "sedot wc kramat jati",
    "sedot wc makasar",
    "sedot wc kelapa gading",
    "sedot wc koja",
    "sedot wc penjaringan",
    "sedot wc cilincing",
    "sedot wc menteng",
    "sedot wc gambir",
    "sedot wc tanah abang",
    "sedot wc senen",
    // Service type keywords
    "sedot wc rumah",
    "sedot wc apartemen",
    "sedot wc kantor",
    "sedot wc hotel",
    "sedot wc pabrik",
    "sedot wc ruko",
    "sedot wc mall",
    "sedot wc restoran",
  ].join(", "),
  authors: [{ name: "SedotWC Jakarta", url: "https://www.sedotwcmandala.com" }],
  creator: "SedotWC Jakarta",
  publisher: "SedotWC Jakarta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.sedotwcmandala.com",
    siteName: "SedotWC Jakarta - Layanan Sedot WC Profesional 24 Jam",
    title: "Sedot WC Jakarta Terpercaya 24 Jam - Harga Murah Bergaransi",
    description:
      "⭐ Layanan Sedot WC Jakarta TERPERCAYA ⭐ Melayani seluruh Jakarta 24 jam. Harga mulai 120rb, Teknisi Profesional, Bergaransi. Hubungi sekarang!",
    images: [
      {
        url: "/jasa-sedot-wc.webp",
        width: 1200,
        height: 630,
        alt: "Sedot WC Jakarta - Layanan Profesional 24 Jam Terpercaya",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sedotwcjakarta",
    creator: "@sedotwcjakarta",
    title: "Sedot WC Jakarta Terpercaya 24 Jam - Harga Murah Bergaransi",
    description:
      "⭐ Layanan Sedot WC Jakarta TERPERCAYA ⭐ Melayani seluruh Jakarta 24 jam. Harga mulai 120rb, Teknisi Profesional, Bergaransi.",
    images: ["/jasa-sedot-wc.webp"],
  },
  verification: {
    google: "FgGf9VrXhAtubzRxsE4f8m4xeQXlUIFmxlz4hi7YVgU",
    // Uncomment dan isi setelah mendapat kode verifikasi dari Google Search Console
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
    // other: {
    //   "msvalidate.01": "your-bing-verification-code",
    // },
  },
  alternates: {
    canonical: "https://www.sedotwcmandala.com",
    languages: {
      "id-ID": "https://www.sedotwcmandala.com",
    },
  },
  category: "business",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://sedotwcmandala.com/#business",
      name: "SedotWC Jakarta",
      alternateName: ["Sedot WC Jakarta", "Jasa Sedot WC Jakarta", "Layanan Sedot WC Jakarta"],
      description:
        "Layanan sedot WC profesional terpercaya di Jakarta 24 jam dengan teknisi berpengalaman dan harga terjangkau",
      url: "https://sedotwcmandala.com",
      telephone: "+62812-1906-7233",
      email: "info@sedotwcmandala.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressRegion: "DKI Jakarta",
        addressCountry: "ID",
        postalCode: "10110",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.2088,
        longitude: 106.8456,
      },
      openingHours: "Mo-Su 00:00-23:59",
      serviceArea: [
        {
          "@type": "City",
          name: "Jakarta Selatan",
        },
        {
          "@type": "City",
          name: "Jakarta Barat",
        },
        {
          "@type": "City",
          name: "Jakarta Timur",
        },
        {
          "@type": "City",
          name: "Jakarta Utara",
        },
        {
          "@type": "City",
          name: "Jakarta Pusat",
        },
      ],
      priceRange: "Rp 120,000 - Rp 450,000",
      paymentAccepted: ["Cash", "Transfer Bank", "E-Wallet"],
      currenciesAccepted: "IDR",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "247",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Budi Santoso",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          reviewBody:
            "Pelayanan sangat memuaskan, teknisi datang tepat waktu dan bekerja dengan profesional. Harga juga terjangkau!",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Sedot WC",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sedot WC Rumah",
              description: "Layanan sedot WC untuk rumah tinggal",
            },
            price: "150000",
            priceCurrency: "IDR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sedot WC Apartemen",
              description: "Layanan sedot WC untuk apartemen",
            },
            price: "200000",
            priceCurrency: "IDR",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://sedotwcmandala.com/#website",
      url: "https://sedotwcmandala.com",
      name: "SedotWC Jakarta",
      description: "Layanan sedot WC profesional terpercaya di Jakarta 24 jam",
      publisher: {
        "@id": "https://sedotwcmandala.com/#business",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://sedotwcmandala.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://sedotwcmandala.com/#organization",
      name: "SedotWC Jakarta",
      url: "https://sedotwcmandala.com",
      logo: {
        "@type": "ImageObject",
        url: "https://sedotwcmandala.com/jasa-sedot-wc.png",
        width: 300,
        height: 100,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62812-1906-7233",
        contactType: "customer service",
        availableLanguage: ["Indonesian"],
        areaServed: "ID",
      },
      sameAs: [
        "https://www.facebook.com/sedotwcmandala",
        "https://www.instagram.com/sedotwcmandala",
        "https://wa.me/6281219067233?text=Halo, saya butuh jasa sedot WC Mandala",
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Google Tag Manager - paste as high in the <head> as possible */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5TDVS5MN');
          `}
        </Script>
        <link rel="canonical" href="https://sedotwcmandala.com" />
        <link rel="alternate" hrefLang="id" href="https://sedotwcmandala.com" />

        {/* Geo tags */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />

        {/* Additional SEO meta tags */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="Indonesian" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/jasa-sedot-wc.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17432209006"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17432209006');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        {/* Google Tag Manager (noscript) - paste immediately after opening <body> tag */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TDVS5MN" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {children}
        <FloatingNav />
        <FloatingActionButtons />

        {/* Schema.org for breadcrumbs */}
        <Script id="breadcrumb-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sedotwcmandala.com"
                }
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}

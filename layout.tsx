import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import { BRAND } from '@/lib/brand';
import { CookieBanner } from '@/components/cookie-banner';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-poppins' });

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.domain),
  title: 'AgriConnect Botswana | Crops, Livestock, Business & Farming Services',
  description:
    "Botswana's all-in-one agriculture platform. Sell crops, livestock, business proposals, farm inputs & consultancy services. Connect directly via WhatsApp. From Gaborone to Francistown.",
  keywords: [
    'Botswana agriculture',
    'sell crops Botswana',
    'livestock Botswana',
    'farm consultancy',
    'agribusiness Botswana',
    'AgriConnect BW',
  ],
  alternates: { canonical: BRAND.domain },
  openGraph: {
    title: 'AgriConnect Botswana | Crops, Livestock, Business & Farming Services',
    description:
      "Botswana's all-in-one agriculture platform. Connect directly via WhatsApp. From Gaborone to Francistown.",
    type: 'website',
    url: BRAND.domain,
    images: [
      {
        url: 'https://images.pexels.com/photos/38668660/pexels-photo-38668660.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://images.pexels.com/photos/38668660/pexels-photo-38668660.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = BRAND.ga4Id;
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <Script id="ga-conditional" strategy="afterInteractive">
          {`
            (function() {
              try {
                var consent = localStorage.getItem('ac_cookie_consent');
                if (consent === 'declined') return;
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: true });
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=${gaId}';
                document.head.appendChild(s);
              } catch(e) {}
            })();
          `}
        </Script>
      </head>
      <body className="font-sans" style={{ fontFamily: 'var(--font-inter), var(--font-poppins), system-ui, sans-serif' }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

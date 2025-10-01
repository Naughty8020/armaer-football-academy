// app/layout.tsx
import Headerpage from '@/components/header/HeaderSection';
import Footer from '@/components/footer/Footer';
import './globals.css';
import { Metadata } from 'next';
import Head from 'next/head'; 

export const metadata: Metadata = {
  title: 'Armaer Football Academy | 滋賀県近江八幡市で活動しているサッカースクール',
  description:
    '滋賀県近江八幡市に位置するARMAER FOOTBALL ACADEMY（アルマー／アルマサッカースクール）で、サッカー技術、フィジカル、戦術理解、メンタルをトレーニング。アルマサッカーとして地域で親しまれ、ジュニアからプロ選手へのステップアップをサポートします。',
  keywords: 'サッカー, アルマー, アルマサッカー, 近江八幡, 滋賀県, 少年サッカー, サッカースクール, 世界基準, ジュニアサッカー, 近江八幡市 サッカースクール',
  authors: [{ name: 'Armaer Football Academy' }],
  openGraph: {
    title: 'Armaer Football Academy | 滋賀県近江八幡市で活動しているサッカースクール',
    description:
      '滋賀県近江八幡市にある世界基準のサッカースクール「アルマー」「アルマサッカー」。技術や戦術理解を深め、次世代のサッカー選手を育成します。',
    url: 'https://armaerfootball.com',
    images: [
      {
        url: 'https://armaerfootball.com/ogb.png',
        width: 1200,
        height: 630,
        alt: 'Armaer Football Academy - サッカースクールのイメージ',
      },
    ],
    siteName: 'Armaer Football Academy',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armaer Football Academy | 滋賀県近江八幡市で活動しているサッカースクール',
    description: '滋賀県近江八幡市で活動する「アルマー」「アルマサッカー」育成スクール。世界基準のサッカー選手育成プログラムを提供します。',
    images: ['https://armaerfootball.com/ogb.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Headerpage />
        <main className="bg-white">{children}</main>
        <Footer />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'Organization',
                name: 'Armaer Football Academy',
                alternateName: ['アルマー', 'アルマサッカー', 'アルマーフットボールアカデミー'],
                url: 'https://armaerfootball.com',
                logo: 'https://armaerfootball.com/ogb.png',
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+81-123-456-7890',
                  contactType: 'Customer Service',
                  areaServed: 'JP',
                  availableLanguage: 'Japanese',
                },
                sameAs: [
                  'https://www.facebook.com/armaerfootball',
                  'https://twitter.com/armaerfootball',
                  'https://www.instagram.com/armaerfootball',
                ],
              }),
            }}
          />
        </Head>
      </body>
    </html>
  );
}

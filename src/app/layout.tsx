// app/layout.tsx
import Headerpage from '@/components/main/HeaderSection';
import Footer from '@/components/footer/Footer';
import './globals.css';
import { Metadata } from 'next';
import Head from 'next/head'; // Headコンポーネントをインポート

export const metadata: Metadata = {
  title: 'Armaer Football Academy | 滋賀県近江八幡市で活動しているサッカースクール',
  description:
    '滋賀県近江八幡市に位置するARMAER FOOTBALL ACADEMYで、サッカー技術、フィジカル、戦術理解、メンタルをトレーニングし、夢を実現する選手を育成します。ジュニアからプロ選手へのステップアップをサポートします。',
  keywords: 'サッカー, アルマー,近江八幡,滋賀県,スペイン,アルマ,アルマフットボール,アルマフットボールアカデミー トレーニング,少年サッカー, サッカースクール, 世界基準, ジュニアサッカー',
  authors: [{ name: 'Armaer Football Academy' }],
  openGraph: {
    title: 'Armaer Football Academy | サッカー技術向上を目指すアカデミー',
    description:
      '滋賀県の近江八幡市にある世界基準のサッカースクールで、技術や戦術理解を深め、次世代のサッカー選手を育成します。',
    url: 'https://armaerfootball.com',
    images: [
      {
        url: 'https://armaerfootball.com/public/og-image.jpg',
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
    description: '世界基準のサッカー選手育成プログラムを提供するサッカースクール。',
    images: ['https://armaerfootball.com/images/og-image.jpg'],
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
        
        {/* Headコンポーネント内でjsonLdを追加 */}
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'Organization',
                name: 'Armaer Football Academy',
                url: 'https://armaerfootball.com',
                logo: 'https://armaerfootball.com/images/logo.png',
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

// app/layout.tsx
import Headerpage from '@/components/main/HeaderSection';
import Footer from '@/components/footer/Footer';
import './globals.css';
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Armaer Football Academy',
  description: 'サッカー選手の技術向上を目指すトップレベルのサッカーアカデミーです。',
  keywords: 'サッカー, アカデミー, トレーニング',
  authors: [{ name: 'Armaer Football Academy' }], // 'author' を 'authors' に変更し、オブジェクト形式に
  openGraph: {
    title: 'Armaer Football Academy',
    description: 'サッカー選手の技術向上を目指すトップレベルのサッカーアカデミーです。',
    url: 'https://armaer-football-academy.vercel.app',
    images: [
      {
        url: 'https://armaer-football-academy.vercel.app/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Armaer Football Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armaer Football Academy',
    description: 'サッカー選手を育成する最高のアカデミー',
    images: ['https://armaer-football-academy.vercel.app/images/og-image.jpg'],
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
      </body>
    </html>
  );
}

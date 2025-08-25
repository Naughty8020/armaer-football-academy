// app/layout.tsx
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body >

     <Header />
        <main className='bg-white' >{children}</main>
       <Footer />
      </body>
    </html>
  )
}

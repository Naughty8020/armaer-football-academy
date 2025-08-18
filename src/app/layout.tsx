// app/layout.tsx
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>

     <Header />
        <main className='bg-gray-50' >{children}</main>
       <Footer />
      </body>
    </html>
  )
}

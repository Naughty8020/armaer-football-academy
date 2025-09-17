// app/layout.tsx
import Headerpage from '@/components/main/HeaderSection';
import Footer from '@/components/footer/Footer';
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body >

     <Headerpage />
        <main className='bg-white' >{children}</main>
       <Footer />
      </body>
    </html>
  )
}

// app/layout.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>

     <Header />
        <main className="p-4">{children}</main>
       <Footer />
      </body>
    </html>
  )
}

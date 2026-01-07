import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'My Team Site',
  description: 'GitHub共同開発 練習用サイト',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning>
        <Header />
        <main style={{ maxWidth: '960px', margin: '40px auto', padding: '0 16px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

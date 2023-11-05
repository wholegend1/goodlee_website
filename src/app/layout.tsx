import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "../components/Common/Navbar";
import Footer from '@/components/Common/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '好力移工企業平台',
  description: '幫您找到最適合的',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

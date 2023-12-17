import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "../components/Navbar/Navbar";
import Footer from '@/components/Footer/Footer';
import { FilterContextProvider } from '@/providers/FilterContextProvider';
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
        <FilterContextProvider>
          <div className="pt-[80px]">{children}</div>
        </FilterContextProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

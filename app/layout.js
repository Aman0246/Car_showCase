import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in world. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header></Header>
        {children}
        <Footer></Footer>
        </main>
        </body>
    </html>
  )
}

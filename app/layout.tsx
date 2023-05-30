
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elsa Hovey | Portfolio',
  description: 'another web developer portfolio and ramblings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        
    </html>
  )
} 
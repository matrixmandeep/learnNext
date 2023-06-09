import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Oswald } from 'next/font/google'

const font = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  )
}
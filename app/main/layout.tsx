import { Inter } from 'next/font/google'
import Nav from '../component/Nav'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Nav/>
      </body>
    </html>
  )
}
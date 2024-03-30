import { Noto_Sans_Thai } from "next/font/google";
import Nav from '../component/Nav'

const noto_san_thai = Noto_Sans_Thai({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: '--font-noto-sans-thai',
 });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto_san_thai.className}>
        {children}
        <Nav/>
      </body>
    </html>
  )
}
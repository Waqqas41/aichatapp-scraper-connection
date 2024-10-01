import Chat from '@/components/Chat'
import './globals.css'
import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google' // {{ edit_1 }}
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] }) // {{ edit_2 }}

export const metadata = {
  title: '100M GPT',
  description: 'AI Sales Closer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Providers>
        <body className={`${inter.className} ${spaceGrotesk.className}`}> {/* {{ edit_3 }} */}
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  )
}

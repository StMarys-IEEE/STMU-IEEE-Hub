import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IEEE STMU Hub - St. Mary\'s University IEEE Student Chapter',
  description: 'The official website of the IEEE Student Chapter at St. Mary\'s University. Explore our projects, meet our members, and join our community of engineering innovators.',
  keywords: ['IEEE', 'St. Mary\'s University', 'Student Chapter', 'Engineering', 'Technology', 'Innovation'],
  authors: [{ name: 'IEEE STMU Chapter' }],
  openGraph: {
    title: 'IEEE STMU Hub',
    description: 'St. Mary\'s University IEEE Student Chapter',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IEEE STMU Hub',
    description: 'St. Mary\'s University IEEE Student Chapter',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-ieee-white dark:bg-ieee-gray-dark">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
import Navigation from '@/components/Navigation'
import { Suspense } from 'react'
import Loading from './loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen pb-16 bg-page">
        <Suspense fallback={<Loading />}>
          <main className="pb-16">
            {children}
          </main>
          <footer className="fixed bottom-0 left-0 right-0 w-full h-16 bg-gray-100 border-t border-gray-200 flex justify-end items-center z-50">
            <Navigation />
          </footer>
        </Suspense>
      </body>
    </html>
  )
}

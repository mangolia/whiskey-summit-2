import './globals.css'
import Navigation from '@/components/Navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="pb-16">
        {children}
        <footer className="fixed bottom-0 w-full h-16 bg-gray-100 border-t border-gray-200 flex justify-end items-center">
          <Navigation />
        </footer>
      </body>
    </html>
  )
}

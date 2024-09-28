import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WOXMART',
  description: 'Your campus delivery service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              {/* Header */}
              <header className="bg-white py-4 shadow-md">
                <div className="container mx-auto px-4 flex items-center justify-between">
                  <Link href="/" className="text-2xl font-bold">WOXMART</Link>
                  <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                    <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
                    <Link href="/contacts" className="text-gray-600 hover:text-gray-900">Contacts</Link>
                  </nav>
                  <div className="flex items-center space-x-4">
                    <Link href="/cart">
                      <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                    </Link>
                    <Link href="/signup">
                      <User className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                    </Link>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-grow">
                {children}
              </main>

              {/* Footer */}
              <footer className="bg-pink-300 py-8">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-2">WOXMART</h3>
                      <p>FOR ITEMS ON THE GO</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">CONTACT</h4>
                      <ul>
                        <li><Link href="/source" className="hover:underline">Source</Link></li>
                        <li><Link href="/delivery-regions" className="hover:underline">Delivery regions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">INFORMATION</h4>
                      <ul>
                        <li><Link href="/student-jobs" className="hover:underline">Student jobs</Link></li>
                        <li><Link href="/resources" className="hover:underline">Resources</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
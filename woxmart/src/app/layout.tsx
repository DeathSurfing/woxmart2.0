import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '../app/context/AuthContext'
import { CartProvider } from '../app/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js E-commerce',
  description: 'A simple e-commerce site built with Next.js',
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
              <header className="bg-blue-600 text-white p-4">
                <nav className="container mx-auto flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Next.js E-commerce</h1>
                  <div className="space-x-4">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/login" className="hover:underline">Login</a>
                    <a href="/signup" className="hover:underline">Signup</a>
                    <a href="/cart" className="hover:underline">Cart</a>
                  </div>
                </nav>
              </header>
              <main className="flex-grow container mx-auto p-4">
                {children}
              </main>
              <footer className="bg-gray-200 p-4 text-center">
                © 2023 Next.js E-commerce. All rights reserved.
              </footer>
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
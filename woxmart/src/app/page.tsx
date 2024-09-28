import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const categories = [
    { name: 'Stationery', slug: 'stationery' },
    { name: 'Snacks & Beverages', slug: 'snacks-and-drinks' },
    { name: 'Daily Use Items', slug: 'essentials' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to WOXMART</h1>
              <p className="text-xl mb-6">Your one-stop shop for campus essentials</p>
              <Link href="/products" className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="WOXMART Hero"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link href={`/products?category=${category.slug}`} key={index} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300 group-hover:shadow-xl">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=${category.name}`}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600 group-hover:text-blue-600 transition duration-300">
                      Explore <ArrowRight className="inline-block ml-1 w-4 h-4" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to shop?</h2>
          <p className="text-xl mb-8">Explore our wide range of products and enjoy campus-exclusive deals!</p>
          <Link href="/products" className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300">
            Browse All Products
          </Link>
        </div>
      </section>
    </div>
  )
}
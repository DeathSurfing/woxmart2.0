'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useCart } from '../context/CartContext'

type Product = {
  _id: string
  name: string
  price: number
  image: string
  category: string
}

const categories = ['All', 'Snacks and Drinks', 'Essentials', 'Stationery']

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { addToCart } = useCart()

  const observer = useRef<IntersectionObserver | null>(null)
  const lastProductElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  useEffect(() => {
    setProducts([])
    setPage(1)
    setHasMore(true)
  }, [selectedCategory])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/products?page=${page}&limit=10&category=${selectedCategory}`)
        const data = await response.json()
        if (data.success) {
          setProducts(prevProducts => [...prevProducts, ...data.data])
          setHasMore(data.data.length > 0)
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      }
      setLoading(false)
    }

    fetchProducts()
  }, [page, selectedCategory])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter by Category:</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product._id}
            ref={index === products.length - 1 ? lastProductElementRef : null}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">₹{product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mb-4">{product.category}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more products...</p>}
      {!hasMore && <p className="text-center mt-4">No more products to load</p>}
    </div>
  )
}
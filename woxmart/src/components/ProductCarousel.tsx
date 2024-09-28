'use client'

import { useState, useEffect } from 'react'
import { useCart } from '../app/context/CartContext'

type Product = {
  _id: string
  name: string
  price: number
  image: string
}

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      if (data.success) {
        setProducts(data.data)
      }
    }
    fetchProducts()
  }, [])

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  if (products.length === 0) {
    return <div>Loading...</div>
  }

  const currentProduct = products[currentIndex]

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
        <img src={currentProduct.image} alt={currentProduct.name} className="object-cover" />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button onClick={prevProduct} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Previous
        </button>
        <button onClick={nextProduct} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Next
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{currentProduct.name}</h3>
        <p className="text-gray-600">${currentProduct.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(currentProduct)}
          className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
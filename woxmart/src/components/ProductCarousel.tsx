'use client'

import { useState } from 'react'
import { useCart } from '../app/context/CartContext'

type Product = {
  id: string
  name: string
  price: number
  image: string
}

const products: Product[] = [
  { id: '1', name: 'Product 1', price: 19.99, image: '/placeholder.svg?height=200&width=200' },
  { id: '2', name: 'Product 2', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
  { id: '3', name: 'Product 3', price: 39.99, image: '/placeholder.svg?height=200&width=200' },
  { id: '4', name: 'Product 4', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function ProductCarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { addToCart } = useCart()

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
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
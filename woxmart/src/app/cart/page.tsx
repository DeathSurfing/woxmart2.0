'use client'

import { useCart } from '../context/CartContext'

export default function Page() {
  const { items, removeFromCart, clearCart } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}
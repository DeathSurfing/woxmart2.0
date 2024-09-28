'use client'

import { DeliverySystem } from './delivery/delivery-system'

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Delivery System</h1>
      <DeliverySystem />
    </div>
  )
}
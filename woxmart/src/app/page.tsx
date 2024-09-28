import ProductCarousel from '../components/ProductCarousel'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to our E-commerce Store</h1>
      <ProductCarousel />
    </div>
  )
}
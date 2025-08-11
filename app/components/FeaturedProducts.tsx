import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "PUMA RS-X Reinvention",
    price: "₹8,999",
    originalPrice: "₹10,999",
    image: "/puma-rs-x-white-red.png",
    badge: "New",
  },
  {
    id: 2,
    name: "Future Z 1.4 FG/AG",
    price: "₹16,499",
    image: "/puma-future-z-black-gold.png",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Velocity NITRO 3",
    price: "₹10,799",
    image: "/puma-velocity-nitro-blue.png",
    badge: "Performance",
  },
  {
    id: 4,
    name: "Suede Classic XXI",
    price: "₹6,199",
    image: "/puma-suede-classic-navy.png",
    badge: "Classic",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest innovations and bestselling favorites
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-white text-black px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Quick View
                  </Link>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

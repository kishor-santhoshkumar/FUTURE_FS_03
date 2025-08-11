import Image from "next/image"
import Link from "next/link"

const premiumShoes = [
  {
    id: 5,
    name: "PUMA x Ferrari Future Rider",
    price: "₹12,999",
    originalPrice: "₹14,999",
    image: "/puma-ferrari-future-rider.png",
    badge: "Limited Edition",
    description: "Motorsport-inspired design with premium materials",
  },
  {
    id: 6,
    name: "PUMA Clyde All-Pro",
    price: "₹11,499",
    image: "/puma-clyde-allpro-basketball.png",
    badge: "Basketball",
    description: "Professional basketball performance shoe",
  },
  {
    id: 7,
    name: "PUMA Ultra 1.4 FG",
    price: "₹18,999",
    image: "/puma-ultra-football-boots.png",
    badge: "Pro Level",
    description: "Ultra-lightweight football boots for speed",
  },
  {
    id: 8,
    name: "PUMA Deviate NITRO Elite",
    price: "₹15,999",
    image: "/puma-deviate-nitro-elite.png",
    badge: "Marathon",
    description: "Carbon fiber plate for elite running performance",
  },
]

export default function PremiumCollection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900 mb-4">Premium Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most advanced footwear technology and exclusive designs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {premiumShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={shoe.image || "/placeholder.svg"}
                  alt={shoe.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {shoe.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href={`/product/${shoe.id}`}
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{shoe.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{shoe.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">{shoe.price}</span>
                    {shoe.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{shoe.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/premium"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105"
          >
            Explore Premium Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

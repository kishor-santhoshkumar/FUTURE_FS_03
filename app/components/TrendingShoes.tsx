import Image from "next/image"

const trendingShoes = [
  {
    name: "PUMA Cali Sport",
    price: "₹7,999",
    image: "/puma-cali-sport-white.png",
    trend: "Lifestyle",
  },
  {
    name: "PUMA Thunder Spectra",
    price: "₹9,499",
    image: "/puma-thunder-spectra-colorful.png",
    trend: "Retro",
  },
  {
    name: "PUMA Cell Endura",
    price: "₹8,499",
    image: "/puma-cell-endura-tech.png",
    trend: "Tech",
  },
  {
    name: "PUMA Roma Basic",
    price: "₹5,999",
    image: "/puma-roma-basic-classic.png",
    trend: "Classic",
  },
  {
    name: "PUMA X-Ray 2 Square",
    price: "₹6,799",
    image: "/puma-xray-square-modern.png",
    trend: "Street",
  },
]

export default function TrendingShoes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Now</h2>
          <p className="text-lg text-gray-600">Most popular shoes this month</p>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {trendingShoes.map((shoe, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                  src={shoe.image || "/placeholder.svg"}
                  alt={shoe.name}
                  width={240}
                  height={180}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full text-xs">
                  {shoe.trend}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{shoe.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{shoe.price}</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition-colors">
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

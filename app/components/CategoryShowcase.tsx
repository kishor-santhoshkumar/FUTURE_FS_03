import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Running",
    description: "Performance gear for every mile",
    image: "/puma-running-category.png",
    href: "/running",
  },
  {
    title: "Football",
    description: "Dominate the pitch",
    image: "/puma-football-category.png",
    href: "/football",
  },
  {
    title: "Lifestyle",
    description: "Street-ready style",
    image: "/puma-lifestyle-category.png",
    href: "/lifestyle",
  },
]

export default function CategoryShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Your Sport</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From the track to the street, discover gear that moves with you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-oswald text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700">
                  Shop Now
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

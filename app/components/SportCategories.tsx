import Image from "next/image"
import Link from "next/link"

const sportCategories = [
  {
    title: "Basketball",
    description: "Court-ready performance",
    image: "/puma-basketball-category.png",
    href: "/basketball",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Training",
    description: "Gym and fitness gear",
    image: "/puma-training-category.png",
    href: "/training",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Motorsport",
    description: "Racing-inspired style",
    image: "/puma-motorsport-category.png",
    href: "/motorsport",
    color: "from-red-600 to-black",
  },
]

export default function SportCategories() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">More Sports</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Explore our complete range of sport-specific gear</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sportCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl h-80 transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-60 transition-opacity`}
                ></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="font-oswald text-3xl font-bold mb-2">{category.title}</h3>
                <p className="text-lg mb-4 opacity-90">{category.description}</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Collection
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

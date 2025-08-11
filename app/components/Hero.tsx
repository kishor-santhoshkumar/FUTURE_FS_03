import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/puma-athletic-hero.png"
          alt="PUMA Athletic Performance"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-oswald text-6xl md:text-8xl font-bold mb-6 leading-tight">
          FOREVER
          <span className="block text-red-500">FASTER</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Unleash your potential with cutting-edge athletic wear designed for champions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
          >
            Shop Now
          </Link>
          <Link
            href="/collections"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all"
          >
            Explore Collections
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

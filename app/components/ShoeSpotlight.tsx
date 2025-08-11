import Image from "next/image"

export default function ShoeSpotlight() {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-3xl opacity-20 blur-xl"></div>
            <Image
              src="/puma-spotlight-shoe.png"
              alt="PUMA Spotlight Shoe"
              width={600}
              height={400}
              className="relative z-10 w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              New Launch
            </div>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold leading-tight">
              PUMA MB.03
              <span className="block text-red-500">LaMelo Ball</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience the future of basketball with LaMelo Ball's signature shoe. Featuring NITRO foam technology and
              a bold design that matches his explosive playing style.
            </p>

            <div className="flex items-center space-x-6">
              <div className="text-3xl font-bold text-red-500">₹13,999</div>
              <div className="text-lg text-gray-400 line-through">₹15,999</div>
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">13% OFF</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                Buy Now - ₹13,999
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all">
                Add to Wishlist
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">NITRO</div>
                <div className="text-sm text-gray-400">Foam Technology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">360°</div>
                <div className="text-sm text-gray-400">Grip Pattern</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">MB</div>
                <div className="text-sm text-gray-400">Signature Series</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export default function BrandStory() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">
              The Spirit of
              <span className="block text-red-500">Competition</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              For over 75 years, PUMA has been at the forefront of athletic innovation. From the first screw-in studs to
              the latest performance technologies, we've been pushing boundaries and redefining what's possible.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Our commitment to excellence drives us to create products that don't just meet expectations – they exceed
              them. Because when you're Forever Faster, ordinary isn't an option.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">75+</div>
                <div className="text-sm text-gray-400">Years of Innovation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">120+</div>
                <div className="text-sm text-gray-400">Countries Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">600+</div>
                <div className="text-sm text-gray-400">Elite Athletes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/puma-brand-heritage.png"
              alt="PUMA Brand Heritage"
              width={500}
              height={600}
              className="rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl">
              <div className="text-2xl font-bold mb-1">Forever Faster</div>
              <div className="text-sm opacity-90">Since 1948</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

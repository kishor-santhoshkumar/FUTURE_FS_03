"use client"

import { brandLogos } from "@/lib/data"
import Image from "next/image"

export default function BrandShowcase() {
  return (
    <section className="py-12 bg-gray-50 border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Trusted by Leading Brands</h3>
          <p className="text-sm text-muted-foreground">We partner with the world's most recognized brands</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity">
          {brandLogos.map((brand, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

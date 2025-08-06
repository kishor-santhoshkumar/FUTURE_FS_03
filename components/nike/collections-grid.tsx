"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { nikeCollections } from "@/lib/nike-data"

export default function CollectionsGrid() {
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">ICONIC COLLECTIONS</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our legendary collections that have defined athletic culture for decades
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nikeCollections.map((collection) => (
            <Card
              key={collection.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCollection(collection.id)}
              onMouseLeave={() => setHoveredCollection(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredCollection === collection.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Featured Badge */}
                {collection.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-bold">FEATURED</div>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-black mb-2">{collection.name}</h3>
                  <p className="text-lg mb-4 opacity-90">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">{collection.products} Products</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`text-white hover:bg-white/20 transition-all duration-300 ${
                        hoveredCollection === collection.id ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                      }`}
                    >
                      Explore <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-black text-white rounded-3xl p-12">
          <h3 className="text-3xl md:text-5xl font-black mb-6">FIND YOUR PERFECT FIT</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Use our size guide and fit finder to discover your ideal Nike shoe size across all our collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold rounded-full">
              Size Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Fit Finder
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

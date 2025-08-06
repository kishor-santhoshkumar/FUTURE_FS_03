"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingBag, Eye } from "lucide-react"
import { nikeProducts } from "@/lib/nike-data"
import { formatPriceINR } from "@/lib/utils"

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const categories = ["All", "Basketball", "Running", "Lifestyle"]

  const filteredProducts =
    selectedCategory === "All" ? nikeProducts : nikeProducts.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">FEATURED PRODUCTS</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest innovations designed to elevate your performance
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-white rounded-full shadow-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-lg"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                {/* Product Image */}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredProduct === product.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 hover:bg-green-600 text-white font-semibold">NEW</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">BESTSELLER</Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-white font-semibold">SALE</Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div
                  className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                    hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  <Button size="icon" variant="secondary" className="h-10 w-10 bg-white/90 hover:bg-white shadow-lg">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10 bg-white/90 hover:bg-white shadow-lg">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Add Button */}
                <div
                  className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
                    hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Category */}
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">{product.category}</div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold line-clamp-2 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Colors:</span>
                    <div className="flex gap-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border-2 border-gray-300"
                          style={{
                            backgroundColor: color.includes("Black")
                              ? "#000"
                              : color.includes("White")
                                ? "#fff"
                                : color.includes("Blue")
                                  ? "#3b82f6"
                                  : color.includes("Red")
                                    ? "#ef4444"
                                    : "#6b7280",
                          }}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{formatPriceINR(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {formatPriceINR(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg font-semibold border-2 border-black hover:bg-black hover:text-white rounded-full bg-transparent"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

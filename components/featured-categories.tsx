"use client"

import { Card } from "@/components/ui/card"
import { featuredCategories } from "@/lib/data"
import { useEcommerceStore } from "@/lib/store"
import Image from "next/image"

export default function FeaturedCategories() {
  const { setSelectedCategory } = useEcommerceStore()

  const handleCategoryClick = (categoryName: string) => {
    const categoryValue = categoryName.toLowerCase().includes("fashion")
      ? "clothing"
      : categoryName.toLowerCase().includes("electronics")
        ? "electronics"
        : "home"
    setSelectedCategory(categoryValue)

    // Scroll to products section
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-1">{category.description}</p>
                  <p className="text-xs opacity-75">{category.itemCount}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

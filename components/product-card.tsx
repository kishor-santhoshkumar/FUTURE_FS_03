"use client"

import type React from "react"

import Image from "next/image"
import { Star, ShoppingCart, Heart, Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Product, useEcommerceStore } from "@/lib/store"
import { formatPriceINR } from "@/lib/utils"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useEcommerceStore()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(product)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const discountPercentage = Math.floor(Math.random() * 30) + 10 // Random discount for demo
  const isOnSale = discountPercentage > 20
  const originalPrice = isOnSale ? product.price * (1 + discountPercentage / 100) : product.price

  return (
    <Card
      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {/* Product Image */}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.stock < 10 && (
            <Badge variant="destructive" className="text-xs font-medium shadow-lg">
              <Zap className="h-3 w-3 mr-1" />
              Only {product.stock} left
            </Badge>
          )}
          {isOnSale && (
            <Badge className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-xs font-medium shadow-lg">
              -{discountPercentage}% OFF
            </Badge>
          )}
          {product.rating >= 4.8 && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-medium shadow-lg">
              ⭐ Bestseller
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 bg-white/95 hover:bg-white shadow-lg backdrop-blur-sm"
            onClick={handleWishlist}
          >
            <Heart className={`h-4 w-4 transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 bg-white/95 hover:bg-white shadow-lg backdrop-blur-sm"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Add to Cart - appears on hover */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            onClick={handleAddToCart}
            className="w-full bg-black/90 hover:bg-black text-white backdrop-blur-sm shadow-lg font-medium"
            disabled={product.stock === 0}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.stock === 0 ? "Out of Stock" : "Quick Add to Cart"}
          </Button>
        </div>

        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <CardContent className="p-5">
        <div className="space-y-3">
          {/* Product Category */}
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{product.category}</div>

          {/* Product Name */}
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors leading-tight min-h-[3.5rem]">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{product.description}</p>

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
            <span className="text-sm text-muted-foreground font-medium">
              {product.rating} ({product.reviews.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">{formatPriceINR(product.price)}</span>
              {isOnSale && (
                <span className="text-sm text-muted-foreground line-through">{formatPriceINR(originalPrice)}</span>
              )}
            </div>
            <Badge
              variant={product.stock > 50 ? "secondary" : product.stock > 10 ? "outline" : "destructive"}
              className="text-xs font-medium"
            >
              {product.stock > 50 ? "In Stock" : `${product.stock} left`}
            </Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEcommerceStore } from "@/lib/store"
import { categories, sortOptions } from "@/lib/data"
import { X, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

export default function ProductFilters() {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    filteredProducts,
  } = useEcommerceStore()

  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [tempPriceRange, setTempPriceRange] = useState(priceRange)

  const handlePriceRangeChange = () => {
    setPriceRange(tempPriceRange)
  }

  const clearFilters = () => {
    setSelectedCategory("all")
    setPriceRange([0, 1000])
    setSortBy("name")
    setSearchQuery("")
    setTempPriceRange([0, 1000])
  }

  const hasActiveFilters = selectedCategory !== "all" || priceRange[0] > 0 || priceRange[1] < 1000 || searchQuery

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="w-full justify-between bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex items-center">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters & Sort
              {hasActiveFilters && (
                <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">Active</span>
              )}
            </div>
            <span className="text-sm text-muted-foreground">{filteredProducts.length} products</span>
          </Button>
        </div>

        {/* Results Count - Desktop */}
        <div className="hidden md:flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-2 h-6 px-2 text-xs">
                Clear all filters
              </Button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div
          className={`space-y-4 md:space-y-0 md:flex md:items-center md:space-x-6 ${
            isFiltersOpen ? "block" : "hidden md:flex"
          }`}
        >
          {/* Category Filter */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Category:</label>
            <div className="flex flex-wrap gap-2 md:gap-1">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`text-xs ${
                    selectedCategory === category.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Price Range:</label>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  placeholder="Min"
                  value={tempPriceRange[0]}
                  onChange={(e) => setTempPriceRange([Number(e.target.value), tempPriceRange[1]])}
                  className="w-20 pl-6 text-sm"
                />
              </div>
              <span className="text-muted-foreground">-</span>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  placeholder="Max"
                  value={tempPriceRange[1]}
                  onChange={(e) => setTempPriceRange([tempPriceRange[0], Number(e.target.value)])}
                  className="w-20 pl-6 text-sm"
                />
              </div>
              <Button size="sm" onClick={handlePriceRangeChange} className="px-3">
                Apply
              </Button>
            </div>
          </div>

          {/* Sort */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex h-9 w-full md:w-auto rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters - Mobile */}
          {hasActiveFilters && (
            <Button variant="outline" size="sm" onClick={clearFilters} className="md:hidden bg-transparent">
              <X className="h-4 w-4 mr-2" />
              Clear All Filters
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

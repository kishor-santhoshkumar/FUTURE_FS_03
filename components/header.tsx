"use client"

import { ShoppingCart, User, Search, Menu, Heart, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useEcommerceStore } from "@/lib/store"
import { useState } from "react"

export default function Header() {
  const { searchQuery, setSearchQuery, cart, setCartOpen, user, setLoginOpen, getCartItemsCount } = useEcommerceStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex h-10 items-center justify-between text-sm border-b">
          <div className="flex items-center space-x-6 text-muted-foreground">
            <span>Free shipping on orders over $50</span>
            <span>•</span>
            <span>30-day return policy</span>
          </div>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <span>Customer Service: 1-800-SHOP</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShopEasy
              </h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for products, brands, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-primary rounded-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Wishlist - Desktop */}
            <Button variant="ghost" size="icon" className="hidden md:flex relative hover:bg-gray-100">
              <Heart className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                0
              </Badge>
              <span className="sr-only">Wishlist</span>
            </Button>

            {/* User Account */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLoginOpen(true)}
              className="hidden md:flex hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCartOpen(true)}
              className="relative hover:bg-gray-100"
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartItemsCount() > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold"
                >
                  {getCartItemsCount()}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>

              {/* Mobile Actions */}
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="ghost"
                  onClick={() => setLoginOpen(true)}
                  className="flex flex-col items-center py-3 h-auto"
                >
                  <User className="h-5 w-5 mb-1" />
                  <span className="text-xs">{user ? user.name : "Login"}</span>
                </Button>
                <Button variant="ghost" className="flex flex-col items-center py-3 h-auto relative">
                  <Heart className="h-5 w-5 mb-1" />
                  <span className="text-xs">Wishlist</span>
                  <Badge
                    variant="destructive"
                    className="absolute top-1 right-6 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    0
                  </Badge>
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setCartOpen(true)}
                  className="flex flex-col items-center py-3 h-auto relative"
                >
                  <ShoppingCart className="h-5 w-5 mb-1" />
                  <span className="text-xs">Cart</span>
                  {getCartItemsCount() > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute top-1 right-6 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      {getCartItemsCount()}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

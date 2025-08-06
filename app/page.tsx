"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedCategories from "@/components/featured-categories"
import BrandShowcase from "@/components/brand-showcase"
import ProductFilters from "@/components/product-filters"
import ProductGrid from "@/components/product-grid"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import ShoppingCart from "@/components/shopping-cart"
import LoginModal from "@/components/login-modal"
import OrderHistory from "@/components/order-history"
import { useEcommerceStore } from "@/lib/store"
import { sampleProducts } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Package, History, Star, Shield, Truck, Headphones, Award, Users, Globe, Phone, Mail } from "lucide-react"
import { useState } from "react"
import NikeNavigation from "@/components/nike-navigation"

export default function Home() {
  const { setProducts, user } = useEcommerceStore()
  const [currentView, setCurrentView] = useState<"products" | "orders">("products")

  useEffect(() => {
    // Initialize with sample products
    setProducts(sampleProducts)
  }, [setProducts])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Showcase */}
      <BrandShowcase />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ShopEasy?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">Free delivery on orders over $50 worldwide</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Your payment information is always protected</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Only the finest products from trusted brands</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock customer service support</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <Users className="h-4 w-4 mr-1" />
                  Happy Customers
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <Package className="h-4 w-4 mr-1" />
                  Products
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <Globe className="h-4 w-4 mr-1" />
                  Countries
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gray-50">
        <ProductFilters />

        <main className="container mx-auto px-4 py-8">
          {user && (
            <div className="mb-6 flex space-x-2">
              <Button
                variant={currentView === "products" ? "default" : "outline"}
                onClick={() => setCurrentView("products")}
                className="bg-white hover:bg-gray-50"
              >
                <Package className="h-4 w-4 mr-2" />
                Products
              </Button>
              <Button
                variant={currentView === "orders" ? "default" : "outline"}
                onClick={() => setCurrentView("orders")}
                className="bg-white hover:bg-gray-50"
              >
                <History className="h-4 w-4 mr-2" />
                Order History
              </Button>
            </div>
          )}

          {currentView === "products" ? <ProductGrid /> : <OrderHistory />}
        </main>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">ShopEasy</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Your premium destination for quality products at unbeatable prices. We bring you the world's best brands
                with exceptional service.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Categories</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home & Living
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sports & Outdoors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Beauty & Health
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Books & Media
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Customer Service</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  1-800-SHOP-EASY
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  support@shopeasy.com
                </li>
                <li>🕒 Mon-Fri 9AM-6PM EST</li>
                <li>📍 123 Commerce St, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 ShopEasy. All rights reserved. Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <ShoppingCart />
      <LoginModal />
      <NikeNavigation />
    </div>
  )
}

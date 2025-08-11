"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingBag, User } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">P</span>
            </div>
            <span className="font-oswald text-2xl font-bold">PUMA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/men" className="hover:text-gray-300 transition-colors">
              Men
            </Link>
            <Link href="/women" className="hover:text-gray-300 transition-colors">
              Women
            </Link>
            <Link href="/kids" className="hover:text-gray-300 transition-colors">
              Kids
            </Link>
            <Link href="/sports" className="hover:text-gray-300 transition-colors">
              Sports
            </Link>
            <Link href="/lifestyle" className="hover:text-gray-300 transition-colors">
              Lifestyle
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300" />

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link href="/men" className="hover:text-gray-300 transition-colors">
                Men
              </Link>
              <Link href="/women" className="hover:text-gray-300 transition-colors">
                Women
              </Link>
              <Link href="/kids" className="hover:text-gray-300 transition-colors">
                Kids
              </Link>
              <Link href="/sports" className="hover:text-gray-300 transition-colors">
                Sports
              </Link>
              <Link href="/lifestyle" className="hover:text-gray-300 transition-colors">
                Lifestyle
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

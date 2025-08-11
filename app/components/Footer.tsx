import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">P</span>
              </div>
              <span className="font-oswald text-2xl font-bold">PUMA</span>
            </div>
            <p className="text-gray-400 mb-6">Forever Faster. Pushing boundaries in sport and lifestyle since 1948.</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/men" className="hover:text-white transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-white transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="hover:text-white transition-colors">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/sale" className="hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Sports</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/running" className="hover:text-white transition-colors">
                  Running
                </Link>
              </li>
              <li>
                <Link href="/football" className="hover:text-white transition-colors">
                  Football
                </Link>
              </li>
              <li>
                <Link href="/basketball" className="hover:text-white transition-colors">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/motorsport" className="hover:text-white transition-colors">
                  Motorsport
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 PUMA SE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

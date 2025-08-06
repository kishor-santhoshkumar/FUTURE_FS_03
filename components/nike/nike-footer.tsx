import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NikeFooter() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">STAY IN THE LOOP</h3>
            <p className="text-gray-400 mb-6">
              Be the first to know about new releases, exclusive offers, and athlete stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 rounded-full"
              />
              <Button className="bg-white text-black hover:bg-gray-200 font-semibold rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-8 bg-white rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-6 text-black fill-current">
                  <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.525-.616-3.668-1.848C-.618 13.737-.618 12.505.618 11.58c1.237-.925 3.052-1.233 5.423-1.233 1.456 0 3.052.308 4.8.925L24 7.8z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bringing inspiration and innovation to every athlete in the world. If you have a body, you are an athlete.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">PRODUCTS</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-lg font-bold mb-6">SPORTS</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Running
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Football
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Soccer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Skateboarding
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">SUPPORT</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">One Bowerman Drive, Beaverton, OR 97005</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">1-800-344-6453</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">support@nike.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Nike, Inc. All rights reserved</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Settings
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

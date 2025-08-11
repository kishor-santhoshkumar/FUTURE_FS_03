"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">Stay Forever Faster</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Be the first to know about new releases, exclusive offers, and athlete stories
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-white bg-opacity-20 rounded-full px-8 py-4">
              <p className="text-lg font-semibold">Thanks for subscribing! 🎉</p>
            </div>
          </div>
        )}

        <p className="text-sm mt-6 opacity-75">By subscribing, you agree to our Privacy Policy and Terms of Service</p>
      </div>
    </section>
  )
}

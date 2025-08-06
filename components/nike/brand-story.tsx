"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Award, Globe, Zap } from "lucide-react"
import { brandStats, testimonials } from "@/lib/nike-data"

export default function BrandStory() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Brand Story Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8">OUR STORY</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
              Since 1971, Nike has been dedicated to bringing inspiration and innovation to every athlete in the world.
              If you have a body, you are an athlete.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold rounded-full">
              <Play className="h-5 w-5 mr-2" />
              Watch Our Story
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {brandStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Innovation Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-6">INNOVATION NEVER STOPS</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Air Technology</h4>
                  <p className="text-gray-300">Revolutionary cushioning that changed the game forever</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Flyknit Innovation</h4>
                  <p className="text-gray-300">Precision-engineered for the perfect fit and feel</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Sustainable Future</h4>
                  <p className="text-gray-300">Committed to protecting the planet for future athletes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/nike/innovation.jpg"
                alt="Nike Innovation"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-12">ATHLETE VOICES</h3>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                  <Image
                    src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div>
                  <div className="font-bold text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-400">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { heroSlides } from "@/lib/nike-data"

export default function NikeHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentHero.image || "/placeholder.svg"}
          alt={currentHero.title}
          fill
          className="object-cover transition-transform duration-1000 scale-105"
          priority
        />
        <div
          className={`absolute inset-0 ${
            currentHero.theme === "dark"
              ? "bg-gradient-to-r from-black/70 via-black/50 to-transparent"
              : "bg-gradient-to-r from-white/70 via-white/50 to-transparent"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="space-y-6 animate-fade-in">
              <h1
                className={`text-6xl md:text-8xl font-black leading-none ${
                  currentHero.theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {currentHero.title}
              </h1>

              <h2
                className={`text-2xl md:text-4xl font-bold ${
                  currentHero.theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {currentHero.subtitle}
              </h2>

              <p
                className={`text-lg md:text-xl max-w-lg ${
                  currentHero.theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {currentHero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  {currentHero.cta}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className={`px-8 py-4 text-lg font-semibold rounded-full border-2 ${
                    currentHero.theme === "dark"
                      ? "border-white text-white hover:bg-white hover:text-black"
                      : "border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Film
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Auto-play Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 text-white bg-black/20 backdrop-blur-sm hover:bg-black/30"
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </Button>
    </section>
  )
}

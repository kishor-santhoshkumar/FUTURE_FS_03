"use client"

import NikeHeader from "@/components/nike/nike-header"
import NikeHero from "@/components/nike/nike-hero"
import ProductShowcase from "@/components/nike/product-showcase"
import CollectionsGrid from "@/components/nike/collections-grid"
import BrandStory from "@/components/nike/brand-story"
import NikeFooter from "@/components/nike/nike-footer"

export default function NikePage() {
  return (
    <div className="min-h-screen bg-white">
      <NikeHeader />
      <NikeHero />
      <ProductShowcase />
      <CollectionsGrid />
      <BrandStory />
      <NikeFooter />
    </div>
  )
}

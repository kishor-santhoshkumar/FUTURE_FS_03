import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import PremiumCollection from "./components/PremiumCollection"
import TrendingShoes from "./components/TrendingShoes"
import ShoeSpotlight from "./components/ShoeSpotlight"
import BrandStory from "./components/BrandStory"
import Newsletter from "./components/Newsletter"
import CategoryShowcase from "./components/CategoryShowcase"
import SportCategories from "./components/SportCategories"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CategoryShowcase />
      <ShoeSpotlight />
      <FeaturedProducts />
      <PremiumCollection />
      <TrendingShoes />
      <SportCategories />
      <BrandStory />
      <Newsletter />
    </main>
  )
}

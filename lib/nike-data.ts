export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  colors: string[]
  sizes: string[]
  rating: number
  reviews: number
  isNew?: boolean
  isBestseller?: boolean
  tags: string[]
}

export interface Collection {
  id: string
  name: string
  description: string
  image: string
  products: number
  featured?: boolean
}

export const nikeProducts: Product[] = [
  {
    id: "1",
    name: "Air Jordan 1 Retro High OG",
    price: 14199,
    image: "/nike/air-jordan-1.jpg",
    category: "Basketball",
    description:
      "The Air Jordan 1 Retro High OG brings back the classic silhouette with premium materials and iconic colorways.",
    colors: ["Black/Red", "White/Black", "Royal Blue"],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    rating: 4.8,
    reviews: 2847,
    isBestseller: true,
    tags: ["Basketball", "Retro", "Iconic"],
  },
  {
    id: "2",
    name: "Nike Air Max 270",
    price: 12499,
    originalPrice: 14999,
    image: "/nike/air-max-270.jpg",
    category: "Lifestyle",
    description: "Nike's biggest heel Air unit yet delivers exceptional comfort and bold style for everyday wear.",
    colors: ["Black/White", "Triple White", "Navy/Orange"],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
    rating: 4.6,
    reviews: 1923,
    tags: ["Comfort", "Lifestyle", "Air Max"],
  },
  {
    id: "3",
    name: "Nike Dunk Low",
    price: 8349,
    image: "/nike/dunk-low.jpg",
    category: "Lifestyle",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low returns with crisp overlays and original team colors.",
    colors: ["White/Black", "University Blue", "Medium Grey"],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
    rating: 4.7,
    reviews: 3421,
    isNew: true,
    tags: ["Skateboarding", "Retro", "Street"],
  },
  {
    id: "4",
    name: "Nike Air Force 1 '07",
    price: 7499,
    image: "/nike/air-force-1.jpg",
    category: "Lifestyle",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    colors: ["Triple White", "Triple Black", "White/Gum"],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13"],
    rating: 4.9,
    reviews: 5672,
    isBestseller: true,
    tags: ["Classic", "Basketball", "Versatile"],
  },
  {
    id: "5",
    name: "Nike React Infinity Run Flyknit 3",
    price: 13349,
    image: "/nike/react-infinity.jpg",
    category: "Running",
    description: "A soft, stable ride that helps keep you running. More foam means better cushioning and durability.",
    colors: ["Black/White", "Pure Platinum", "Volt/Black"],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
    rating: 4.5,
    reviews: 892,
    tags: ["Running", "Performance", "Comfort"],
  },
  {
    id: "6",
    name: "Nike Blazer Mid '77 Vintage",
    price: 8349,
    image: "/nike/blazer-mid.jpg",
    category: "Lifestyle",
    description:
      "In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene.",
    colors: ["White/Black", "All White", "Habanero Red"],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
    rating: 4.4,
    reviews: 1456,
    tags: ["Vintage", "Basketball", "Retro"],
  },
]

export const nikeCollections: Collection[] = [
  {
    id: "1",
    name: "Air Jordan",
    description: "The most iconic basketball shoes ever created",
    image: "/nike/collection-jordan.jpg",
    products: 45,
    featured: true,
  },
  {
    id: "2",
    name: "Air Max",
    description: "Visible Air cushioning technology",
    image: "/nike/collection-airmax.jpg",
    products: 32,
    featured: true,
  },
  {
    id: "3",
    name: "Running",
    description: "Performance footwear for every runner",
    image: "/nike/collection-running.jpg",
    products: 28,
    featured: true,
  },
  {
    id: "4",
    name: "Basketball",
    description: "Dominate the court with premium performance",
    image: "/nike/collection-basketball.jpg",
    products: 24,
  },
]

export const heroSlides = [
  {
    id: 1,
    title: "Just Do It",
    subtitle: "Find Your Greatness",
    description: "Discover the latest innovations in athletic footwear and apparel",
    image: "/nike/hero-1.jpg",
    cta: "Shop Now",
    theme: "dark",
  },
  {
    id: 2,
    title: "Air Jordan Legacy",
    subtitle: "Legendary Performance",
    description: "Experience the heritage and innovation of Air Jordan",
    image: "/nike/hero-2.jpg",
    cta: "Explore Collection",
    theme: "light",
  },
  {
    id: 3,
    title: "Innovation Never Stops",
    subtitle: "Next-Gen Technology",
    description: "Pushing the boundaries of athletic performance",
    image: "/nike/hero-3.jpg",
    cta: "Discover More",
    theme: "dark",
  },
]

export const brandStats = [
  { label: "Countries", value: "190+", icon: "🌍" },
  { label: "Athletes", value: "1000+", icon: "🏃" },
  { label: "Years of Innovation", value: "50+", icon: "⚡" },
  { label: "Products Sold", value: "1B+", icon: "👟" },
]

export const testimonials = [
  {
    id: 1,
    name: "LeBron James",
    role: "NBA Champion",
    content: "Nike has been my partner in achieving greatness. The innovation and quality are unmatched.",
    avatar: "/nike/athlete-lebron.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Serena Williams",
    role: "Tennis Legend",
    content: "Every Nike product is designed with the athlete in mind. That's why I trust them on and off the court.",
    avatar: "/nike/athlete-serena.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Cristiano Ronaldo",
    role: "Football Icon",
    content: "Nike understands what it takes to perform at the highest level. Their gear gives me the edge I need.",
    avatar: "/nike/athlete-ronaldo.jpg",
    rating: 5,
  },
]

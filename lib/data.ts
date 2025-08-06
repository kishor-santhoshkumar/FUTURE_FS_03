import type { Product } from "./store"

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 349.99,
    image: "/products/headphones-sony.jpg",
    category: "electronics",
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Up to 30-hour battery life with quick charge.",
    stock: 25,
    rating: 4.8,
    reviews: 2847,
  },
  {
    id: "2",
    name: "iPhone 15 Pro Titanium Case",
    price: 59.99,
    image: "/products/iphone-case.jpg",
    category: "electronics",
    description:
      "Premium titanium finish with MagSafe compatibility. Drop protection up to 12 feet with military-grade materials.",
    stock: 150,
    rating: 4.6,
    reviews: 1203,
  },
  {
    id: "3",
    name: "Organic Cotton Premium T-Shirt",
    price: 29.99,
    image: "/products/cotton-tshirt.jpg",
    category: "clothing",
    description: "100% GOTS certified organic cotton. Soft, breathable, and sustainably made. Perfect fit guaranteed.",
    stock: 200,
    rating: 4.4,
    reviews: 892,
  },
  {
    id: "4",
    name: "Nike Air Max 270 Running Shoes",
    price: 149.99,
    image: "/products/nike-shoes.jpg",
    category: "clothing",
    description:
      "Max Air unit delivers exceptional cushioning. Engineered mesh upper for breathability and modern style.",
    stock: 75,
    rating: 4.7,
    reviews: 3421,
  },
  {
    id: "5",
    name: "Breville Barista Express Coffee Machine",
    price: 699.99,
    image: "/products/coffee-machine.jpg",
    category: "home",
    description:
      "Built-in conical burr grinder with dose control. 15 bar Italian pump for optimal espresso extraction.",
    stock: 12,
    rating: 4.9,
    reviews: 567,
  },
  {
    id: "6",
    name: "Philips Hue Smart LED Desk Lamp",
    price: 199.99,
    image: "/products/desk-lamp.jpg",
    category: "home",
    description: "16 million colors, voice control compatible. Wireless charging base and app-controlled brightness.",
    stock: 45,
    rating: 4.5,
    reviews: 734,
  },
  {
    id: "7",
    name: "Apple Watch Series 9 GPS",
    price: 399.99,
    image: "/products/apple-watch.jpg",
    category: "electronics",
    description: "Advanced health monitoring, ECG app, blood oxygen sensor. All-day battery life with fast charging.",
    stock: 30,
    rating: 4.8,
    reviews: 4156,
  },
  {
    id: "8",
    name: "Peak Design Everyday Backpack",
    price: 279.99,
    image: "/products/backpack.jpg",
    category: "clothing",
    description:
      "Weather-resistant shell, modular organization. Lifetime warranty with premium materials and craftsmanship.",
    stock: 28,
    rating: 4.9,
    reviews: 1876,
  },
  {
    id: "9",
    name: "MacBook Pro 16-inch M3 Pro",
    price: 2499.99,
    image: "/products/macbook-pro.jpg",
    category: "electronics",
    description: "M3 Pro chip with 12-core CPU. 18GB unified memory, 512GB SSD. Liquid Retina XDR display.",
    stock: 8,
    rating: 4.9,
    reviews: 892,
  },
  {
    id: "10",
    name: "Levi's 501 Original Jeans",
    price: 89.99,
    image: "/products/levis-jeans.jpg",
    category: "clothing",
    description:
      "The original blue jean since 1873. Straight fit, button fly, classic 5-pocket styling. 100% cotton denim.",
    stock: 120,
    rating: 4.3,
    reviews: 2341,
  },
  {
    id: "11",
    name: "Dyson V15 Detect Cordless Vacuum",
    price: 749.99,
    image: "/products/dyson-vacuum.jpg",
    category: "home",
    description: "Laser reveals microscopic dust. Intelligent suction adjustment. Up to 60 minutes of fade-free power.",
    stock: 15,
    rating: 4.7,
    reviews: 1456,
  },
  {
    id: "12",
    name: "Ray-Ban Aviator Classic Sunglasses",
    price: 154.99,
    image: "/products/rayban-sunglasses.jpg",
    category: "clothing",
    description:
      "Iconic teardrop shape, crystal lenses with 100% UV protection. Gold-tone metal frame with adjustable nose pads.",
    stock: 85,
    rating: 4.6,
    reviews: 3247,
  },
]

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Fashion & Accessories" },
  { value: "home", label: "Home & Living" },
]

export const sortOptions = [
  { value: "name", label: "Name A-Z" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
]

// Featured categories for homepage
export const featuredCategories = [
  {
    name: "Electronics",
    image: "/categories/electronics.jpg",
    description: "Latest tech gadgets and devices",
    itemCount: "500+ items",
  },
  {
    name: "Fashion",
    image: "/categories/fashion.jpg",
    description: "Trendy clothing and accessories",
    itemCount: "1200+ items",
  },
  {
    name: "Home & Living",
    image: "/categories/home-living.jpg",
    description: "Everything for your home",
    itemCount: "800+ items",
  },
]

// Hero banner data
export const heroBanners = [
  {
    id: 1,
    title: "Summer Sale",
    subtitle: "Up to 70% off on selected items",
    image: "/hero/summer-sale.jpg",
    cta: "Shop Now",
    link: "#products",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Discover the latest trends",
    image: "/hero/new-arrivals.jpg",
    cta: "Explore",
    link: "#products",
  },
  {
    id: 3,
    title: "Premium Collection",
    subtitle: "Luxury items for discerning customers",
    image: "/hero/premium-collection.jpg",
    cta: "View Collection",
    link: "#products",
  },
]

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
    rating: 5,
    comment: "Amazing quality products and super fast delivery! Will definitely shop here again.",
    product: "Sony WH-1000XM4 Headphones",
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
    rating: 5,
    comment: "The customer service is outstanding. They helped me find exactly what I needed.",
    product: "MacBook Pro 16-inch",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "/placeholder.svg?height=60&width=60&text=ED",
    rating: 4,
    comment: "Great selection and competitive prices. The website is easy to navigate too.",
    product: "Nike Air Max 270",
  },
]

// Brand logos for trust indicators
export const brandLogos = [
  { name: "Apple", logo: "/placeholder.svg?height=40&width=80&text=Apple" },
  { name: "Sony", logo: "/placeholder.svg?height=40&width=80&text=Sony" },
  { name: "Nike", logo: "/placeholder.svg?height=40&width=80&text=Nike" },
  { name: "Samsung", logo: "/placeholder.svg?height=40&width=80&text=Samsung" },
  { name: "Dyson", logo: "/placeholder.svg?height=40&width=80&text=Dyson" },
  { name: "Levi's", logo: "/placeholder.svg?height=40&width=80&text=Levis" },
]

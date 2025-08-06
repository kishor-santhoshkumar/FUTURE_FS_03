import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  stock: number
  rating: number
  reviews: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  date: string
  shippingAddress: {
    name: string
    address: string
    city: string
    zipCode: string
    country: string
  }
}

interface EcommerceState {
  // Products
  products: Product[]
  filteredProducts: Product[]
  searchQuery: string
  selectedCategory: string
  priceRange: [number, number]
  sortBy: string

  // Cart
  cart: CartItem[]
  isCartOpen: boolean

  // User & Auth
  user: User | null
  isLoginOpen: boolean

  // Orders
  orders: Order[]

  // Actions
  setProducts: (products: Product[]) => void
  setSearchQuery: (query: string) => void
  setSelectedCategory: (category: string) => void
  setPriceRange: (range: [number, number]) => void
  setSortBy: (sortBy: string) => void
  filterProducts: () => void

  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  setCartOpen: (open: boolean) => void

  setUser: (user: User | null) => void
  setLoginOpen: (open: boolean) => void

  addOrder: (order: Order) => void

  getCartTotal: () => number
  getCartItemsCount: () => number
}

export const useEcommerceStore = create<EcommerceState>()(
  persist(
    (set, get) => ({
      // Initial state
      products: [],
      filteredProducts: [],
      searchQuery: "",
      selectedCategory: "all",
      priceRange: [0, 1000],
      sortBy: "name",

      cart: [],
      isCartOpen: false,

      user: null,
      isLoginOpen: false,

      orders: [],

      // Actions
      setProducts: (products) => {
        set({ products, filteredProducts: products })
        get().filterProducts()
      },

      setSearchQuery: (searchQuery) => {
        set({ searchQuery })
        get().filterProducts()
      },

      setSelectedCategory: (selectedCategory) => {
        set({ selectedCategory })
        get().filterProducts()
      },

      setPriceRange: (priceRange) => {
        set({ priceRange })
        get().filterProducts()
      },

      setSortBy: (sortBy) => {
        set({ sortBy })
        get().filterProducts()
      },

      filterProducts: () => {
        const { products, searchQuery, selectedCategory, priceRange, sortBy } = get()

        const filtered = products.filter((product) => {
          const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
          const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
          const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

          return matchesSearch && matchesCategory && matchesPrice
        })

        // Sort products
        filtered.sort((a, b) => {
          switch (sortBy) {
            case "price-low":
              return a.price - b.price
            case "price-high":
              return b.price - a.price
            case "rating":
              return b.rating - a.rating
            case "name":
            default:
              return a.name.localeCompare(b.name)
          }
        })

        set({ filteredProducts: filtered })
      },

      addToCart: (product) => {
        const { cart } = get()
        const existingItem = cart.find((item) => item.id === product.id)

        if (existingItem) {
          set({
            cart: cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
          })
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] })
        }
      },

      removeFromCart: (productId) => {
        set({ cart: get().cart.filter((item) => item.id !== productId) })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }

        set({
          cart: get().cart.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        })
      },

      clearCart: () => set({ cart: [] }),

      setCartOpen: (isCartOpen) => set({ isCartOpen }),

      setUser: (user) => set({ user }),

      setLoginOpen: (isLoginOpen) => set({ isLoginOpen }),

      addOrder: (order) => {
        set({ orders: [order, ...get().orders] })
      },

      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getCartItemsCount: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: "ecommerce-store",
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
        orders: state.orders,
      }),
    },
  ),
)

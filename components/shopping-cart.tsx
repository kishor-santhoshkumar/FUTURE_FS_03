"use client"

import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEcommerceStore } from "@/lib/store"
import { formatPrice } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import CheckoutForm from "./checkout-form"

export default function ShoppingCart() {
  const { cart, isCartOpen, setCartOpen, updateQuantity, removeFromCart, getCartTotal, clearCart } = useEcommerceStore()

  const [showCheckout, setShowCheckout] = useState(false)

  if (!isCartOpen) return null

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleBackToCart = () => {
    setShowCheckout(false)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setCartOpen(false)}>
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">{showCheckout ? "Checkout" : "Shopping Cart"}</h2>
            <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {showCheckout ? (
            <CheckoutForm onBack={handleBackToCart} />
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground">Add some products to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>

                          <Badge variant="secondary" className="min-w-[2rem] text-center">
                            {item.quantity}
                          </Badge>

                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>{formatPrice(getCartTotal())}</span>
                  </div>

                  <div className="space-y-2">
                    <Button onClick={handleCheckout} className="w-full">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" onClick={clearCart} className="w-full bg-transparent">
                      Clear Cart
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

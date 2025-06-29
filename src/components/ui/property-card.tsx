"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Star } from "lucide-react"
import Image from "next/image"

interface Property {
  id: string
  title: string
  location: string
  price: number
  rating: number
  images: string[]
  host: string
  type: string
}

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))
  }

  return (
    <motion.div className="group cursor-pointer" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <div className="relative mb-3 rounded-2xl aspect-square overflow-hidden">
        <Image
          src={property.images[currentImageIndex] || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="top-1/2 left-2 absolute flex justify-center items-center bg-white/80 opacity-0 group-hover:opacity-100 rounded-full w-8 h-8 transition-opacity -translate-y-1/2"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="top-1/2 right-2 absolute flex justify-center items-center bg-white/80 opacity-0 group-hover:opacity-100 rounded-full w-8 h-8 transition-opacity -translate-y-1/2"
            >
              →
            </button>
          </>
        )}

        {/* Like Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}
          className="top-3 right-3 absolute flex justify-center items-center bg-white/20 backdrop-blur-sm rounded-full w-8 h-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-rose-500 text-rose-500" : "text-white"}`} />
        </motion.button>

        {/* Image Indicators */}
        {property.images.length > 1 && (
          <div className="bottom-3 left-1/2 absolute flex space-x-1 -translate-x-1/2">
            {property.images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-foreground truncate">{property.title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="fill-current w-4 h-4 text-foreground" />
            <span className="text-foreground text-sm">{property.rating}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{property.location}</p>
        <p className="text-muted-foreground text-sm">{property.host}</p>
        <p className="font-medium text-foreground">
          ${property.price} <span className="font-normal text-muted-foreground">night</span>
        </p>
      </div>
    </motion.div>
  )
}

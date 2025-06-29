"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Star, MapPin, Users } from "lucide-react"
import Image from "next/image"

interface Destination {
  id: string
  name: string
  country: string
  image: string
  rating: number
  reviews: number
  price: number
  description: string
  travelers: number
}

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <div className="relative bg-muted mb-4 rounded-3xl aspect-[4/5] overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Loading Shimmer */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Like Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}
          className="top-4 right-4 absolute flex justify-center items-center bg-background/80 backdrop-blur-sm border border-border/50 rounded-full w-10 h-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isLiked ? "fill-rose-500 text-rose-500" : "text-foreground/70"
            }`}
          />
        </motion.button>

        {/* Rating Badge */}
        <motion.div
          className="top-4 left-4 absolute flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-3 py-1.5 border border-border/50 rounded-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Star className="fill-amber-400 w-3 h-3 text-amber-400" />
          <span className="font-medium text-foreground text-xs">{destination.rating}</span>
        </motion.div>

        {/* Bottom Info Overlay */}
        <motion.div
          className="right-0 bottom-0 left-0 absolute opacity-0 group-hover:opacity-100 p-6 text-white transition-all duration-300"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="font-medium text-sm">{destination.country}</span>
          </div>
          <p className="opacity-90 text-sm line-clamp-2">{destination.description}</p>
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-foreground group-hover:text-emerald-600 text-lg transition-colors duration-300">
              {destination.name}
            </h3>
            <p className="text-muted-foreground text-sm">{destination.country}</p>
          </div>
          <div className="text-right">
            <div className="font-bold text-foreground text-lg">${destination.price}</div>
            <div className="text-muted-foreground text-xs">per night</div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{destination.travelers.toLocaleString()} travelers</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <span>{destination.reviews} reviews</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

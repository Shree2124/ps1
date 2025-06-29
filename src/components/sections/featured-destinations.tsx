"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import DestinationCard from "@/components/ui/destination-card"
import DestinationSkeleton from "@/components/ui/destination-skeleton"
import { featuredDestinations } from "@/lib/data"

export default function FeaturedDestinations() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="mx-auto px-6 lg:px-8 py-20 max-w-8xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <motion.h2
              className="mb-4 font-bold text-foreground text-4xl sm:text-5xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Trending Destinations
            </motion.h2>
            <motion.p
              className="max-w-2xl text-muted-foreground text-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Discover the most popular destinations loved by travelers worldwide
            </motion.p>
          </div>

          <motion.button
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg px-6 py-3 rounded-full font-medium text-white transition-all duration-300"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Destinations Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => <DestinationSkeleton key={index} />)
            : featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <DestinationCard destination={destination} />
                </motion.div>
              ))}
        </div>
      </motion.div>
    </section>
  )
}

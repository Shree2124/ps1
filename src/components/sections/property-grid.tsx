"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import PropertyCard from "@/components/ui/property-card"
import PropertyCardSkeleton from "@/components/ui/property-card-skeleton"
import { properties } from "@/lib/data"

export default function PropertyGrid() {
  const [isLoading, setIsLoading] = useState(true)
  const [visibleProperties, setVisibleProperties] = useState(8)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const loadMore = () => {
    setVisibleProperties((prev) => prev + 8)
  }

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 font-bold text-foreground text-3xl">Trending destinations</h2>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => <PropertyCardSkeleton key={index} />)
            : properties.slice(0, visibleProperties).map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
        </div>

        {!isLoading && visibleProperties < properties.length && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={loadMore}
              className="bg-foreground hover:bg-foreground/90 px-8 py-3 rounded-full font-medium text-background transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show more
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

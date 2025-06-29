"use client"

import { motion } from "framer-motion"
import { travelCategories } from "@/lib/data"
import TravelCategoryCard from "@/components/ui/travel-category-card"

export default function TravelInspiration() {
  return (
    <section className="mx-auto px-6 lg:px-8 py-20 max-w-8xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-6 font-bold text-foreground text-4xl sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Travel Inspiration
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get inspired for your next adventure with these curated travel ideas
          </motion.p>
        </div>

        <div className="gap-12 grid grid-cols-1 lg:grid-cols-3">
          {travelCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TravelCategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { categories } from "@/lib/data"
import CategoryCard from "@/components/ui/category-card"

export default function Categories() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 font-bold text-foreground text-3xl">Browse by category</h2>

        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

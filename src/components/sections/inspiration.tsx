"use client"

import { motion } from "framer-motion"
import { inspirationCategories } from "@/lib/data"

export default function Inspiration() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 font-bold text-foreground text-3xl">Inspiration for future getaways</h2>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {inspirationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 font-semibold text-foreground text-lg">{category.title}</h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    className="group flex justify-between items-center py-2 border-b border-border last:border-b-0 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-foreground group-hover:text-rose-500 transition-colors">{item.name}</span>
                    <span className="text-muted-foreground text-sm">{item.location}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

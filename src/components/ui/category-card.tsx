"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Category {
  id: string
  name: string
  icon: string
  image: string
}

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative mb-2 rounded-xl aspect-square overflow-hidden">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-4xl">{category.icon}</span>
        </div>
      </div>
      <h3 className="font-medium text-foreground group-hover:text-rose-500 text-sm text-center transition-colors">
        {category.name}
      </h3>
    </motion.div>
  )
}

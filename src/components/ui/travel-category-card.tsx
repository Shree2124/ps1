"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TravelCategory {
  title: string
  items: Array<{
    name: string
    location: string
    image: string
  }>
}

interface TravelCategoryCardProps {
  category: TravelCategory
}

export default function TravelCategoryCard({ category }: TravelCategoryCardProps) {
  return (
    <div>
      <h3 className="mb-6 font-bold text-foreground text-2xl">{category.title}</h3>
      <div className="space-y-4">
        {category.items.map((item, index) => (
          <motion.div
            key={item.name}
            className="group cursor-pointer"
            whileHover={{ x: 4 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 hover:bg-muted/50 p-4 rounded-xl transition-all duration-300">
              <div className="relative flex-shrink-0 rounded-lg w-16 h-16 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-muted-foreground text-sm">{item.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

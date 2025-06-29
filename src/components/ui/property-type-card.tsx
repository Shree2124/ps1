"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface PropertyType {
  id: string
  name: string
  icon: string
  image: string
  count: number
}

interface PropertyTypeCardProps {
  type: PropertyType
}

export default function PropertyTypeCard({ type }: PropertyTypeCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <div className="relative mb-4 rounded-2xl aspect-[4/3] overflow-hidden">
        <Image
          src={type?.image || "/placeholder.svg"}
          alt={type?.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Icon */}
        <div className="top-4 left-4 absolute text-3xl">{type.icon}</div>

        {/* Content */}
        <div className="right-4 bottom-4 left-4 absolute text-white">
          <h3 className="mb-1 font-bold text-xl">{type.name}</h3>
          <p className="opacity-90 text-sm">{type.count.toLocaleString()} properties</p>
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="right-4 bottom-4 absolute flex justify-center items-center bg-white/20 opacity-0 group-hover:opacity-100 backdrop-blur-sm rounded-full w-10 h-10"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </motion.div>
  )
}

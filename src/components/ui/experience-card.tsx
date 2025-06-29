"use client"

import { motion } from "framer-motion"
import { Star, Clock } from "lucide-react"
import Image from "next/image"

interface Experience {
  id: string
  title: string
  description: string
  image: string
  price: number
  duration: string
  rating: number
}

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.div
      className="group bg-background shadow-sm hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={experience.image || "/placeholder.svg"}
          alt={experience.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="top-3 right-3 absolute flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star className="fill-amber-400 w-3 h-3 text-amber-400" />
          <span className="font-medium text-xs">{experience.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 font-bold text-foreground group-hover:text-emerald-600 text-lg transition-colors">
          {experience.title}
        </h3>
        <p className="mb-4 text-muted-foreground text-sm line-clamp-2">{experience.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{experience.duration}</span>
          </div>
          <div className="font-bold text-foreground">${experience.price}</div>
        </div>
      </div>
    </motion.div>
  )
}

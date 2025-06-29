"use client"

import { motion } from "framer-motion"

export default function PropertyCardSkeleton() {
  return (
    <motion.div
      className="animate-pulse"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-muted mb-3 rounded-2xl aspect-square" />
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="bg-muted rounded w-3/4 h-4" />
          <div className="bg-muted rounded w-12 h-4" />
        </div>
        <div className="bg-muted rounded w-1/2 h-3" />
        <div className="bg-muted rounded w-2/3 h-3" />
        <div className="bg-muted rounded w-1/3 h-4" />
      </div>
    </motion.div>
  )
}

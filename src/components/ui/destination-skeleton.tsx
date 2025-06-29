"use client"

import { motion } from "framer-motion"

export default function DestinationSkeleton() {
  return (
    <motion.div
      className="animate-pulse"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-muted mb-4 rounded-3xl aspect-[4/5]" />
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="bg-muted rounded w-32 h-5" />
            <div className="bg-muted rounded w-24 h-4" />
          </div>
          <div className="space-y-2">
            <div className="bg-muted rounded w-16 h-5" />
            <div className="bg-muted rounded w-12 h-3" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-muted rounded w-28 h-4" />
          <div className="bg-muted rounded w-20 h-4" />
        </div>
      </div>
    </motion.div>
  )
}

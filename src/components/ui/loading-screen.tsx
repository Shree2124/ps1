"use client"

import { motion } from "framer-motion"
import WanderlustLogo from "@/components/ui/wanderlust-logo"

export default function LoadingScreen() {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-gradient-to-br from-emerald-50 dark:from-emerald-950 via-teal-50 dark:via-teal-950 to-cyan-50 dark:to-cyan-950">
      <div className="text-center">
        {/* Main Logo with Animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
        >
          <WanderlustLogo size="xl" showText={true} animated={true} />
        </motion.div>

        {/* Pulsing Rings Around Logo */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-emerald-500/20 rounded-full"
              style={{
                width: `${120 + i * 40}px`,
                height: `${120 + i * 40}px`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex justify-center space-x-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-2 h-2"
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="space-y-2"
        >
          <p className="text-muted-foreground text-sm">Preparing your next adventure...</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="bg-muted mx-auto mt-6 rounded-full w-48 h-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full h-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
          />
        </motion.div>

        {/* Floating Travel Elements */}
        <motion.div
          className="top-20 left-20 absolute opacity-30 text-2xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          ✈️
        </motion.div>
        <motion.div
          className="top-32 right-24 absolute opacity-30 text-xl"
          animate={{
            y: [0, 12, 0],
            rotate: [0, -8, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        >
          🏖️
        </motion.div>
        <motion.div
          className="bottom-32 left-28 absolute opacity-30 text-xl"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          🏔️
        </motion.div>
        <motion.div
          className="right-20 bottom-20 absolute opacity-30 text-xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -12, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
        >
          🗺️
        </motion.div>
      </div>
    </div>
  )
}

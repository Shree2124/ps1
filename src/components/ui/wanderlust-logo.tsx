"use client"

import { motion } from "framer-motion"

interface AirbnbLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  animated?: boolean
  className?: string
}

export default function AirbnbLogo({
  size = "md",
  showText = true,
  animated = false,
  className = "",
}: AirbnbLogoProps) {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-xl" },
    md: { icon: "w-10 h-10", text: "text-2xl" },
    lg: { icon: "w-16 h-16", text: "text-3xl" },
    xl: { icon: "w-20 h-20", text: "text-4xl" },
  }

  const LogoIcon = () => (
    <motion.div
      className={`${sizes[size].icon} relative flex items-center justify-center ${className}`}
      animate={
        animated
          ? {
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }
          : {}
      }
      transition={
        animated
          ? {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
          : {}
      }
    >
      {/* Main compass/travel symbol */}
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Outer compass ring */}
        <motion.circle
          cx="16"
          cy="16"
          r="14"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Inner compass points */}
        <motion.path
          d="M16 4 L18 14 L16 16 L14 14 Z"
          fill="url(#gradient2)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.path
          d="M28 16 L18 18 L16 16 L18 14 Z"
          fill="url(#gradient2)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        <motion.path
          d="M16 28 L14 18 L16 16 L18 18 Z"
          fill="url(#gradient2)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
        <motion.path
          d="M4 16 L14 14 L16 16 L14 18 Z"
          fill="url(#gradient2)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        />

        {/* Center "A" symbol (stylized A for Airbnb) - WHITE COLOR */}
        <motion.path
          d="M12 20 L14 14 L16 10 L18 14 L20 20 M13.5 17 L18.5 17"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.3, duration: 1.5, ease: "easeInOut" }}
        />

        {/* Center dot/peak of A - WHITE COLOR */}
        <motion.circle
          cx="16"
          cy="10"
          r="2"
          fill="#ffffff"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 300 }}
        />

        {/* Additional decorative elements for travel theme */}
        <motion.path
          d="M10 8 Q16 6 22 8"
          stroke="url(#gradient4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M10 24 Q16 26 22 24"
          stroke="url(#gradient4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ delay: 2.7, duration: 1, ease: "easeInOut" }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )

  return (
    <div className="flex items-center space-x-3">
      <LogoIcon />
      {showText && (
        <motion.span
          className={`font-bold text-foreground ${sizes[size].text}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: animated ? 2.5 : 0, duration: 0.8 }}
        >
          airbnb
        </motion.span>
      )}
    </div>
  )
}

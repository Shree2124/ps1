"use client"

import { motion } from "framer-motion"
import { Search, MapPin, Calendar, Users, Sparkles, Heart } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center pt-20 lg:pt-24 min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 dark:from-emerald-950/30 via-teal-50 dark:via-teal-950/30 to-cyan-50 dark:to-cyan-950/30" />

        {/* Animated Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20 blur-3xl rounded-full"
            style={{
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? "#10b981, #06b6d4" : i % 3 === 1 ? "#0891b2, #0d9488" : "#059669, #0e7490"
              })`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${10 + i * 12}%`,
              top: `${5 + i * 8}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.3, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Elements */}
        <motion.div
          className="top-20 left-20 absolute text-4xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          ✈️
        </motion.div>
        <motion.div
          className="top-40 right-32 absolute text-3xl"
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        >
          🏖️
        </motion.div>
        <motion.div
          className="bottom-40 left-32 absolute text-3xl"
          animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          🏔️
        </motion.div>
      </div>

      <div className="z-10 relative mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-md mb-8 px-6 py-3 border border-border/50 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="font-medium text-foreground text-sm">Discover Amazing Places</span>
            <Heart className="w-4 h-4 text-rose-500" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="mb-8 font-bold text-5xl sm:text-7xl lg:text-8xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-foreground">Your next</span>
            <br />
            <motion.span
              className="bg-clip-text bg-gradient-to-r from-emerald-600 dark:from-emerald-400 via-teal-600 dark:via-teal-400 to-cyan-600 dark:to-cyan-400 text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              adventure
            </motion.span>
            <br />
            <span className="text-foreground">awaits</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-muted-foreground text-xl sm:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore unique stays, unforgettable experiences, and hidden gems across the globe. Your perfect getaway is
            just a search away.
          </motion.p>

          {/* Enhanced Search Interface */}
          <motion.div
            className="bg-background/90 shadow-2xl backdrop-blur-xl mx-auto p-3 border border-border/50 rounded-3xl max-w-5xl"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="gap-3 grid grid-cols-1 lg:grid-cols-4">
              {[
                { icon: MapPin, title: "Where to?", subtitle: "Search destinations", color: "emerald" },
                { icon: Calendar, title: "Check in", subtitle: "Add dates", color: "teal" },
                { icon: Calendar, title: "Check out", subtitle: "Add dates", color: "cyan" },
                { icon: Users, title: "Guests", subtitle: "Add guests", color: "emerald" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group flex items-center space-x-4 hover:bg-muted/30 p-6 rounded-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 group-hover:from-${item.color}-500/30 group-hover:to-${item.color}-600/30 transition-all duration-300`}
                  >
                    <item.icon className={`w-5 h-5 text-${item.color}-600 dark:text-${item.color}-400`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-foreground text-sm">{item.title}</div>
                    <div className="text-muted-foreground text-sm">{item.subtitle}</div>
                  </div>
                  {index === 3 && (
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 ml-4 p-4 rounded-2xl cursor-pointer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Search className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { number: "2M+", label: "Happy Travelers" },
              { number: "50K+", label: "Unique Stays" },
              { number: "190+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <div className="bg-clip-text bg-gradient-to-r from-emerald-600 dark:from-emerald-400 to-teal-600 dark:to-teal-400 font-bold text-transparent text-2xl sm:text-3xl">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/layouts/navbar"
import Hero from "@/components/sections/hero"
import FeaturedDestinations from "@/components/sections/featured-destinations"
import PropertyShowcase from "@/components/sections/property-showcase"
import ExperienceCategories from "@/components/sections/experience-categories"
import TravelInspiration from "@/components/sections/travel-inspiration"
import Footer from "@/components/layouts/footer"
import LoadingScreen from "@/components/ui/loading-screen"
import { ThemeContextProvider } from "@/context/theme-context"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ThemeContextProvider>
      <div className="bg-background min-h-screen transition-colors duration-300">
        <Navbar />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Hero />
          <FeaturedDestinations />
          <PropertyShowcase />
          <ExperienceCategories />
          <TravelInspiration />
        </motion.main>
        <Footer />
      </div>
    </ThemeContextProvider>
  )
}

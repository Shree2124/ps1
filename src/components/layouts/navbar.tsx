"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, User, Globe, Moon, Sun, MapPin, Calendar, Users } from "lucide-react"
import { useTheme } from "@/context/theme-context"
import SearchModal from "@/components/modals/search"
import UserMenu from "@/components/ui/user-menu"
import WanderlustLogo from "@/components/ui/wanderlust-logo"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("stays")
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navTabs = [
    { id: "stays", label: "Stays", icon: "🏠" },
    { id: "experiences", label: "Experiences", icon: "🎯" },
    { id: "adventures", label: "Adventures", icon: "🏔️" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <WanderlustLogo size="md" showText={true} className="hidden sm:flex" />
              <WanderlustLogo size="md" showText={false} className="sm:hidden flex" />
            </motion.div>

            {/* Navigation Tabs - Desktop */}
            <div className="hidden lg:flex items-center bg-background/80 shadow-sm backdrop-blur-md p-1 border border-border/50 rounded-full">
              {navTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                    activeTab === tab.id ? "text-white" : "text-foreground/70 hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center space-x-1">
                    <span className="text-xs">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <motion.div
              className="hidden xl:flex items-center bg-background/90 shadow-sm hover:shadow-md backdrop-blur-md border border-border/50 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-1 px-4 py-2">
                <MapPin className="w-3 h-3 text-emerald-500" />
                <span className="font-medium text-foreground text-sm">Anywhere</span>
              </div>
              <div className="bg-border/50 w-px h-6" />
              <div className="flex items-center space-x-1 px-4 py-2">
                <Calendar className="w-3 h-3 text-emerald-500" />
                <span className="font-medium text-foreground text-sm">Any week</span>
              </div>
              <div className="bg-border/50 w-px h-6" />
              <div className="flex items-center space-x-1 px-4 py-2">
                <Users className="w-3 h-3 text-emerald-500" />
                <span className="text-muted-foreground text-sm">Add guests</span>
              </div>
              <motion.div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 m-1 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="bg-background/80 hover:bg-muted/50 backdrop-blur-md p-2 border border-border/50 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-4 h-4 text-amber-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-4 h-4 text-slate-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Become a Host */}
              <motion.button
                className="hidden md:block hover:bg-muted/50 px-3 py-2 border border-border/50 rounded-full font-medium text-foreground text-sm transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Host
              </motion.button>

              {/* Language */}
              <motion.button
                className="bg-background/80 hover:bg-muted/50 backdrop-blur-md p-2 border border-border/50 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Globe className="w-4 h-4 text-foreground" />
              </motion.button>

              {/* User Menu */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-background/80 hover:shadow-md backdrop-blur-md p-1.5 border border-border/50 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Menu className="ml-1 w-4 h-4 text-foreground" />
                  <div className="flex justify-center items-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full w-7 h-7">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </motion.button>
                <UserMenu isOpen={isUserMenuOpen} onClose={() => setIsUserMenuOpen(false)} />
              </div>

              {/* Mobile Search */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                className="xl:hidden bg-background/80 hover:bg-muted/50 backdrop-blur-md p-2 border border-border/50 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-4 h-4 text-foreground" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

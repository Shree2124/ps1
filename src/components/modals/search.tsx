"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Calendar, Users, Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="z-50 fixed inset-0 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative bg-background shadow-2xl p-8 border border-border/50 rounded-3xl w-full max-w-3xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="flex justify-center items-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl w-10 h-10">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-bold text-foreground text-3xl">Find Your Perfect Stay</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="flex items-center space-x-2 font-semibold text-foreground text-sm">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>Where to?</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search destinations, cities, or landmarks"
                      className="bg-muted/50 p-4 border focus:border-emerald-500 border-border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/50 w-full text-foreground placeholder:text-muted-foreground transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center space-x-2 font-semibold text-foreground text-sm">
                    <Calendar className="w-4 h-4 text-teal-500" />
                    <span>When?</span>
                  </label>
                  <div className="gap-3 grid grid-cols-2">
                    <input
                      type="date"
                      className="bg-muted/50 p-4 border focus:border-teal-500 border-border rounded-xl outline-none focus:ring-2 focus:ring-teal-500/50 text-foreground transition-all duration-300"
                    />
                    <input
                      type="date"
                      className="bg-muted/50 p-4 border focus:border-teal-500 border-border rounded-xl outline-none focus:ring-2 focus:ring-teal-500/50 text-foreground transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-2 font-semibold text-foreground text-sm">
                  <Users className="w-4 h-4 text-cyan-500" />
                  <span>Who&apos;s coming?</span>
                </label>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
                  {[
                    { label: "Adults", sublabel: "Ages 13+" },
                    { label: "Children", sublabel: "Ages 2-12" },
                    { label: "Infants", sublabel: "Under 2" },
                  ].map((guest) => (
                    <div
                      key={guest.label}
                      className="flex justify-between items-center bg-muted/50 p-4 border border-border rounded-xl"
                    >
                      <div>
                        <div className="font-medium text-foreground">{guest.label}</div>
                        <div className="text-muted-foreground text-xs">{guest.sublabel}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="flex justify-center items-center hover:bg-muted border border-border rounded-full w-8 h-8 transition-colors">
                          -
                        </button>
                        <span className="w-8 font-medium text-center">0</span>
                        <button className="flex justify-center items-center hover:bg-muted border border-border rounded-full w-8 h-8 transition-colors">
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                className="flex justify-center items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:shadow-xl py-4 rounded-xl w-full font-semibold text-white transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search className="w-5 h-5" />
                <span>Search Amazing Places</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { User, Settings, HelpCircle, LogOut, Heart, Calendar, Gift } from "lucide-react"

interface UserMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function UserMenu({ isOpen, onClose }: UserMenuProps) {
  const menuItems = [
    { icon: User, label: "Profile", href: "#", color: "emerald" },
    { icon: Calendar, label: "My trips", href: "#", color: "teal" },
    { icon: Heart, label: "Wishlists", href: "#", color: "rose" },
    { icon: Gift, label: "Gift cards", href: "#", color: "amber" },
    { icon: Settings, label: "Account settings", href: "#", color: "slate" },
    { icon: HelpCircle, label: "Help Center", href: "#", color: "blue" },
    { icon: LogOut, label: "Log out", href: "#", color: "red" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="z-40 fixed inset-0" onClick={onClose} />
          <motion.div
            className="top-full right-0 z-50 absolute bg-background/95 shadow-2xl backdrop-blur-xl mt-3 border border-border/50 rounded-2xl w-72 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-r from-emerald-50 dark:from-emerald-950/20 to-teal-50 dark:to-teal-950/20 p-6 border-b border-border/50">
              <div className="flex items-center space-x-3">
                <div className="flex justify-center items-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full w-12 h-12">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Welcome back!</p>
                  <p className="text-muted-foreground text-sm">Manage your wanderlust</p>
                </div>
              </div>
            </div>

            <div className="py-2">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center space-x-3 hover:bg-muted/50 px-6 py-3 text-foreground transition-all duration-300"
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <div
                    className={`p-2 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-900/20 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <item.icon className={`w-4 h-4 text-${item.color}-600 dark:text-${item.color}-400`} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

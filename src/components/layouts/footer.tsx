"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Explore",
      links: ["Destinations", "Experiences", "Adventures", "Last-minute deals"],
    },
    {
      title: "Community",
      links: ["Travel stories", "Local guides", "Travel tips", "Photo contests"],
    },
    {
      title: "Support",
      links: ["Help Center", "Safety", "Cancellation", "Contact us"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "Investors"],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "blue" },
    { icon: Twitter, href: "#", color: "sky" },
    { icon: Instagram, href: "#", color: "pink" },
    { icon: Youtube, href: "#", color: "red" },
  ]

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-muted/30 border-t border-border/50">
      <div className="mx-auto px-6 lg:px-8 py-16 max-w-8xl">
        {/* Main Footer Content */}
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl w-12 h-12">
                <span className="font-bold text-white text-xl">W</span>
              </div>
              <span className="bg-clip-text bg-gradient-to-r from-emerald-600 dark:from-emerald-400 to-teal-600 dark:to-teal-400 font-bold text-transparent text-2xl">
                Wanderlust
              </span>
            </motion.div>

            <motion.p
              className="mb-6 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Discover extraordinary places, create unforgettable memories, and connect with amazing experiences around
              the world.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@wanderlust.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 font-bold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex md:flex-row flex-col justify-between items-center pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">© 2025 Wanderlust, Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              {["Privacy", "Terms", "Cookies", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`w-10 h-10 rounded-full bg-muted hover:bg-${social.color}-100 dark:hover:bg-${social.color}-900/20 flex items-center justify-center text-muted-foreground hover:text-${social.color}-600 dark:hover:text-${social.color}-400 transition-all duration-300`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

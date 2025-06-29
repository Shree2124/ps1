"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import ExperienceCard from "@/components/ui/experience-card"

export default function ExperienceCategories() {
  return (
    <section className="bg-muted/30 mx-auto px-6 lg:px-8 py-20 max-w-8xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-6 font-bold text-foreground text-4xl sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Unique Experiences
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover activities and experiences hosted by local experts
          </motion.p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

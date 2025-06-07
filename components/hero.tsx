"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y, opacity }}
          className="w-full h-[120%] bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Expert Tree Care for Your Property
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Professional arborist services with certified experts. We care for your trees with precision and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} size="lg" className="bg-green-700 hover:bg-green-800 text-white text-lg">
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg"
            >
              Our Services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/80 rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

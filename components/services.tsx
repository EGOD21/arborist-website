"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Axe, Scissors, TreesIcon as Plant, AlertTriangle, Sprout, Ruler } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Axe className="h-10 w-10 text-green-700" />,
    title: "Tree Removal",
    description: "Safe and efficient removal of trees with minimal impact to surrounding landscape.",
  },
  {
    icon: <Scissors className="h-10 w-10 text-green-700" />,
    title: "Pruning & Trimming",
    description: "Expert pruning to improve tree health, appearance, and safety.",
  },
  {
    icon: <Plant className="h-10 w-10 text-green-700" />,
    title: "Firewood Sale/Delivery",
    description: "Quality seasoned firewood available for sale with convenient delivery options.",
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-green-700" />,
    title: "Wood Chipping & Debris Hauling",
    description: "On-site chipping and removal of limbs, logs, and green waste to keep your property clean.",
  },
  {
    icon: <Sprout className="h-10 w-10 text-green-700" />,
    title: "Stump Grinding/Removal",
    description: "Complete removal of tree stumps below grade for a clean, level surface.",
  },
  {
    icon: <Ruler className="h-10 w-10 text-green-700" />,
    title: "Lot & Brush Clearing",
    description: "Clearing unwanted brush and small trees to prepare land for construction or landscaping.",
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive tree care services with the expertise and equipment to handle any job, big or
            small.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

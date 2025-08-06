"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, Heart, Home } from "lucide-react";

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
      icon: <AlertTriangle className="h-12 w-12 text-red-600" />,
      title: "Dangerous & Unsightly",
      description: "Overgrown limbs, dead trees, and stubborn stumps create safety hazards and make your property look neglected.",
      type: "external"
    },
    {
      icon: <Heart className="h-12 w-12 text-orange-600" />,
      title: "Frustrated & Overwhelmed", 
      description: "You're tired of the mess and stress, but don't know who to trust with your valuable trees and property.",
      type: "internal"
    },
    {
      icon: <Home className="h-12 w-12 text-green-600" />,
      title: "You Deserve Better",
      description: "Everyone deserves a clean, safe, and peaceful property where they can relax and feel proud of their outdoor space.",
      type: "philosophical"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tree Problems Shouldn't Stress You Out
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand the challenges that come with tree care. You're not alone in feeling overwhelmed.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">
            The good news? There's a better way.
          </p>
        </div>
      </div>
    </section>
  );
}
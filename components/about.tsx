"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const benefits = [
    "Certified Arborists with 15+ years of experience",
    "Fully insured and licensed professionals",
    "Eco-friendly practices and sustainable solutions",
    "State-of-the-art equipment for safe operations",
    "Transparent pricing with no hidden fees",
    "Committed to customer satisfaction",
  ];

  return (
    <section id="about" ref={ref} className="py-20 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column with Parallax Effect */}
          <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
            <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fb11935c5315c460ba00f1e3a1c6658c4%2F0d69cafbcf5643d4bc082553ec8663ba"
                alt="Arborist at work"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y2, opacity }}
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-lg overflow-hidden shadow-xl border-4 border-white"
            >
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Close-up of tree care"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Arbor Experts
            </h2>
            <div className="w-20 h-1 bg-green-700 mb-8"></div>

            <p className="text-gray-700 mb-6 text-lg">
              With over 15 years of experience in the arboriculture industry,
              Arbor Experts has been providing exceptional tree care services to
              residential and commercial properties throughout the region.
            </p>

            <p className="text-gray-700 mb-8 text-lg">
              Our team of certified arborists combines scientific knowledge with
              practical expertise to deliver solutions that maintain the health
              and beauty of your trees while ensuring the safety of your
              property.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

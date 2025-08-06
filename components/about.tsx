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
    "Licensed & Insured professionals you can trust",
    "Safety Certified with 3+ years of experience",
    "Local & Family-Owned business that cares",
    "We educate customers before every cut",
    "Photos before cutting for your peace of mind",
    "Clean, on-time service you can count on",
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
                src="https://cdn.builder.io/api/v1/image/assets%2Fb11935c5315c460ba00f1e3a1c6658c4%2F7cd1acca489e42d0beffba39d3c2e854"
                alt="Arborist at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Tree Care Professionals
            </h2>
            <div className="w-20 h-1 bg-green-700 mb-8"></div>

            <p className="text-gray-700 mb-6 text-lg">
              As your local, family-owned tree care professionals, we understand the stress and uncertainty that comes with tree problems. That's why we've built our reputation on trust, education, and peace of mind.
            </p>

            <p className="text-gray-700 mb-8 text-lg">
              We don't just show up and start cutting. We take time to educate you about your trees, show you photos before we make any cuts, and ensure you're completely comfortable with our plan. Our clean, on-time service means you can relax knowing your property is in capable hands.
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

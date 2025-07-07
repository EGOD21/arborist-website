"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, FileText, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Plan() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: "01",
      icon: <Phone className="h-12 w-12 text-green-700" />,
      title: "Call or Fill Out the Form",
      description: "Reach out to us by phone or complete our simple contact form. Tell us about your tree concerns and we'll schedule a convenient time to visit."
    },
    {
      number: "02", 
      icon: <FileText className="h-12 w-12 text-green-700" />,
      title: "Get a Free Quote",
      description: "We'll assess your property, educate you about your options, and provide a transparent, no-obligation quote. No surprises, just honest pricing."
    },
    {
      number: "03",
      icon: <Coffee className="h-12 w-12 text-green-700" />,
      title: "Relax While We Take Care of the Mess",
      description: "Sit back and enjoy your coffee while our professional team safely handles everything. We'll clean up completely and leave your property better than we found it."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Here's How Easy It Is
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting professional tree care shouldn't be complicated. Our simple 3-step process makes it effortless.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-700 text-white text-2xl font-bold rounded-full flex items-center justify-center z-10">
                {step.number}
              </div>
              
              {/* Main Card */}
              <div className="bg-gray-50 rounded-lg p-8 pt-12 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-green-700"></div>
                  <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-green-700 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-4"
          >
            Get Started Today
          </Button>
          <p className="text-gray-600 mt-4">
            Ready to reclaim your property? Let's get started.
          </p>
        </div>
      </div>
    </section>
  );
}
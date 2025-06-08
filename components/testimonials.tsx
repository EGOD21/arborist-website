"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The team at TIMBERMEN TREE SERVICES did an amazing job with our property. They removed three large trees that were dangerously close to our house with incredible precision. The cleanup was immaculate, and they were professional throughout the entire process.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Property Manager",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "We've been using TIMBERMEN TREE SERVICES for all our commercial properties for over 5 years. Their attention to detail and knowledge of tree health is unmatched. They've helped us develop and maintain beautiful landscapes that our tenants love.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Homeowner",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "After a storm damaged several trees in our yard, TIMBERMEN TREE SERVICES responded quickly and helped us assess the situation. They saved trees that other companies would have removed and were transparent about costs throughout the process.",
    rating: 4,
  },
  {
    name: "David Thompson",
    role: "HOA President",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Our community has worked with TIMBERMEN TREE SERVICES for our annual tree maintenance program. They're always on schedule, communicate effectively, and have helped us preserve our neighborhood's beautiful tree canopy while ensuring safety.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, autoplay]);

  const handleManualNavigation = (callback: () => void) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAutoplay(false);
    callback();

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section id="testimonials" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large Quote Icon */}
          <div className="absolute -top-10 left-0 opacity-10">
            <Quote className="h-24 w-24 text-green-700" />
          </div>

          {/* Testimonial Carousel */}
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="h-full shadow-lg border-green-100">
                  <CardContent className="flex flex-col md:flex-row gap-6 h-full p-8">
                    <div className="flex flex-col items-center md:items-start">
                      <Avatar className="h-20 w-20 border-2 border-green-100">
                        <AvatarImage
                          src={
                            testimonials[current].avatar || "/placeholder.svg"
                          }
                          alt={testimonials[current].name}
                        />
                        <AvatarFallback>
                          {testimonials[current].name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="mt-4 text-center md:text-left">
                        <h4 className="font-bold text-lg">
                          {testimonials[current].name}
                        </h4>
                        <p className="text-gray-500">
                          {testimonials[current].role}
                        </p>
                        <div className="flex justify-center md:justify-start mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonials[current].rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center">
                      <p className="text-gray-700 italic text-lg">
                        "{testimonials[current].content}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(prevTestimonial)}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => handleManualNavigation(() => setCurrent(index))}
                className={`w-3 h-3 p-0 rounded-full ${current === index ? "bg-green-700" : "bg-gray-300"}`}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(nextTestimonial)}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

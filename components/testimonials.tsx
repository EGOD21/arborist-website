"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Josh Mhire",
    role: "Homeowner",
    avatar: "https://i.imgur.com/W0PjEcc.png",
    content:
      "Timbermen Tree Service is the way to go if you want quality work for a reasonable price, and I promise you, they're worth the money. Our trees had been giving us trouble for years, falling on our house, damaging our roof and gutters, and nearly hitting our cars and our neighbor's house. After a really bad experience with a tree service company that did a terrible job trimming our trees, working with Timbermen was so refreshing. Christian and his dad were so kind and knowledgeable, and they were incredibly considerate of our home and even our neighbor's home to make sure the job was done well and safely. They did a phenomenal job clearing out our trees, and it's a huge relief knowing they won't be around this coming winter to cause more damage.",
    rating: 5,
  },
  {
    name: "Daniel Hoppman",
    role: "Homeowner",
    avatar: "https://i.imgur.com/QVMOiA3.png",
    content:
      "Christian and his dad were extremely professional and courteous. They provide excellent service for more than a reasonable price. This monster of a sycamore was long over due and Timberman Tree Service cleaned it up safely and efficiently. I would use them again in the future and recommend them to anyone in need of their services.",
    rating: 5,
  },
  {
    name: "Nathan Ziegler",
    role: "Homeowner",
    avatar: "https://i.imgur.com/BoMHoCc.png",
    content:
      "Christian has done work for me at three different properties and is the absolute best in the business. He is always on schedule, can fall a tree or limb exactly where he wants it to go, and spends ample time cleaning up. He goes above and beyond in every way. He is professional and thoughtful. I would never use anyone else for my tree trimming and tree cutting needs.",
    rating: 5,
  },
  {
    name: "Rachael Schreve",
    role: "Homeowner",
    avatar: "https://i.imgur.com/78jjnp1.png",
    content:
      "When a tree came down on my house during a storm, Christian and Todd came out that same day! They removed the tree, tarped my roof to prevent more damage, and left my yard SPOTLESS! Not even a twig left behind! They were fast, professional, and did amazing work. Highly recommend them!",
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
    <section id="testimonials" className="py-12 md:py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            See the Results: Clean Yards, Safer Trees, Peace of Mind
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Our customers love the transformation of their properties and the peace of mind that comes with professional tree care.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large Quote Icon */}
          <div className="absolute -top-6 md:-top-10 left-0 opacity-10">
            <Quote className="h-16 w-16 md:h-24 md:w-24 text-green-700" />
          </div>

          {/* Testimonial Carousel */}
          <div className="relative min-h-[500px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="shadow-lg border-green-100">
                  <CardContent className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-8">
                    <div className="flex flex-col items-center md:items-start md:min-w-[200px]">
                      <Avatar className="h-16 w-16 md:h-20 md:w-20 border-2 border-green-100">
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
                      <div className="mt-3 md:mt-4 text-center md:text-left">
                        <h4 className="font-bold text-base md:text-lg">
                          {testimonials[current].name}
                        </h4>
                        <p className="text-gray-500 text-sm md:text-base">
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
                      <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
                        "{testimonials[current].content}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(prevTestimonial)}
              className="rounded-full h-8 w-8 md:h-10 md:w-10"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => handleManualNavigation(() => setCurrent(index))}
                className={`w-2 h-2 md:w-3 md:h-3 p-0 rounded-full ${current === index ? "bg-green-700" : "bg-gray-300"}`}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(nextTestimonial)}
              className="rounded-full h-8 w-8 md:h-10 md:w-10"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

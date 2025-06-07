"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, TreesIcon as Tree } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Tree className="h-8 w-8 text-green-700" />
          <span className="font-bold text-xl text-gray-900">Arbor Experts</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-green-700 font-medium transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-green-700 font-medium transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-700 hover:text-green-700 font-medium transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 hover:text-green-700 font-medium transition-colors"
          >
            Testimonials
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-green-700 hover:bg-green-800 text-white">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-green-700 hover:bg-green-800 text-white w-full"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

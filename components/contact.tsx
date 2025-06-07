"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setIsSubmitting(false)
    // Reset form
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to schedule a consultation? Reach out to our team of certified arborists today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg border-green-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="(123) 456-7890" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="Tree Removal">Tree Removal</option>
                      <option value="Pruning">Pruning & Trimming</option>
                      <option value="Tree Planting">Tree Planting</option>
                      <option value="Emergency">Emergency Services</option>
                      <option value="Health Care">Tree Health Care</option>
                      <option value="Assessment">Tree Assessment</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Please describe your project or questions..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Our team is ready to answer your questions and provide expert advice on your tree care needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Monday-Friday, 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-600">info@arborexperts.com</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Office Location</h4>
                    <p className="text-gray-600">123 Tree Lane</p>
                    <p className="text-gray-600">Greenville, GA 30303</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Business Hours</h4>
                    <p className="text-gray-600">Monday-Friday: 8am-6pm</p>
                    <p className="text-gray-600">Saturday: 9am-3pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                    <p className="text-green-700 font-medium mt-1">24/7 Emergency Services Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

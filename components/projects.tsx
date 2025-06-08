"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Historic Oak Preservation",
    category: "Preservation",
    description:
      "Restoration and preservation of a 150-year-old oak tree in the city's historic district.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb11935c5315c460ba00f1e3a1c6658c4%2Ff7c64c9123174f3fb16a89c1cdb714e6",
  },
  {
    title: "Commercial Property Landscaping",
    category: "Commercial",
    description:
      "Complete tree management plan for a large office complex, including seasonal maintenance.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb11935c5315c460ba00f1e3a1c6658c4%2F9de5a6f1b0364ddfa86061e87a4fa37d",
  },
  {
    title: "Storm Damage Recovery",
    category: "Emergency",
    description:
      "Emergency response and cleanup after severe storm damage to residential properties.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb11935c5315c460ba00f1e3a1c6658c4%2Fda762fe7dedd425d8faca4f65184d85d",
  },
  {
    title: "Urban Forest Initiative",
    category: "Community",
    description:
      "Planting and establishing 50+ trees as part of a city beautification project.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb11935c5315c460ba00f1e3a1c6658c4%2F0fec91656b1a452989b8dd2a7d07c075",
  },
  {
    title: "Residential Tree Removal",
    category: "Residential",
    description:
      "Safe removal of hazardous trees from a confined residential space with minimal disruption.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb11935c5315c460ba00f1e3a1c6658c4%2Ff22b83164def4b65b92d5dd446526ee9",
  },
  {
    title: "Disease Management",
    category: "Health Care",
    description:
      "Identification and treatment of oak wilt disease across multiple properties in a neighborhood.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb11935c5315c460ba00f1e3a1c6658c4%2Fe28d3a96f6474918866f2ec980cbc650",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Recent Projects
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Browse through our portfolio of successful tree care projects and
            see the quality of our work.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={
                  filter === category ? "bg-green-700 hover:bg-green-800" : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(projects.indexOf(project))}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-green-400 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mt-2 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl w-[90vw]">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {projects[selectedProject].title}
                </DialogTitle>
                <DialogDescription>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm mt-2">
                    {projects[selectedProject].category}
                  </span>
                </DialogDescription>
              </DialogHeader>

              <div className="relative h-80 md:h-96 my-4">
                <Image
                  src={projects[selectedProject].image || "/placeholder.svg"}
                  alt={projects[selectedProject].title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <p className="text-gray-700">
                {projects[selectedProject].description}
              </p>

              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  onClick={() =>
                    setSelectedProject((prev) =>
                      prev! > 0 ? prev! - 1 : projects.length - 1,
                    )
                  }
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    setSelectedProject((prev) =>
                      prev! < projects.length - 1 ? prev! + 1 : 0,
                    )
                  }
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

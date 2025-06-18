"use client"

import { motion } from "framer-motion"
import TechCard from "@/components/tech-card"

export default function TechnologiesPage() {
  const technologies = [
      {
          category: "Frontend",
          techs: [
              { name: "React.js", icon: "react" },
              { name: "Next.js", icon: "Nextjs" },
              { name: "TypeScript", icon: "typescript" },
              { name: "JavaScript", icon: "javascript" },
              { name: "HTML5", icon: "html" },
              { name: "CSS3", icon: "css" },
              { name: "Tailwind CSS", icon: "tailwind" },
          ],
      },
      {
          category: "Backend",
          techs: [
              { name: "Node.js", icon: "nodejs" },
              { name: "Express.js", icon: "express" },
              { name: "MongoDB", icon: "mongodb" },
              { name: "REST API", icon: "api" },
              { name: "Rabbitmq", icon: "rabbitmq" },
          ],
      },
      {
          category: "Tools & Others",
          techs: [
              { name: "Git", icon: "git" },
              { name: "GitHub", icon: "github" },
              { name: "VS Code", icon: "vscode" },
              { name: "Docker", icon: "docker" },
              { name: "AWS", icon: "aws" },
          ],
      },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies & Skills</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">The tools and technologies I work with</p>
      </motion.div>

      <div className="space-y-16">
        {technologies.map((category, index) => (
          <div key={index} className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-2xl font-bold"
            >
              {category.category}
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            >
              {category.techs.map((tech, techIndex) => (
                <TechCard key={techIndex} tech={tech} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}


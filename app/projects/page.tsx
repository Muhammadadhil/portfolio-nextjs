"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
      {
          id: 1,
          title: "Opportune-freelance platform",
          description: "A platform that connect the freelancers and clients accross the world.",
          technologies: ["Microservices", "Node.js", "Express", "MongoDB", "Redux", "React", "tanstack query"],
          image: "/opportune-.png?height=400&width=600",
          link: "https://opportune.muhammadadhil.site/",
      },
      {
          id: 2,
          title: "Homiqo E-commerce Platform",
          description: "A full-featured e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
          technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
          image: "/homiqo-homepage.png?height=400&width=600",
          link: "https://e-commerce-applicaton.onrender.com/",
      },
      {
          id: 3,
          title: "Task Management System",
          description: "A collaborative task management application with real-time updates, task assignment, and progress tracking features.",
          technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
          image: "/task-mgt.png?height=400&width=600",
          link: "https://task-mangement-delta.vercel.app/",
      },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">Here are some of the projects I've worked on</p>
      </motion.div>
      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  )
}


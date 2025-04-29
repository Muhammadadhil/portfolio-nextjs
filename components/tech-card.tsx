"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { getIconComponent } from "@/lib/icons"

interface TechCardProps {
  tech: {
    name: string
    icon: string
  }
}

export default function TechCard({ tech }: TechCardProps) {
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  const IconComponent = getIconComponent(tech.icon)

  return (
    <motion.div variants={item}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
        <CardContent className="flex flex-col items-center justify-center p-6">
          {IconComponent && (
            <div className="mb-3 text-primary">
              <IconComponent className="h-8 w-8" />
            </div>
          )}
          <p className="text-center font-medium">{tech.name}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}


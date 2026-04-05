"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Layout, Server, Code, Wrench } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: Layout,
  server: Server,
  code: Code,
  wrench: Wrench,
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-primary/[0.01]" />

      <div className="mx-auto max-w-6xl px-6 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">
            — Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            My Technical
            <br />
            <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life, spanning the full development stack.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = iconMap[category.icon] || Code;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                className="group relative p-6 sm:p-8 rounded-2xl glass hover:glow transition-all duration-500"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.15 + skillIndex * 0.05 + 0.3,
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

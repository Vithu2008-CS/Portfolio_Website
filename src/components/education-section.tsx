"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { education, coursework } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Calendar,
  Award,
  Code,
  Layout,
  Brain,
  Cpu,
  Shield,
  Sigma,
  ChevronDown,
  BookOpen,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  layout: Layout,
  brain: Brain,
  cpu: Cpu,
  shield: Shield,
  sigma: Sigma,
};

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <section id="education" className="py-24 sm:py-32 relative">
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
            — Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Academic
            <br />
            <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-6 sm:p-8 rounded-2xl glass hover:glow transition-all duration-500">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />

                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    {edu.grade && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          Grade: {edu.grade}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowCoursework(!showCoursework)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glow text-sm font-medium text-foreground transition-all duration-300 cursor-pointer group"
          >
            <BookOpen className="w-4 h-4 text-primary" />
            {showCoursework ? "Hide" : "View"} Relevant Coursework
            <motion.div
              animate={{ rotate: showCoursework ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </button>
        </motion.div>

        {/* Coursework grid */}
        <motion.div
          initial={false}
          animate={{
            height: showCoursework ? "auto" : 0,
            opacity: showCoursework ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-5xl mx-auto">
            {coursework.map((category, catIndex) => {
              const IconComponent = iconMap[category.icon] || Code;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    showCoursework
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                  className="group/card relative p-5 rounded-2xl glass hover:glow transition-all duration-500"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/card:bg-primary/20 transition-colors">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {category.title}
                    </h4>
                  </div>

                  {/* Course list */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.courses.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="text-xs px-2 py-1 font-normal"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Course count */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            <span className="text-primary font-medium">28+</span> courses
            completed across the full Computer Science curriculum
          </p>
        </motion.div>
      </div>
    </section>
  );
}

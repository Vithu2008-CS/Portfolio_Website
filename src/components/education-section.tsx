"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

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

        {/* Timeline */}
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
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

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
      </div>
    </section>
  );
}

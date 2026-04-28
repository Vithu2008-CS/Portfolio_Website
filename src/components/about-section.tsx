"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { MapPin, GraduationCap, Sparkles } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "1+", icon: Sparkles },
    { label: "Projects Completed", value: "5+", icon: GraduationCap },
    { label: "Based in", value: "Batticaloa, Sri Lanka", icon: MapPin },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">
            — About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Crafting Digital
            <br />
            <span className="gradient-text">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.about}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a versatile skill set spanning{" "}
              <span className="text-foreground font-medium">frontend development</span>,{" "}
              <span className="text-foreground font-medium">backend systems</span>, and{" "}
              <span className="text-foreground font-medium">UI/UX design</span>, I bring a well-rounded perspective to
              every project. I'm driven by a passion for writing clean, maintainable code and creating
              products that are not only functional but truly delightful to use.
            </p>

            <Separator className="my-8 bg-border/50" />

            {/* Quick info */}
            <div className="flex flex-wrap gap-6">
              <div>
                <span className="text-sm text-muted-foreground">Email</span>
                <p className="text-sm font-medium text-foreground">
                  {personalInfo.email}
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Location</span>
                <p className="text-sm font-medium text-foreground">
                  {personalInfo.location}
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Education</span>
                <p className="text-sm font-medium text-foreground">
                  BSc. Hons CS — Eastern University SriLanka
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group relative p-6 rounded-2xl glass hover:glow transition-all duration-500 cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

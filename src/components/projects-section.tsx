"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">
            — Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Featured
            <br />
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            A selection of projects that showcase my technical skills and
            problem-solving approach.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-2xl glass overflow-hidden hover:glow transition-all duration-500">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />

                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Project preview */}
                    <div className="lg:w-2/5 flex-shrink-0">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-primary/5 border border-border/50">
                        {/* Terminal-style preview */}
                        <div className="absolute inset-0 flex flex-col">
                          {/* Title bar */}
                          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-2 text-xs text-muted-foreground font-mono">
                              {project.title.toLowerCase().replace(/\s+/g, "-")}
                            </span>
                          </div>
                          {/* Code preview */}
                          <div className="flex-1 p-4 font-mono text-xs text-muted-foreground/70 space-y-1 overflow-hidden">
                            <p>
                              <span className="text-primary/80">const</span>{" "}
                              <span className="text-emerald-400/80">project</span>{" "}
                              <span className="text-primary/60">=</span> {"{"}
                            </p>
                            <p className="pl-4">
                              <span className="text-yellow-400/70">name</span>:{" "}
                              <span className="text-emerald-400/70">
                                &quot;{project.title.split(" ").slice(0, 3).join(" ")}&quot;
                              </span>,
                            </p>
                            <p className="pl-4">
                              <span className="text-yellow-400/70">stack</span>:{" "}
                              <span className="text-emerald-400/70">
                                [{project.techStack.slice(0, 3).map(t => `"${t}"`).join(", ")}]
                              </span>,
                            </p>
                            <p className="pl-4">
                              <span className="text-yellow-400/70">status</span>:{" "}
                              <span className="text-emerald-400/70">&quot;complete&quot;</span>
                            </p>
                            <p>{"}"}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="lg:w-3/5 space-y-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-all">
                            {project.title}
                          </h3>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 45 }}
                          className="hidden sm:block"
                        >
                          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="font-mono text-xs px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 pt-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors cursor-pointer"
                        >
                          <GithubIcon className="w-4 h-4" />
                          Source Code
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-colors cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
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

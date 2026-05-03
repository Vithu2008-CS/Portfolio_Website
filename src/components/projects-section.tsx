"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { projects, Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight, ChevronDown, Lightbulb, Wrench, GraduationCap } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

function ProjectImage({ title, slug }: { title: string; slug: string }) {
  const [imgError, setImgError] = useState(false);
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (imgError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
        <span className="text-5xl font-bold text-primary/20">{initials}</span>
      </div>
    );
  }

  return (
    <Image
      src={`/projects/${slug}.png`}
      alt={`${title} screenshot`}
      fill
      className="object-cover"
      priority={false}
      onError={() => setImgError(true)}
    />
  );
}

function ProjectCard({
  project,
  index,
  isInView,
  shouldReduce,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  shouldReduce: boolean;
}) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <motion.div
      key={project.title}
      initial={shouldReduce ? false : { opacity: 0, y: 40 }}
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
                <ProjectImage
                  title={project.title}
                  slug={project.title.toLowerCase().replace(/\s+/g, "-")}
                />
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

          {/* Case study toggle */}
          {project.caseStudy && (
            <div className="mt-8 border-t border-border/30 pt-6">
              <button
                onClick={() => setCaseStudyOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                <Lightbulb className="w-4 h-4" />
                Case Study
                <motion.span
                  animate={{ rotate: caseStudyOpen ? 180 : 0 }}
                  transition={{ duration: shouldReduce ? 0 : 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: caseStudyOpen ? "auto" : 0,
                  opacity: caseStudyOpen ? 1 : 0,
                }}
                transition={{ duration: shouldReduce ? 0 : 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-border/30 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Wrench className="w-4 h-4 text-primary" />
                      The Problem
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.caseStudy.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-border/30 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      What I Built
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.caseStudy.built}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-border/30 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      What I Learned
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.caseStudy.learned}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 30 }}
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
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              shouldReduce={shouldReduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

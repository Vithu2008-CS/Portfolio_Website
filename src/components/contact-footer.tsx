"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function ContactFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const shouldReduce = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormState({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: `linkedin.com/in/${personalInfo.linkedin}`,
      href: personalInfo.linkedinUrl,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: personalInfo.github,
      href: personalInfo.githubUrl,
    },
  ];

  return (
    <>
      <section id="contact" className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-6xl px-6" ref={ref}>
          {/* Section header */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm font-mono text-primary tracking-widest uppercase">
              — Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              Let&apos;s Work
              <br />
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear
              from you. Drop me a message and I&apos;ll get back to you as soon
              as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        name: (e.target as HTMLInputElement).value,
                      }))
                    }
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        email: (e.target as HTMLInputElement).value,
                      }))
                    }
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        message: (e.target as HTMLTextAreaElement).value,
                      }))
                    }
                    className="min-h-[140px] rounded-xl bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 rounded-xl glow cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      Sending...
                      <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                    </>
                  ) : status === "success" ? (
                    <>
                      Sent!
                      <CheckCircle2 className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {/* Status message */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 shrink-0" />
                    )}
                    {statusMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl glass hover:glow transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Location card */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + contactLinks.length * 0.1,
                }}
                className="p-5 rounded-2xl glass"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <Separator className="mb-8 bg-border/30" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {new Date().getFullYear()} {personalInfo.name}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Back to top
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

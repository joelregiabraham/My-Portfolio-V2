"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code, Zap } from "lucide-react"
import Link from "next/link"

const typewriterTexts = ["Full-Stack Developer", "Computer Science Student", "Problem Solver", "Tech Enthusiast"]

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = typewriterTexts[currentText]

        if (isDeleting) {
          setDisplayText(current.substring(0, displayText.length - 1))
        } else {
          setDisplayText(current.substring(0, displayText.length + 1))
        }

        if (!isDeleting && displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false)
          setCurrentText((prev) => (prev + 1) % typewriterTexts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg animate-gradient -z-20"></div>
      <div className="absolute inset-0 bg-background/90 -z-10"></div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="floating-element">
        <Code className="w-16 h-16 text-primary/20 animate-rotate" />
      </div>
      <div className="floating-element">
        <Sparkles className="w-12 h-12 text-purple-500/20 animate-pulse" />
      </div>
      <div className="floating-element">
        <Zap className="w-14 h-14 text-blue-500/20 animate-bounce" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced Name Section */}
          <div className="mb-8">
            {/* Greeting */}
            <div className="mb-4">
              <span className="inline-block glass rounded-full px-6 py-2 text-sm font-medium text-muted-foreground mb-4 animate-bounce-in">
                👋 Hello, I'm
              </span>
            </div>

            {/* Main Name - Much Better Styling */}
            <h1 className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 blur-3xl opacity-30">
                <span className="text-5xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Joel Regi Abraham
                </span>
              </div>

              {/* Main text with better styling */}
              <span className="relative text-5xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Joel Regi
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Abraham
                </span>
              </span>

              {/* Subtle accent line */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </h1>
          </div>

          {/* Typewriter Effect */}
          <div className="h-16 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground">
              <span className="inline-block min-w-[300px] text-left">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </h2>
          </div>

          {/* Tagline with Glass Effect */}
          <div className="glass rounded-2xl p-6 mb-12 max-w-3xl mx-auto animate-bounce-in">
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
              🚀 Building elegant solutions in code • Passionate about innovation •
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {" "}
                Creating digital experiences that matter
              </span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-6 morph-button hover-lift animate-pulse-glow rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
            >
              <Link href="#projects">
                <Sparkles className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 morph-button hover-lift glass rounded-full border-2 border-primary/30 hover:border-primary/60 bg-transparent"
            >
              <Link href="#contact">
                <Zap className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
            {[
              { icon: Github, href: "https://github.com/joel", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/joel", label: "LinkedIn" },
              { icon: Mail, href: "mailto:itzmejoels@gmail.com", label: "Email" },
              { icon: Download, href: "/resume.pdf", label: "Resume" },
            ].map(({ icon: Icon, href, label }, index) => (
              <Button
                key={label}
                asChild
                variant="ghost"
                size="lg"
                className="glass rounded-full p-4 hover-lift group animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="sr-only">{label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { number: "70+", label: "Systems Deployed" },
              { number: "10+", label: "Daily Tickets Resolved" },
              { number: "3+", label: "Major Projects" },
              { number: "40%", label: "Performance Improvement" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-4 hover-lift animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <ArrowDown className="h-4 w-4 text-primary/70 mt-2" />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Folder, Star, GitBranch, Users } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Travel Mate",
    description: "Full-stack hotel booking platform with secure payment integration",
    longDescription:
      "A comprehensive hotel booking platform built with a team of four, featuring Stripe integration for secure payments, handling 100+ test transactions, and optimized performance with 40% faster image loading through Cloudinary.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Cloudinary", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: { stars: 24, forks: 8, contributors: 4 },
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Calamity Call",
    description: "Real-time disaster alert mobile app with sub-2s latency",
    longDescription:
      "Disaster alert mobile app with FastAPI backend delivering real-time alerts with less than 2s latency. Features secure user authentication via Supabase and automated CI/CD with GitHub Actions and Docker.",
    tech: ["Python", "FastAPI", "Supabase", "Docker", "GitHub Actions", "Java", "C#"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: { stars: 18, forks: 5, contributors: 2 },
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Snyder Tree Removal",
    description: "Modern website redesign with responsive architecture",
    longDescription:
      "Complete modernization of a 10-year-old static website into a responsive, interactive platform. Significantly improved user experience and aligned with current web standards using modern development practices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: { stars: 12, forks: 3, contributors: 1 },
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio with advanced animations and glassmorphism",
    longDescription:
      "A cutting-edge portfolio website featuring advanced CSS animations, glassmorphism effects, and modern UI patterns. Built with Next.js and Tailwind CSS for optimal performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: { stars: 31, forks: 12, contributors: 1 },
    gradient: "from-purple-500 to-pink-500",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-gray-50 dark:from-slate-950 dark:to-gray-950"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/5 to-red-400/5 rounded-full blur-3xl animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Folder className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">My Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work in full-stack development, mobile applications, and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group glass hover-lift relative overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              } ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}
              ></div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 animate-pulse">
                    ⭐ Featured
                  </Badge>
                </div>
              )}

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                      <Folder className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">{project.description}</CardDescription>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button asChild variant="ghost" size="sm" className="glass">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="glass">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>

                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="w-3 h-3" />
                    <span>{project.stats.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{project.stats.contributors}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className={`text-xs glass hover:scale-105 transition-transform duration-200 ${
                        hoveredProject === index ? "animate-bounce-in" : ""
                      }`}
                      style={{ animationDelay: `${techIndex * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <Button
              asChild
              size="lg"
              className="morph-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
            >
              <Link href="https://github.com/joel" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

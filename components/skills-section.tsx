"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Cloud, Wrench, Palette, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React/Next.js", level: 90, color: "bg-blue-500" },
      { name: "TypeScript", level: 85, color: "bg-blue-600" },
      { name: "HTML5/CSS3", level: 95, color: "bg-orange-500" },
      { name: "Tailwind CSS", level: 88, color: "bg-teal-500" },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-500" },
      { name: "Python", level: 80, color: "bg-yellow-500" },
      { name: "Java", level: 75, color: "bg-red-500" },
      { name: "FastAPI", level: 78, color: "bg-green-600" },
    ],
  },
  {
    title: "Database & Analytics",
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 82, color: "bg-green-500" },
      { name: "Supabase", level: 80, color: "bg-emerald-500" },
      { name: "Power BI", level: 70, color: "bg-yellow-500" },
      { name: "Azure Databricks", level: 65, color: "bg-blue-500" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Azure", level: 75, color: "bg-blue-500" },
      { name: "Docker", level: 80, color: "bg-blue-600" },
      { name: "CI/CD", level: 78, color: "bg-purple-500" },
      { name: "GitHub Actions", level: 82, color: "bg-gray-800" },
    ],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "Responsive Design", level: 90, color: "bg-pink-500" },
      { name: "UI/UX Principles", level: 85, color: "bg-purple-500" },
      { name: "Figma", level: 70, color: "bg-red-500" },
      { name: "Animation", level: 75, color: "bg-blue-500" },
    ],
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Git/GitHub", level: 90, color: "bg-gray-800" },
      { name: "Unit Testing", level: 75, color: "bg-green-500" },
      { name: "API Testing", level: 80, color: "bg-blue-500" },
      { name: "VS Code", level: 95, color: "bg-blue-600" },
    ],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars with staggered delay
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(
                  () => {
                    setAnimatedSkills((prev) => new Set([...prev, `${categoryIndex}-${skillIndex}`]))
                  },
                  categoryIndex * 200 + skillIndex * 100,
                )
              })
            })
          }, 500)
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
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Technical Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">My Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning full-stack development, cloud technologies, and modern DevOps practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <Card
                key={categoryIndex}
                className={`group glass hover-lift relative overflow-hidden ${
                  isVisible ? "animate-bounce-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center relative z-10">
                  <div
                    className={`mx-auto mb-4 p-4 bg-gradient-to-br ${category.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const skillKey = `${categoryIndex}-${skillIndex}`
                      const isAnimated = animatedSkills.has(skillKey)

                      return (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="relative">
                            <Progress value={isAnimated ? skill.level : 0} className="h-2 bg-secondary/50" />
                            <div
                              className={`absolute top-0 left-0 h-2 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: isAnimated ? `${skill.level}%` : "0%",
                                transitionDelay: `${skillIndex * 100}ms`,
                              }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-20 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Always Learning, Always Growing</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies
              to stay at the forefront of modern development practices.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "MongoDB",
                "Docker",
                "Azure",
                "Tailwind",
                "FastAPI",
                "Supabase",
                "Git",
              ].map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className={`glass hover:scale-105 transition-all duration-200 animate-bounce-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

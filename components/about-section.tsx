"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { User, GraduationCap, Briefcase, Award, Code2, Sparkles } from "lucide-react"

const achievements = [
  { icon: Code2, title: "Full-Stack Development", description: "MERN, TypeScript, Next.js" },
  { icon: Briefcase, title: "IT Infrastructure", description: "70+ Systems Deployed" },
  { icon: Award, title: "Performance Optimization", description: "40% Load Time Reduction" },
  { icon: GraduationCap, title: "Academic Excellence", description: "Computer Science Honours" },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <User className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Passionate Developer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining academic excellence with real-world experience to create impactful digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <div className={`flex justify-center lg:justify-start ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-4 gradient-bg rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-gradient"></div>

              {/* Image Container */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass hover-lift">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Joel Regi Abraham"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 animate-bounce-in">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                    <span className="text-sm font-medium">Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            {/* Bio Cards */}
            <div className="space-y-6">
              <Card className="glass hover-lift group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 gradient-text">Education & Background</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Currently pursuing a{" "}
                        <span className="text-primary font-medium">Bachelor of Computer Science (Honours)</span> at
                        Conestoga College, with a strong foundation in algorithms, data structures, and modern software
                        development practices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass hover-lift group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 gradient-text">Professional Experience</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Experienced <span className="text-primary font-medium">IT Support Technician</span> with
                        expertise in deploying enterprise systems and managing infrastructure. Also working as a{" "}
                        <span className="text-primary font-medium">freelance Full Stack Developer</span>, modernizing
                        legacy systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <Card
                    key={achievement.title}
                    className="glass hover-lift group animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Key Highlights */}
            <Card className="glass hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 gradient-text flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Key Highlights
                </h3>
                <div className="space-y-4">
                  {[
                    "Streamlined deployment of 70+ PCs/laptops in 3 months",
                    "Resolved 10+ IT tickets/calls daily with 99% satisfaction",
                    "Built full-stack applications with modern tech stacks",
                    "Reduced image load times by 40% through optimization",
                  ].map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 animate-fade-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

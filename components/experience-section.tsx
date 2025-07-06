import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "IT Support Technician COOP",
    company: "Erb Group of Companies",
    location: "Waterloo, ON",
    period: "May 2025 – Present",
    description:
      "Delivered full deployment of 70+ desktops and laptops, managed daily support tickets via Freshdesk, and maintained SharePoint and Active Directory environments.",
    achievements: [
      "Deployed 70+ systems in 3 months with zero setup delays",
      "Resolved 10+ daily support tickets with high efficiency",
      "Optimized help-desk procedures improving resolution times",
      "Maintained enterprise SharePoint and AD infrastructure",
    ],
  },
  {
    type: "work",
    title: "Full Stack Web Developer (Freelance)",
    company: "Snyder Tree Removal",
    location: "New Hamburg, ON",
    period: "Jan 2025 – Present",
    description:
      "Updated a 10-year-old static website into a modern, responsive platform, working with senior developers to ensure industry best practices.",
    achievements: [
      "Modernized legacy website with responsive design",
      "Improved user experience and web standards compliance",
      "Collaborated with senior developers for best practices",
      "Enhanced site performance and accessibility",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science (Honours)",
    company: "Conestoga College",
    location: "Waterloo, ON",
    period: "Jan. 2023 – Present",
    description:
      "Comprehensive computer science program focusing on algorithms, data structures, software engineering, and modern development practices.",
    achievements: [
      "Strong foundation in algorithms and data structures",
      "Hands-on experience with multiple programming languages",
      "Team-based project development experience",
      "Focus on software engineering best practices",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in technology, from academic foundations to professional experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {exp.type === "work" ? (
                        <Briefcase className="h-4 w-4 text-primary" />
                      ) : (
                        <GraduationCap className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground/80">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="shrink-0">
                    {exp.type === "work" ? "Work" : "Education"}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

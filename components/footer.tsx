"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Joel Regi Abraham</h3>
            <p className="text-muted-foreground">Computer Science Honours Student</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex space-x-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="https://github.com/joelregiabraham" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="www.linkedin.com/in/joel-regi-abraham-739b68279" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="mailto:itzmejoels@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>

          {/* Right side - Back to top */}
          <Button onClick={scrollToTop} variant="outline" size="sm">
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Joel Regi Abraham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SCA</span>
            </div>
            <span className="font-semibold text-lg">Social Cybersecurity</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#framework" className="text-muted-foreground hover:text-foreground transition-colors">
              Framework
            </a>
            <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors">
              Categories
            </a>
            <a href="#implementation" className="text-muted-foreground hover:text-foreground transition-colors">
              Implementation
            </a>
            <a href="#findings" className="text-muted-foreground hover:text-foreground transition-colors">
              Findings
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
              Download Paper
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#overview" className="text-muted-foreground hover:text-foreground transition-colors">
                Overview
              </a>
              <a href="#framework" className="text-muted-foreground hover:text-foreground transition-colors">
                Framework
              </a>
              <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </a>
              <a href="#implementation" className="text-muted-foreground hover:text-foreground transition-colors">
                Implementation
              </a>
              <a href="#findings" className="text-muted-foreground hover:text-foreground transition-colors">
                Findings
              </a>
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors w-fit">
                Download Paper
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

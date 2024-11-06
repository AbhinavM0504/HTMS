'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, ArrowRight, Mail, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Thank you for joining our waitlist!')
    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 md:h-8 md:w-8 text-[#E94560]" />
            <div className="text-xl md:text-2xl font-bold text-[#E94560] font-['Orbitron',_sans-serif]">HTMS</div>
          </div>
          <Button
            variant="default"
            className="bg-[#E94560] hover:bg-[#E94560]/80 text-white font-semibold rounded-full px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-180px)] flex items-center py-20 md:py-24">
          {/* Background Splash */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 -right-1/4 w-3/4 h-full bg-gradient-to-b from-[#E94560] to-[#0F3460] opacity-20 transform rotate-12 rounded-[100px]"></div>
            <div className="absolute top-1/4 -right-1/2 w-full h-full bg-gradient-to-b from-[#0F3460] to-[#E94560] opacity-20 transform -rotate-12 rounded-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Coming Soon Badge */}
              <div className="inline-block bg-[#E94560]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
                <span className="text-[#E94560] font-semibold text-sm md:text-base">Coming Soon</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                The Future of <span className="text-[#E94560]">Hybrid Team</span> Management
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-[#E0E0E0] max-w-2xl">
                Join the waitlist for early access to HTMS - your all-in-one platform for seamless hybrid team collaboration.
              </p>

              {/* Email Collection Form */}
              <Card className="bg-[#16213E]/50 backdrop-blur-md border-none p-2 max-w-xl">
                <CardContent className="p-2 md:p-4">
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 md:gap-4">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-[#E0E0E0]" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full pl-10 md:pl-12 pr-4 py-4 md:py-6 bg-[#1A1A2E] border-none text-white placeholder:text-[#E0E0E0]/50 rounded-full text-sm md:text-base"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#E94560] hover:bg-[#E94560]/80 text-white font-semibold rounded-full px-6 md:px-8 py-4 md:py-6 text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        'Joining...'
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Features Preview */}
              <div className="mt-8 sm:mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 sm:mb-12">
                {[
                  'Real-time collaboration tools',
                  'Smart workload management',
                  'Team analytics dashboard'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#E94560]" />
                    <span className="text-[#E0E0E0] text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-3 sm:py-4 md:py-6 bg-[#0A0A0A]/80 backdrop-blur-md border-t border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-[#E0E0E0] text-[11px] sm:text-xs md:text-sm gap-3 sm:gap-0">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#E94560] hidden sm:block" />
              <p className="text-center sm:text-left">&copy; 2024 HTMS. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <a 
                href="#" 
                className="hover:text-[#E94560] transition-colors duration-300 hover:scale-105 transform"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="#" 
                className="hover:text-[#E94560] transition-colors duration-300 hover:scale-105 transform"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
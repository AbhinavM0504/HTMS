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
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Header */}
      <header className="fixed w-full z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-[#E94560]" />
            <div className="text-2xl font-bold text-[#E94560] font-['Orbitron',_sans-serif]">HTMS</div>
          </div>
          <Button
            variant="ghost"
            className="rounded-full px-6 py-2 text-white hover:bg-[#E94560] hover:text-white transition-colors shadow-md hover:shadow-lg"
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Splash */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -right-1/4 w-3/4 h-full bg-gradient-to-b from-[#E94560] to-[#0F3460] opacity-20 transform rotate-12 rounded-[100px]"></div>
          <div className="absolute top-1/4 -right-1/2 w-full h-full bg-gradient-to-b from-[#0F3460] to-[#E94560] opacity-20 transform -rotate-12 rounded-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#E94560]/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[#E94560] font-semibold">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Future of <span className="text-[#E94560]">Hybrid Team</span> Management
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-[#E0E0E0] max-w-2xl">
              Join the waitlist for early access to HTMS - your all-in-one platform for seamless hybrid team collaboration.
            </p>

            {/* Email Collection Form */}
            <Card className="bg-[#16213E]/50 backdrop-blur-md border-none p-2 max-w-xl">
              <CardContent className="p-4">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#E0E0E0]" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-6 bg-[#1A1A2E] border-none text-white placeholder:text-[#E0E0E0]/50 rounded-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#E94560] hover:bg-[#E94560]/80 text-white font-semibold rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      'Joining...'
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Features Preview */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Real-time collaboration tools',
                'Smart workload management',
                'Team analytics dashboard'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#E94560]" />
                  <span className="text-[#E0E0E0]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#E0E0E0] text-sm">
            <p>&copy; 2024 HTMS. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#E94560] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#E94560] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
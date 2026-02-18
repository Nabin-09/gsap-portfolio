import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Timeline from '@/components/Timeline'
export default function page() {
  return (
    <div>

      <Hero/>
      <About/>
      <Projects/>
      <Timeline/>
    </div>
  )
}

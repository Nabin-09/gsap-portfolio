import {ReactLenis} from 'lenis/react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
export default function page() {
  return (
    <ReactLenis root>
      <Hero/>
      <About/>
      <Projects/>
      <Timeline/>
      <Contact/>
    </ReactLenis>
  )
}

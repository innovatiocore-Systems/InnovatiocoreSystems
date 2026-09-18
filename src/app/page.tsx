'use client'

import Hero from '../components/Hero'
import PlatformStrip from '../components/PlatformStrip'
import About from '../components/About'
import CtaBanner from '../components/CtaBanner'
import { useFadeIn } from '../hooks/useFadeIn'

export default function HomePage() {
  useFadeIn()

  return (
    <>
      <Hero />
      <PlatformStrip />
      <About />
      <CtaBanner />
    </>
  )
}

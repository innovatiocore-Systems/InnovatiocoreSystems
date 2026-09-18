'use client'

import About from '../../components/About'
import { useFadeIn } from '../../hooks/useFadeIn'

export default function AboutPage() {
  useFadeIn()
  return <About />
}

'use client'

import { Suspense } from 'react'
import DemoForm from '../../components/DemoForm'
import { useFadeIn } from '../../hooks/useFadeIn'

export default function ContactPage() {
  useFadeIn()
  return (
    <Suspense fallback={null}>
      <DemoForm />
    </Suspense>
  )
}

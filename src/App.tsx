import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import DemoForm from './components/DemoForm'
import Footer from './components/Footer'
import { useFadeIn } from './hooks/useFadeIn'
import './App.css'

export default function App() {
  useFadeIn()
  const productSelectRef = useRef<HTMLSelectElement | null>(null)

  const handlePreselect = (product: string) => {
    // Find the select after the scroll completes
    setTimeout(() => {
      const sel = document.getElementById('product') as HTMLSelectElement | null
      if (sel) {
        sel.value = product
        sel.style.transition = 'border-color .3s'
        sel.style.borderColor = 'var(--cyan)'
        setTimeout(() => { sel.style.borderColor = '' }, 1200)
      }
    }, 700)
  }

  // Suppress unused ref warning
  void productSelectRef

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products onPreselect={handlePreselect} />
      <Services />
      <WhyUs />
      <DemoForm />
      <Footer />
    </>
  )
}

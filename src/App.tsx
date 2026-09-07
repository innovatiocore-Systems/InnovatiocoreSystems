import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlatformStrip from './components/PlatformStrip'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Faq from './components/Faq'
import CtaBanner from './components/CtaBanner'
import DemoForm from './components/DemoForm'
import Footer from './components/Footer'
import { useFadeIn } from './hooks/useFadeIn'
import './App.css'

export default function App() {
  useFadeIn()

  // Preselect the product in the demo form once the scroll to #demo settles
  const handlePreselect = (product: string) => {
    setTimeout(() => {
      const sel = document.getElementById('product') as HTMLSelectElement | null
      if (!sel) return
      sel.value = product
      sel.style.transition = 'border-color .3s, box-shadow .3s'
      sel.style.borderColor = 'var(--brand)'
      sel.style.boxShadow = '0 0 0 3px rgba(81,112,255,.22)'
      setTimeout(() => {
        sel.style.borderColor = ''
        sel.style.boxShadow = ''
      }, 1400)
    }, 700)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <PlatformStrip />
      <About />
      <Products onPreselect={handlePreselect} />
      <Services />
      <WhyUs />
      <Faq />
      <CtaBanner />
      <DemoForm />
      <Footer />
    </>
  )
}

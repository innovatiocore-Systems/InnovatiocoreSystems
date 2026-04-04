import { useEffect } from 'react'

export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    const observe = () => {
      document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    }
    observe()
    // re-observe after short delay (allows late-rendered elements)
    const t = setTimeout(observe, 300)
    return () => {
      observer.disconnect()
      clearTimeout(t)
    }
  }, [])
}

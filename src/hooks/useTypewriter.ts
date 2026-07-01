import { useEffect, useState } from 'react'

const PHRASES = [
  'Healthcare Software Solutions',
  'Workforce Management Systems',
  'Digital Transformation Tools',
  'Scalable Cloud Systems',
  'Smart Business Automation',
]

const TYPE_SPEED   = 60
const DELETE_SPEED = 35
const PAUSE_AFTER  = 1800
const PAUSE_BEFORE = 400

export function useTypewriter() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIndex]

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER)
      return () => clearTimeout(t)
    }

    if (isDeleting && displayed === '') {
      const t = setTimeout(() => {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % PHRASES.length)
      }, PAUSE_BEFORE)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      )
    }, isDeleting ? DELETE_SPEED : TYPE_SPEED)

    return () => clearTimeout(t)
  }, [displayed, isDeleting, phraseIndex])

  return displayed
}

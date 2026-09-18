'use client'

import Products from '../../components/Products'
import { useFadeIn } from '../../hooks/useFadeIn'

export default function ProductsPage() {
  useFadeIn()
  return <Products />
}

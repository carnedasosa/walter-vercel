import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
  
  // High-performance defaults
  gsap.config({
    nullTargetWarn: false,
  })

  // Optimize ScrollTrigger for mobile
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  })
}

export { gsap, ScrollTrigger, useGSAP }

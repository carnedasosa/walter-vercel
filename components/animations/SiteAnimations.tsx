'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let pluginsRegistered = false

function registerGsapPlugins() {
  if (pluginsRegistered) return
  gsap.registerPlugin(ScrollTrigger)
  pluginsRegistered = true
}

export function SiteAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    registerGsapPlugins()

    const ctx = gsap.context(() => {
      const introElements = gsap.utils.toArray<HTMLElement>('[data-gsap-intro]')

      introElements.forEach((element, index) => {
        const customDelay = Number(element.dataset.gsapDelay ?? `${index * 0.08}`)

        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28, filter: 'blur(3px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            delay: customDelay,
            ease: 'power3.out',
            clearProps: 'filter',
          }
        )
      })

      const revealSections = gsap.utils.toArray<HTMLElement>('[data-gsap-section]')

      revealSections.forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 32, filter: 'blur(2px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'filter',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      const staggerContainers = gsap.utils.toArray<HTMLElement>('[data-gsap-stagger]')

      staggerContainers.forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[]
        if (!children.length) return

        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return null
}

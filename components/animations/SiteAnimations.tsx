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
      // Intro animations
      const introElements = gsap.utils.toArray<HTMLElement>('[data-gsap-intro]')
      if (introElements.length) {
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
              clearProps: 'filter,transform',
            }
          )
        })
      }

      // Section reveal
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

      // Stagger containers
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

    // Force a refresh after a short delay to ensure layout is final
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      ctx.revert()
      clearTimeout(timer)
    }
  }, [])

  return null
}

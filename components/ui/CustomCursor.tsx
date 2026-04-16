'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const followerPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check for touch devices/pointer precision
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (prefersReducedMotion || !hasFinePointer) {
      document.documentElement.classList.remove('has-custom-cursor')
      return
    }

    setIsVisible(true)
    document.documentElement.classList.add('has-custom-cursor')

    const handleMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Dot follows immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`
      }
      
      // Follower lags behind
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`
      }
      
      rafRef.current = requestAnimationFrame(animate)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea')
      if (dotRef.current) {
        dotRef.current.style.width = isInteractive ? '20px' : '12px'
        dotRef.current.style.height = isInteractive ? '20px' : '12px'
        dotRef.current.style.opacity = isInteractive ? '0.5' : '1'
      }
      if (followerRef.current) {
        followerRef.current.style.width = isInteractive ? '48px' : '32px'
        followerRef.current.style.height = isInteractive ? '48px' : '32px'
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div ref={dotRef} className="custom-cursor" aria-hidden="true" />
      <div ref={followerRef} className="cursor-follower" aria-hidden="true" />
    </>
  )
}

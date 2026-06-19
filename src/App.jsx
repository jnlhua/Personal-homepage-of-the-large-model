import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import TargetCursor from './components/TargetCursor'
import CursorTrail from './components/CursorTrail'
import CurvedLoop from './components/CurvedLoop'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: 0.1,
    })
    window.__lenis = lenis

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // ============================================
    // ABOUT: Left/right slide-in and slide-out (scrubbed)
    // ============================================
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      const aboutHeader = aboutSection.querySelector('.anim-item:not([data-anim])')
      const slideLeftEls = aboutSection.querySelectorAll('[data-anim="slide-left"]')
      const slideRightEls = aboutSection.querySelectorAll('[data-anim="slide-right"]')

      if (aboutHeader) {
        gsap.set(aboutHeader, { opacity: 0, y: 40 })
        ScrollTrigger.create({
          trigger: aboutHeader,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(aboutHeader, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
          },
        })
      }

      gsap.set(slideLeftEls, { opacity: 0, x: -250 })
      gsap.set(slideRightEls, { opacity: 0, x: 250 })

      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 85%',
          end: 'bottom 0%',
          scrub: 3.5,
        },
      })

      aboutTl
        .to(slideLeftEls, { opacity: 1, x: 0, duration: 4, stagger: 0.6, ease: 'power2.out' }, 0)
        .to(slideRightEls, { opacity: 1, x: 0, duration: 4, stagger: 0.6, ease: 'power2.out' }, 0.4)
        .to({}, { duration: 3 })
        .to(slideLeftEls, { opacity: 0, x: -250, duration: 4, stagger: 0.4 }, '+=0')
        .to(slideRightEls, { opacity: 0, x: 250, duration: 4, stagger: 0.4 }, '<')
    }

    // ============================================
    // PROJECTS: Fade in/out linked to scroll position (scrubbed)
    // ============================================
    const projectCards = document.querySelectorAll('#projects .project-card-glow')
    projectCards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 100 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          end: 'bottom 0%',
          scrub: 3.5,
        },
      })

      tl.to(card, { opacity: 1, y: 0, duration: 4, ease: 'power2.out' }, 0)
        .to({}, { duration: 3 })
        .to(card, { opacity: 0, y: -80, duration: 4, ease: 'power2.in' }, '+=0')
    })

    // ============================================
    // STRENGTHS: Side cards slide in, middle cards fade in — then reverse
    // ============================================
    const strengthsSection = document.querySelector('#strengths')
    if (strengthsSection) {
      const strengthsHeader = strengthsSection.querySelector('.anim-item:not([data-anim])')
      if (strengthsHeader) {
        gsap.set(strengthsHeader, { opacity: 0, y: 40 })
        ScrollTrigger.create({
          trigger: strengthsHeader,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(strengthsHeader, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
          },
        })
      }

      const sideCards = strengthsSection.querySelectorAll('[data-anim="slide"]')
      const midCards = strengthsSection.querySelectorAll('[data-anim="fade"]')

      gsap.set(sideCards, { opacity: 0, x: (i) => i % 2 === 0 ? -200 : 200 })
      gsap.set(midCards, { opacity: 0, scale: 0.85 })

      const sTl = gsap.timeline({
        scrollTrigger: {
          trigger: strengthsSection,
          start: 'top 85%',
          end: 'bottom 0%',
          scrub: 3.5,
        },
      })

      sTl
        .to(sideCards, { opacity: 1, x: 0, duration: 4, stagger: 0.4, ease: 'power2.out' }, 0)
        .to(midCards, { opacity: 1, scale: 1, duration: 4, stagger: 0.4, ease: 'power2.out' }, 0.4)
        .to({}, { duration: 3 })
        .to(sideCards, { opacity: 0, x: (i) => i % 2 === 0 ? -200 : 200, duration: 4, stagger: 0.3 }, '+=0')
        .to(midCards, { opacity: 0, scale: 0.85, duration: 4, stagger: 0.3 }, '<')
    }

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = null
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={mainRef} className="app">
      <TargetCursor targetSelector=".cursor-target" spinDuration={2.5} hideDefaultCursor />
      <CursorTrail />
      <Navbar />
      <Hero />
      <CurvedLoop
        marqueeText="AI ✦ RAG ✦ Agent ✦ Full-Stack ✦ Python ✦ Vue ✦ FastAPI ✦ LLM ✦ "
        speed={1.5}
        curveAmount={300}
        interactive={false}
      />
      <About />
      <Projects />
      <Strengths />
      <Contact />
    </div>
  )
}

export default App

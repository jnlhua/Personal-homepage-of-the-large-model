import { useEffect, useRef, useState } from 'react'
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
  const [finePointer, setFinePointer] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine) and (hover: hover)')
    const update = () => setFinePointer(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: reduceMotion ? 0.4 : 1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduceMotion,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: reduceMotion ? 0.18 : 0.1,
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

    const revealOnce = (targets, vars = {}) => {
      if (!targets || targets.length === 0) return
      ScrollTrigger.batch(targets, {
        start: 'top 88%',
        once: true,
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: reduceMotion ? 0.2 : 0.75,
            stagger: reduceMotion ? 0 : 0.08,
            ease: 'power3.out',
            overwrite: true,
            ...vars,
          })
        },
      })
    }

    // ABOUT: 进入时一次性 reveal，避免 scrub 长时间线拖慢滚动
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
      revealOnce([...slideLeftEls, ...slideRightEls])
    }

    // PROJECTS: 一次性 reveal，快速滚动时不再“卡住又消失”
    const projectCards = document.querySelectorAll('#projects .project-card-glow')
    gsap.set(projectCards, { opacity: 0, y: 80 })
    revealOnce(projectCards)

    // STRENGTHS: 只保留进入动画，移除反向退出动画
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
      revealOnce([...sideCards, ...midCards])
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
      {finePointer && (
        <>
          <TargetCursor targetSelector=".cursor-target" spinDuration={2.5} hideDefaultCursor />
          <CursorTrail />
        </>
      )}
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

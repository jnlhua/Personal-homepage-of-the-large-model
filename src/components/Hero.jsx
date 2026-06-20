import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import DotGrid from './DotGrid'
import BlurText from './BlurText'
import ShinyText from './ShinyText'

const FloatingLines = lazy(() => import('./FloatingLines'))

export default function Hero() {
  const heroRef = useRef(null)
  const orbRef1 = useRef(null)
  const orbRef2 = useRef(null)
  const orbRef3 = useRef(null)
  const [finePointer, setFinePointer] = useState(false)
  const [showWebGL, setShowWebGL] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine) and (hover: hover) and (min-width: 769px)')
    const update = () => setFinePointer(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!finePointer) {
      return
    }

    const schedule = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 900))
    const cancel = window.cancelIdleCallback || window.clearTimeout
    const id = schedule(() => setShowWebGL(true), { timeout: 1800 })
    return () => cancel(id)
  }, [finePointer])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo('.hero__tag', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: reduceMotion ? 0.2 : 0.8, delay: 0.3 })
      .fromTo('.hero__name', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '-=0.4')
      .fromTo('.hero__title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo('.hero__desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .fromTo('.hero__actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .fromTo('.hero__scroll', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.2')

    if (reduceMotion) return

    gsap.to(orbRef1.current, { x: 30, y: -20, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(orbRef2.current, { x: -25, y: 30, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(orbRef3.current, { x: 20, y: 25, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" ref={orbRef1} />
        <div className="hero__orb hero__orb--2" ref={orbRef2} />
        <div className="hero__orb hero__orb--3" ref={orbRef3} />
        <div className="hero__grid" />
        {finePointer && (
          <div className="hero__dotgrid">
            <DotGrid
              dotSize={3}
              gap={32}
              baseColor="#1a1a2e"
              activeColor="#6366f1"
              proximity={100}
              shockRadius={80}
              shockStrength={2}
              resistance={700}
              returnDuration={0.8}
            />
          </div>
        )}
        {showWebGL && (
          <div className="hero__floating-lines">
            <Suspense fallback={null}>
              <FloatingLines
                linesGradient={['#6366f1', '#a855f7', '#22d3ee']}
                enabledWaves={['top', 'middle', 'bottom']}
                lineCount={[5, 8, 8]}
                lineDistance={[8, 5, 4]}
                bendRadius={2.6}
                bendStrength={-0.6}
                mouseDamping={0.12}
                interactive={true}
                parallax={true}
                parallaxStrength={0.16}
                animationSpeed={1}
                mixBlendMode="screen"
              />
            </Suspense>
          </div>
        )}
      </div>
      <div className="hero__content">
        <div className="hero__tag">&lt;AI Engineer /&gt;</div>
        <h1 className="hero__name">
          <ShinyText
            text="姜诺灵"
            color="#a5b4fc"
            shineColor="#ffffff"
            speed={3}
            delay={2}
            spread={120}
            direction="left"
          />
        </h1>
        <p className="hero__title">
          AI 大模型应用开发工程师
        </p>
        <div className="hero__desc">
          <BlurText
            text="专注于 RAG 检索增强、Agent 智能体编排与大模型落地应用，致力于打造高质量的 AI 产品体验"
            delay={0}
            animateBy="words"
            direction="bottom"
            stepDuration={80}
          />
        </div>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary cursor-target">
            查看项目
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#contact" className="btn btn--ghost cursor-target">
            与我联系
          </a>
        </div>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>向下滚动</span>
      </div>
    </section>
  )
}

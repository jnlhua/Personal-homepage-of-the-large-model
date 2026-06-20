import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
  stepDuration = 0.35,
  className = '',
}) => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const items = animateBy === 'words'
    ? text.split(/(\s+)/)
    : text.split('');

  const getInitial = (i) => {
    const d = direction === 'top' ? -40 : 40;
    return { opacity: 0, filter: 'blur(10px)', y: d, transition: { delay: (delay + i * stepDuration) / 1000, duration: stepDuration } };
  };

  const getAnimate = (i) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { delay: (delay + i * stepDuration) / 1000, duration: stepDuration, ease: [0.16, 1, 0.3, 1] }
  });

  return (
    <span ref={containerRef} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          initial={getInitial(i)}
          animate={inView ? getAnimate(i) : undefined}
          onAnimationComplete={i === items.length - 1 ? onAnimationComplete : undefined}
        >
          {item}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;

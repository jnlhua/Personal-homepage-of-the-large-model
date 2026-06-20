import ShinyText from './ShinyText'
import BorderGlow from './BorderGlow'
import DotField from './DotField'

export default function Contact() {
  return (
    <section id="contact" className="contact animate-section">
      <div className="contact__dotfield">
        <DotField
          dotRadius={2.5}
          dotSpacing={12}
          bulgeStrength={80}
          glowRadius={200}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="rgba(99, 102, 241, 0.8)"
          gradientTo="rgba(168, 85, 247, 0.7)"
          glowColor="rgba(139, 92, 246, 0.6)"
        />
      </div>
      <div className="section-container">
        <div className="contact__content anim-item">
          <div className="section-label">04 / Contact</div>
          <h2 className="contact__title">
            <ShinyText text="期待与你合作" color="#e2e8f0" shineColor="#818cf8" speed={1} delay={0.1} spread={100} />
          </h2>
          <p className="contact__desc">
            我正在寻找 AI 大模型应用开发方向的实习机会，<br />
            如果你对 RAG、Agent、大模型落地等方向感兴趣，欢迎联系我。
          </p>
          <div className="contact__links">
            <BorderGlow
              className="contact-link-glow cursor-target"
              edgeSensitivity={25}
              glowColor="260 80 70"
              backgroundColor="#0a0a14"
              borderRadius={14}
              glowRadius={20}
              glowIntensity={0.6}
              coneSpread={20}
              colors={['#6366f1', '#a855f7', '#22d3ee']}
            >
              <a href="mailto:2128645477@qq.com" className="contact__link contact__link--email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>2128645477@qq.com</span>
              </a>
            </BorderGlow>
            <BorderGlow
              className="contact-link-glow cursor-target"
              edgeSensitivity={25}
              glowColor="260 80 70"
              backgroundColor="#0a0a14"
              borderRadius={14}
              glowRadius={20}
              glowIntensity={0.6}
              coneSpread={20}
              colors={['#6366f1', '#a855f7', '#22d3ee']}
            >
              <a href="tel:19817043680" className="contact__link contact__link--phone">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>198-1704-3680</span>
              </a>
            </BorderGlow>
            <BorderGlow
              className="contact-link-glow cursor-target"
              edgeSensitivity={25}
              glowColor="260 80 70"
              backgroundColor="#0a0a14"
              borderRadius={14}
              glowRadius={20}
              glowIntensity={0.6}
              coneSpread={20}
              colors={['#6366f1', '#a855f7', '#22d3ee']}
            >
              <a href="https://github.com/jnlhua" target="_blank" rel="noopener" className="contact__link contact__link--github">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/jnlhua</span>
              </a>
            </BorderGlow>
          </div>
        </div>
        <div className="contact__footer anim-item">
          <p>&copy; 2026 姜诺灵 &middot; Built with React + Vite</p>
        </div>
      </div>
    </section>
  )
}

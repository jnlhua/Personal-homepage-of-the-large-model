import { useState } from 'react'
import ShinyText from './ShinyText'
import BorderGlow from './BorderGlow'

export default function Projects() {
  const [activeImg, setActiveImg] = useState({ qu: 0, qa: 0 })

  const quImages = ['/images/qu1.webp', '/images/qu2.webp', '/images/qu3.webp']
  const qaImages = ['/images/qa1.webp', '/images/qa2.webp', '/images/qa3.webp', '/images/qa4.webp']

  return (
    <section id="projects" className="projects animate-section">
      <div className="section-container">
        <div className="anim-item">
          <div className="section-label">02 / Projects</div>
          <h2 className="section-title">
            <ShinyText text="精选项目" color="#e2e8f0" shineColor="#22d3ee" speed={1} delay={0.1} />
          </h2>
          <p className="section-desc">从零到一的 AI 产品化实践，涵盖 RAG、Agent、Prompt 工程与全栈部署</p>
        </div>

        {/* Project 1: 衢小游 */}
        <BorderGlow
          className="project-card-glow cursor-target"
          edgeSensitivity={25}
          glowColor="260 80 70"
          backgroundColor="#0a0a14"
          borderRadius={20}
          glowRadius={30}
          glowIntensity={0.7}
          coneSpread={20}
          colors={['#6366f1', '#a855f7', '#22d3ee']}
        >
          <div className="project-card anim-item">
          <div className="project-card__visual">
            <div className="project-card__gallery">
              <img
                src={quImages[activeImg.qu]}
                alt="衢小游演示"
                className="project-card__main-img"
                loading="lazy"
                decoding="async"
              />
              <div className="project-card__thumbs">
                {quImages.map((img, i) => (
                  <button
                    key={i}
                    className={`project-card__thumb ${activeImg.qu === i ? 'project-card__thumb--active' : ''}`}
                    onClick={() => setActiveImg((p) => ({ ...p, qu: i }))}
                  >
                    <img src={img} alt={`衢小游 ${i + 1}`} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="project-card__info">
            <div className="project-card__header">
              <span className="project-card__number">01</span>
              <h3 className="project-card__title">衢小游</h3>
              <span className="project-card__subtitle">衢州旅游 AI Agent 助手</span>
            </div>
            <p className="project-card__desc">
              基于 DeepSeek 大模型构建的旅游 AI Agent，集成 RAG 检索增强与 Function Calling 工具编排，
              通过 ReAct 循环引擎实现天气查询、路线规划、景点推荐的一站式智能服务。
              前端 Vue 3 + 高德地图实时绘制路线，后端 FastAPI + SSE 流式输出。
            </p>
            <div className="project-card__techs">
              {['DeepSeek API', 'BGE-M3', 'ChromaDB', 'FastAPI', 'Vue 3', 'SSE', '高德地图 API', 'ReAct'].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-card__features">
              <div className="project-card__feature">
                <span className="project-card__feature-icon">&#9670;</span>
                <span>RAG 双路召回 + BGE-Reranker 精排</span>
              </div>
              <div className="project-card__feature">
                <span className="project-card__feature-icon">&#9670;</span>
                <span>4 个原子工具 Agent 自主决策</span>
              </div>
              <div className="project-card__feature">
                <span className="project-card__feature-icon">&#9670;</span>
                <span>Prompt 注入防护 + 身份锁</span>
              </div>
              <div className="project-card__feature">
                <span className="project-card__feature-icon">&#9670;</span>
                <span>SSE 流式输出 + 地图实时绘制</span>
              </div>
            </div>
            <a href="https://github.com/jnlhua/quzhou" target="_blank" rel="noopener" className="project-card__link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              查看源码
            </a>
          </div>
          </div>
        </BorderGlow>

        {/* Project 2: 问答助手 */}
        <BorderGlow
          className="project-card-glow cursor-target"
          edgeSensitivity={25}
          glowColor="260 80 70"
          backgroundColor="#0a0a14"
          borderRadius={20}
          glowRadius={30}
          glowIntensity={0.7}
          coneSpread={20}
          colors={['#6366f1', '#a855f7', '#22d3ee']}
        >
          <div className="project-card project-card--reverse anim-item">
          <div className="project-card__info">
            <div className="project-card__header">
              <span className="project-card__number">02</span>
              <h3 className="project-card__title">校园问答助手</h3>
              <span className="project-card__subtitle">从开发到上线的全链路实践</span>
            </div>
            <p className="project-card__desc">
              基于讯飞星火大模型的校园智能问答系统，覆盖 Web 端与微信小程序「姜助手」。
              WebSocket 实时对话、历史管理、Markdown 渲染、反馈通知等功能一应俱全。
              自主完成从云服务器部署、Nginx 反向代理、SSL 证书到 ICP 备案的完整上线闭环。
            </p>
            <div className="project-card__techs">
              {['FastAPI', 'WebSocket', 'Vue 3', '微信小程序', '讯飞星火 API', '腾讯云', 'Nginx', 'SSL'].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-card__features">
              <div className="project-card__feature">
                <span className="project-card__feature-icon">&#9670;</span>
                <span>WebSocket 流式逐 token 输出</span>
              </div>
              <div className="project-card__feature">
                <span className="project-card__feature-icon">&#9670;</span>
                <span>Web + 微信小程序多端覆盖</span>
              </div>
              <div className="project-card__feature">
                <span className="project-card__feature-icon">&#9670;</span>
                <span>历史对话管理与 Markdown 渲染</span>
              </div>
              <div className="project-card__feature">
                <span className="project-card__feature-icon">&#9670;</span>
                <span>ICP 备案 + 公安联网备案</span>
              </div>
            </div>
            <div className="project-card__links">
              <a href="https://www.aidj.asia" target="_blank" rel="noopener" className="project-card__link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                在线访问
              </a>
            </div>
          </div>
          <div className="project-card__visual">
            <div className="project-card__gallery">
              <img
                src={qaImages[activeImg.qa]}
                alt="问答助手演示"
                className="project-card__main-img"
                loading="lazy"
                decoding="async"
              />
              <div className="project-card__thumbs">
                {qaImages.map((img, i) => (
                  <button
                    key={i}
                    className={`project-card__thumb ${activeImg.qa === i ? 'project-card__thumb--active' : ''}`}
                    onClick={() => setActiveImg((p) => ({ ...p, qa: i }))}
                  >
                    <img src={img} alt={`问答助手 ${i + 1}`} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  )
}

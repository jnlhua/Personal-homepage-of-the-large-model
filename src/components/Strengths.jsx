import BorderGlow from './BorderGlow'
import ShinyText from './ShinyText'

export default function Strengths() {
  const strengths = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'RAG 检索增强',
      desc: '熟练运用 BGE-M3、ChromaDB、BM25 构建语义+稀疏双路召回链路，RRF 融合 + Reranker 精排实现高质量知识检索',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Agent 智能体编排',
      desc: '基于 ReAct 循环引擎 + Function Calling 实现多工具自主决策，最多 3 轮迭代完成复杂任务',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: '全栈开发能力',
      desc: 'FastAPI / Vue 3 / WebSocket / SSE 全栈技术栈，从后端 API 到前端交互的完整开发能力',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: '安全与合规',
      desc: 'Prompt 注入检测、身份锁防护、输入清洗等安全实践；独立完成 ICP 备案与公安联网备案',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
      ),
      title: '产品化思维',
      desc: '从需求分析到上线运维的完整产品闭环，注重用户体验、多端适配与合规交付',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Prompt 工程',
      desc: 'System Prompt 角色约束、工具调用策略嵌入、上下文推荐追问设计，杜绝幻觉提升回答质量',
    },
  ]

  return (
    <section id="strengths" className="strengths animate-section">
      <div className="section-container">
        <div className="anim-item">
          <div className="section-label">03 / Strengths</div>
          <h2 className="section-title">
            <ShinyText text="核心优势" color="#e2e8f0" shineColor="#a855f7" speed={1} delay={0.1} />
          </h2>
        </div>
        <div className="strengths__grid">
          {strengths.map((s, i) => (
            <div key={i} className="anim-item" data-anim={[0, 3, 5].includes(i) ? 'slide' : 'fade'}>
              <BorderGlow
                className="strength-card-wrapper cursor-target"
                edgeSensitivity={25}
                glowColor="260 80 70"
                backgroundColor="#0a0a14"
                borderRadius={16}
                glowRadius={30}
                glowIntensity={0.8}
                coneSpread={20}
                colors={['#6366f1', '#a855f7', '#22d3ee']}
              >
                <div className="strength-card">
                  <div className="strength-card__icon">{s.icon}</div>
                  <h3 className="strength-card__title">{s.title}</h3>
                  <p className="strength-card__desc">{s.desc}</p>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

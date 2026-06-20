import LogoLoop from './LogoLoop'
import Orb from './Orb'
import ShinyText from './ShinyText'
import BorderGlow from './BorderGlow'
import Folder from './Folder'

export default function About() {
  const stats = [
    { value: 'Top 1%', label: '专业成绩排名' },
    { value: '2', label: '完整上线项目' },
    { value: '3', label: '竞赛获奖' },
    { value: '100%', label: '独立全栈交付' },
  ]

  const awards = [
    {
      title: '蓝桥杯国赛三等奖',
      desc: '第十七届蓝桥杯 · 鸿蒙应用开发大学组',
      year: '2026',
      img: '/images/lanqiao.webp',
    },
    {
      title: '全国计算机二级',
      desc: 'Python 语言程序设计',
      year: '2025',
      img: '/images/ncre.webp',
    },
    {
      title: '国家励志奖学金',
      desc: '兰州资源环境职业技术大学',
      year: '2024',
      img: '/images/guolizhi.webp',
    },
    {
      title: '校级三好学生',
      desc: '年度综合表现优异',
      year: '2024',
      img: null,
    },
  ]

  const folderItems = awards.map((a) => ({
    preview: (
      <span style={{ fontSize: '10px', lineHeight: 1.3, fontWeight: 500 }}>
        {a.title}
      </span>
    ),
    content: (
      <BorderGlow
        className="award-card-wrapper cursor-target"
        edgeSensitivity={25}
        glowColor="260 80 70"
        backgroundColor="#0a0a14"
        borderRadius={16}
        glowRadius={25}
        glowIntensity={0.7}
        coneSpread={20}
        colors={['#6366f1', '#a855f7', '#22d3ee']}
      >
        <div className="award-card">
          {a.img && (
            <div className="award-card__img">
              <img src={a.img} alt={a.title} loading="lazy" decoding="async" />
            </div>
          )}
          <div className="award-card__body">
            <span className="award-card__year">{a.year}</span>
            <h4 className="award-card__title">{a.title}</h4>
            <p className="award-card__desc">{a.desc}</p>
          </div>
        </div>
      </BorderGlow>
    ),
  }))

  const techLogos = [
    { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python', title: 'Python' },
    { src: 'https://cdn.simpleicons.org/vue.js/4FC08D', alt: 'Vue.js', title: 'Vue 3' },
    { src: 'https://cdn.simpleicons.org/fastapi/009688', alt: 'FastAPI', title: 'FastAPI' },
    { src: 'https://cdn.simpleicons.org/github/ffffff', alt: 'GitHub', title: 'GitHub' },
    { src: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript', title: 'JavaScript' },
    { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker', title: 'Docker' },
    { src: 'https://cdn.simpleicons.org/linux/FCC624', alt: 'Linux', title: 'Linux' },
    { src: 'https://cdn.simpleicons.org/nginx/009639', alt: 'Nginx', title: 'Nginx' },
    { src: 'https://cdn.simpleicons.org/huggingface/FFD21E', alt: 'HuggingFace', title: 'HuggingFace' },
    { src: '/images/chroma.svg', alt: 'ChromaDB', title: 'ChromaDB' },
    { src: 'https://cdn.simpleicons.org/redis/DC382D', alt: 'Redis', title: 'Redis' },
    { src: '/images/tencent-cloud.svg', alt: 'Tencent Cloud', title: '腾讯云' },
  ]

  return (
    <section id="about" className="about animate-section">
      <div className="about__orb-bg">
        <Orb hue={260} hoverIntensity={0.4} rotateOnHover backgroundColor="#06060a" />
      </div>
      <div className="section-container">
        <div className="anim-item">
          <div className="section-label">01 / About</div>
          <h2 className="section-title">
            <ShinyText text="关于我" color="#e2e8f0" shineColor="#818cf8" speed={1} delay={0.1} />
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__info anim-item" data-anim="slide-left">
            <div className="about__avatar">
              <div className="about__avatar-inner">JNL</div>
            </div>
            <div className="about__text">
              <h3>姜诺灵</h3>
              <p className="about__school">兰州资源环境职业技术大学</p>
              <p className="about__major">人工智能工程技术 / 本科 · 2023-2026</p>
              <p className="about__bio">
                我是一名热衷于 AI 大模型应用开发的在读本科生，专注于将前沿 AI 技术转化为可落地的产品。
                从 RAG 检索增强生成到 Agent 智能体编排，从 Prompt 工程到全栈部署，
                我追求的是从 0 到 1 的完整产品闭环能力。
              </p>
            </div>
          </div>

          <div className="about__stats anim-item" data-anim="slide-right">
            {stats.map((s, i) => (
              <BorderGlow
                key={i}
                className="about-stat-wrapper cursor-target"
                edgeSensitivity={25}
                glowColor="260 80 70"
                backgroundColor="#0a0a14"
                borderRadius={16}
                glowRadius={25}
                glowIntensity={0.7}
                coneSpread={20}
                colors={['#6366f1', '#a855f7', '#22d3ee']}
              >
                <div className="about__stat">
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        <div className="about__awards anim-item" data-anim="slide-right">
          <h3 className="about__awards-title">荣誉与证书</h3>
          <Folder
            color="#6366f1"
            size={1.6}
            items={folderItems}
            className="awards-folder"
            hint="点击打开文件夹查看证书"
          />
        </div>

        {/* Tech Stack LogoLoop */}
        <div className="about__techstack anim-item" data-anim="slide-right">
          <h3 className="about__awards-title">技术栈</h3>
          <div className="about__logoloop">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={36}
              gap={48}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#06060a"
              ariaLabel="技术栈"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

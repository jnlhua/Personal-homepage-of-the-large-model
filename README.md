# Personal Portfolio — 姜诺灵

面向 **AI 大模型应用开发实习** 岗位的个人作品集网站，采用暗色科技风设计，PC 端优先体验。

线上访问：[home.aidj.asia](https://home.aidj.asia)

---

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + Vite |
| 动画 | GSAP + ScrollTrigger（滚动驱动）、Motion（ShinyText 颜色流光） |
| 滚动 | Lenis 平滑滚动 |
| 部署 | GitHub Pages + GitHub Actions 自动构建 |
| 域名 | home.aidj.asia（腾讯云 CNAME） |

## 页面结构

- **Hero** — 全屏入场，DotGrid / FloatingLines 背景粒子，BlurText 逐字显示
- **About** — 个人介绍、数据卡片（BorderGlow 边缘光效）、荣誉证书文件夹（Folder 3D 交互）、技术栈 LogoLoop 无限滚动
- **Projects** — QuTrainer 和 QA-System 两个代表项目，带图片画廊切换
- **Strengths** — 六大核心竞争力卡片
- **Contact** — DotField 点阵交互背景，鼠标靠近时点阵产生涟漪发光

## 特色组件

| 组件 | 说明 |
|------|------|
| `BorderGlow` | 卡片边缘跟随鼠标的彩色光晕效果 |
| `ShinyText` | 文字表面流光色彩动画 |
| `Folder` | 3D 文件夹，点击展开证书卡片 |
| `DotField` | Canvas 点阵背景，支持鼠标排斥 + 发光 |
| `LogoLoop` | 技术栈 Logo 无限循环滚动条 |
| `CurvedLoop` | SVG 曲线分隔线动画 |

## 本地开发

```bash
npm install
npm run dev        # 启动开发服务器 → localhost:5173
npm run build      # 生产构建
npm run preview    # 预览生产构建
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动执行构建并部署到 GitHub Pages。

```yaml
.github/workflows/deploy.yml
```

## 目录结构

```
src/
├── components/      # 各区块组件
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Strengths.jsx
│   ├── Contact.jsx
│   ├── BorderGlow.jsx
│   ├── ShinyText.jsx
│   ├── Folder.jsx
│   ├── DotField.jsx
│   ├── LogoLoop.jsx
│   └── ...
├── App.jsx          # 主布局 + GSAP 滚动动画
├── App.css          # 全局样式
└── main.jsx         # 入口
public/
└── images/          # 压缩后的项目截图 & 证书图片
```

---

Built with ❤️ by 姜诺灵

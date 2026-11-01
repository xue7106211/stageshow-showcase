import HeroDemo from './demos/hero-demo'
import Bento from './demos/bento'
import PublishFlow from './demos/publish-flow'
import TokenChat from './demos/token-chat'

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#top" id="top">
          <span className="brand-mark" aria-hidden />
          <span>Token Desk</span>
        </a>
        <nav className="nav">
          <a href="#demos">演示</a>
          <a href="#about">关于</a>
          <a href="https://github.com/xue7106211/stageshow-showcase" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Design Ops · Token Pipeline</p>
          <h1>
            把 Token 管线讲清楚，
            <br />
            像真正的产品一样演示。
          </h1>
          <p className="lede">
            Token Desk 是一个虚构的 Design Ops 产品故事，灵感来自薛一飞（Allen Xue）在设计系统 /
            HyperOS Token / Figma→代码方向的公开实践。页面用 Benji Taylor 的{' '}
            <a href="https://benji.org/stageshow" target="_blank" rel="noreferrer">
              Stageshow
            </a>{' '}
            React kit 做出可循环的假 UI 演示。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#demos">
              看演示
            </a>
            <a className="btn btn-ghost" href="https://github.com/benjitaylor/skills/tree/main/stageshow" target="_blank" rel="noreferrer">
              Stageshow 源码
            </a>
          </div>
        </div>
        <div className="hero-stage" aria-label="Token Desk hero demo">
          <HeroDemo />
        </div>
      </section>

      <section className="section" id="demos">
        <div className="section-head">
          <h2>能力一览</h2>
          <p>Bento 网格：同步、覆盖率、Token 卡片、发布审批、Figma→代码。</p>
        </div>
        <Bento />
      </section>

      <section className="section section-split">
        <div className="split-card">
          <div className="section-head">
            <h2>一键发布</h2>
            <p>无光标的产品窗场景：覆盖率抬升、队列入场、发布完成。</p>
          </div>
          <div className="stage-frame stage-frame--publish">
            <PublishFlow />
          </div>
        </div>
        <div className="split-card">
          <div className="section-head">
            <h2>问 Token Desk</h2>
            <p>产品窗里的助手：提问、思考、流式回答与来源。</p>
          </div>
          <div className="stage-frame stage-frame--chat">
            <TokenChat />
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-grid">
          <div>
            <h2>关于这个站点</h2>
            <p>
              这不是官方 playground 的原样搬运，而是基于 Stageshow 的 <code>kit/</code> 与若干 gold
              examples（hero-demo、bento、payout-flow、ai-chat）改写的新营销页。产品名 Token Desk
              为虚构；文案围绕公开的设计工程主题：Design Token、组件契约、Figma→代码，不包含任何内部机密。
            </p>
            <p>
              作者：薛一飞 Allen Xue · 设计工程师。仓库：
              <a href="https://github.com/xue7106211/stageshow-showcase" target="_blank" rel="noreferrer">
                xue7106211/stageshow-showcase
              </a>
              。
            </p>
          </div>
          <div className="credit">
            <h3>Credit</h3>
            <p>
              Stageshow © Benji Taylor · MIT
              <br />
              <a href="https://benji.org/stageshow" target="_blank" rel="noreferrer">
                benji.org/stageshow
              </a>
              <br />
              <a href="https://github.com/benjitaylor/skills/tree/main/stageshow" target="_blank" rel="noreferrer">
                github.com/benjitaylor/skills
              </a>
              <br />
              <a href="https://x.com/benjitaylor/status/2116593247854453244" target="_blank" rel="noreferrer">
                原始推文
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Token Desk showcase · built with Stageshow</span>
        <span>MIT · kit from Benji Taylor</span>
      </footer>
    </div>
  )
}

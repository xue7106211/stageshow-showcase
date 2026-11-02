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
            Token Desk 演示一条
            <br />
            Design Token 发布管线。
          </h1>
          <p className="lede">
            Token Desk 是虚构的 Design Ops 产品，题材取自薛一飞（Allen Xue）公开分享过的设计系统、
            HyperOS Token 和 Figma 转代码工作。下面的动画用 Benji Taylor 的{' '}
            <a href="https://benji.org/stageshow" target="_blank" rel="noreferrer">
              Stageshow
            </a>{' '}
            React kit 搭成，循环播放，界面都是假的。
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
          <p>五张卡片分别演示 Figma 同步、Token 覆盖率、Token 详情、发布审批和 Figma 转代码。</p>
        </div>
        <Bento />
      </section>

      <section className="section section-split">
        <div className="split-card">
          <div className="section-head">
            <h2>一键发布</h2>
            <p>覆盖率升到目标值后，变更进入发布队列，随后发布完成。</p>
          </div>
          <div className="stage-frame stage-frame--publish">
            <PublishFlow />
          </div>
        </div>
        <div className="split-card">
          <div className="section-head">
            <h2>问 Token Desk</h2>
            <p>向内置助手问一个 Token 映射问题，它逐字给出回答并附上来源。</p>
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
              页面基于 Stageshow 的 <code>kit/</code> 和四个官方示例（hero-demo、bento、payout-flow、ai-chat）改写，
              没有照搬官方 playground。Token Desk 是虚构的产品名。文案只涉及公开的设计工程话题，
              包括 Design Token、组件契约和 Figma 转代码，不含内部数据。
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

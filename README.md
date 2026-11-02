# Token Desk · Stageshow Showcase

用 [Stageshow](https://benji.org/stageshow)（Benji Taylor，MIT）React kit 搭的单页展示站。

页面演示一个虚构产品 Token Desk。它把 Figma 里的 Design Token 对齐到代码，统计覆盖率，走发布审批，再生成代码。题材取自薛一飞（Allen Xue）公开分享过的设计系统、HyperOS Token 和 Figma 转代码工作，不含内部数据。

## 本地运行

需要 Node.js ≥ 20.19。

```sh
npm install
npm run dev
```

构建：

```sh
npm run build
npm run preview
```

## 页面里有什么

- Hero 改编自 `hero-demo`。光标打开 Token 面板，复制一段 Token，再粘贴给 Agent。
- Bento 改编自 `bento`。五张卡片分别演示同步、覆盖率、Token 详情、审批和管线。
- Publish 改编自 `payout-flow`。覆盖率达标后，变更进入队列并发布。
- Ask 改编自 `ai-chat`。用户问一个 Token 映射问题，助手给出回答和来源。

`src/kit/` 来自官方 Stageshow kit；示例在 `src/demos/`。

## 致谢

- Stageshow © Benji Taylor · MIT  
  https://benji.org/stageshow  
  https://github.com/benjitaylor/skills/tree/main/stageshow  
- 原始介绍：https://x.com/benjitaylor/status/2116593247854453244

本仓库另附 `STAGESHOW_LICENSE` 与 `STAGESHOW_NOTICE.md`。

## 部署

Netlify 按 `netlify.toml` 运行 `npm run build`，发布 `dist` 目录，所有未匹配的路径回退到 `index.html`。

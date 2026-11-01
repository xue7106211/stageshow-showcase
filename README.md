# Token Desk · Stageshow Showcase

一个用 [Stageshow](https://benji.org/stageshow)（Benji Taylor，MIT）React kit 做的营销向展示站。

虚构产品 **Token Desk** 讲述 Design Ops / Design Token 管线故事：Token 对齐、覆盖率、发布审批、Figma→代码。主题灵感来自薛一飞（Allen Xue）公开的设计工程实践（设计系统、HyperOS Token、Figma→代码），**不含任何内部机密数据**。

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

- **Hero**：改编自 `hero-demo` 的光标走查（标注 Token 面板 → 复制 → 粘贴进 Agent）
- **Bento**：改编自 `bento` 的能力网格（同步 / 覆盖率 / Token 卡片 / 审批 / 管线）
- **Publish**：改编自 `payout-flow` 的产品窗发布编排
- **Ask**：改编自 `ai-chat` 的助手问答窗

`src/kit/` 来自官方 Stageshow kit；示例在 `src/demos/`。

## 致谢

- Stageshow © Benji Taylor · MIT  
  https://benji.org/stageshow  
  https://github.com/benjitaylor/skills/tree/main/stageshow  
- 原始介绍：https://x.com/benjitaylor/status/2116593247854453244

本仓库另附 `STAGESHOW_LICENSE` 与 `STAGESHOW_NOTICE.md`。

## 部署

`netlify.toml`：`npm run build`，发布目录 `dist`，SPA 回退到 `index.html`。

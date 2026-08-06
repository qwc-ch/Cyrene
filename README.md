很久没有更新了，用AI合并了下firefly，基本上是只保留了一些美术资源，我推荐大家去用[firefly](https://github.com/CuteLeaf/Firefly)


<img src="./docs/images/1131.png" width="350" height="500" alt="Cyrene" align=right />

<div align="center">

# Cyrene
> 一款清新美观的 Astro 博客主题模板
>
> ![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)
![Astro](https://img.shields.io/badge/Astro-7.1.3-orange)
![GitHub License](https://img.shields.io/badge/license-MIT-blue)
>
> [![Stars](https://img.shields.io/github/stars/qwc-ch/Cyrene?style=social)](https://github.com/qwc-ch/Cyrene/stargazers)
[![Forks](https://img.shields.io/github/forks/qwc-ch/Cyrene?style=social)](https://github.com/qwc-ch/Cyrene/network/members)

</div>

---

📖 README：
**[简体中文](README.md)** | **[繁體中文](docs/README.zh-TW.md)** | **[English](README.en.md)** | **[日本語](docs/README.ja.md)**

🚀 快速指南：
[**📝 使用文档**](https://docs-firefly.cuteleaf.cn/)（Firefly 文档，仅供参考） /
[**🍀 我的博客**](https://qwc-ch.github.io)

⚡ 静态站点生成: 基于 Astro 的超快加载速度和 SEO 优化

🎨 现代化设计: 简洁美观的界面，支持自定义主题色

📱 移动友好: 完美的响应式体验，移动端专项优化

🔧 高度可配置: 大部分功能模块均可通过配置文件自定义

## ✨ 核心功能

Cyrene 由 **Firefly** 开发而来，在核心功能层面，两者保持高度一致，确保您能获得同样成熟、完善的博客体验，故不在此重复列举。

与 Firefly 的差异：
- 看板娘模型替换为 **昔涟** Spine 模型
- 主题色默认调整为粉色

您可查阅 [Firefly 仓库](https://github.com/CuteLeaf/Firefly) 了解详细特性（仅为参考）。

## 📝 计划中...

- [ ] 更多功能持续完善中...

如果你有好用的功能和优化，请提交 [Pull Request](https://github.com/qwc-ch/Cyrene/pulls)

## 🚀 快速开始

### 环境要求

- Node.js ≥ 22
- pnpm ≥ 9

### 本地开发部署

1. **克隆仓库：**

   ```bash
   git clone https://github.com/qwc-ch/Cyrene.git
   cd Cyrene
   ```

   **先 [Fork](https://github.com/qwc-ch/Cyrene/fork) 到自己仓库再克隆（推荐，想把博客部署到 GitHub Pages 的话要把仓库名改为"用户名.github.io"）**

   ```bash
   git clone https://github.com/you-github-name/Cyrene.git
   cd Cyrene
   ```

2. **安装依赖：**

   ```bash
   # 如果没有安装 pnpm，先安装
   npm install -g pnpm

   # 安装项目依赖
   pnpm install
   ```

3. **配置博客：**
   - 编辑 `src/config/` 目录下的配置文件自定义博客设置

4. **启动开发服务器：**

   ```bash
   pnpm dev
   ```

   博客将在 `http://localhost:4321` 可用

### 平台托管部署

- **参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages, Cloudflare Pages, EdgeOne Pages 等。**

   框架预设： `Astro`

   根目录： `./`

   输出目录： `dist`

   构建命令： `pnpm run build`

   安装命令： `pnpm install`

## 📖 配置说明

> 📚 **详细配置文档**: 查看（仅为参考）[Firefly 使用文档](https://docs-firefly.cuteleaf.cn/)

### 设置网站语言

要设置博客的默认语言，请编辑 `src/config/siteConfig.ts` 文件：

```typescript
// 定义站点语言
const SITE_LANG = "zh_CN";
```

**支持的语言代码：**
- `zh_CN` - 简体中文
- `zh_TW` - 繁体中文
- `en` - 英文
- `ja` - 日文
- `ru` - 俄文
- `ko` - 韩文

### 配置文件结构

```
src/
├── config/
│   ├── index.ts                  # 配置索引文件
│   ├── siteConfig.ts             # 站点基础配置
│   ├── analyticsConfig.ts        # 统计分析配置
│   ├── announcementConfig.ts     # 公告配置
│   ├── backgroundWallpaper.ts    # 背景壁纸配置
│   ├── commentConfig.ts          # 评论系统配置
│   ├── coverImageConfig.ts       # 封面图配置
│   ├── displaySettingsConfig.ts  # 设置面板配置
│   ├── dynamicConfig.ts          # 动态页面配置
│   ├── effectsConfig.ts          # 动画特效配置（樱花等）
│   ├── expressiveCodeConfig.ts   # 代码高亮配置
│   ├── fontConfig.ts             # 字体配置
│   ├── footerConfig.ts           # 页脚配置
│   ├── friendsConfig.ts          # 友链配置
│   ├── galleryConfig.ts          # 相册配置
│   ├── licenseConfig.ts          # 许可证配置
│   ├── musicConfig.ts            # 音乐播放器配置
│   ├── navBarConfig.ts           # 导航栏配置
│   ├── pioConfig.ts              # 看板娘配置
│   ├── mermaidConfig.ts          # Mermaid 图表配置
│   ├── plantumlConfig.ts         # PlantUML 图表配置
│   ├── profileConfig.ts          # 用户资料配置
│   ├── sidebarConfig.ts          # 侧边栏布局配置
│   └── sponsorConfig.ts          # 打赏配置
```

## ⚙️ 文章 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # 或使用 "api" 来启用随机封面图
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # 仅当文章语言与 `siteConfig.ts` 中的网站语言不同时需要设置
pinned: false    # 置顶
comment: true    # 是否允许评论
---
```

## 🧞 指令

下列指令均需要在项目根目录执行：

| Command                    | Action                                 |
| :------------------------- | :------------------------------------- |
| `pnpm install`             | 安装依赖                               |
| `pnpm dev`                 | 在 `localhost:4321` 启动本地开发服务器 |
| `pnpm build`               | 构建网站至 `./dist/`                   |
| `pnpm preview`             | 本地预览已构建的网站                   |
| `pnpm check`               | 检查代码中的错误                       |
| `pnpm format`              | 使用 Biome 格式化您的代码              |
| `pnpm new-post <filename>` | 创建新文章                             |
| `pnpm new-d <content>`     | 创建一条动态                           |
| `pnpm astro ...`           | 执行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`        | 显示 Astro CLI 帮助                    |

## 🙏 致谢

- 非常感谢 [CuteLeaf](https://github.com/CuteLeaf) 开发的 [Firefly](https://github.com/CuteLeaf/Firefly) 模板，Cyrene 就是基于这个模板二次开发
- 同时也感谢 [saicaca](https://github.com/saicaca) 开发了 [Fuwari](https://github.com/saicaca/fuwari) 模板，为后续许多优秀项目奠定了坚实基础
- 图标来自 [Iconify](https://iconify.design/)
- 昔涟部分相关图片素材版权归游戏 [《崩坏：星穹铁道》](https://sr.mihoyo.com/) 开发商 [米哈游](https://www.mihoyo.com/) 所有

## 📝 许可协议

本项目遵循 [MIT license](https://mit-license.org/) 开源协议，详细查看 [LICENSE](./LICENSE) 文件。

最初 Fork 自 [CuteLeaf](https://github.com/CuteLeaf/Firefly)，感谢原作者的贡献，原项目采用 [MIT license](https://mit-license.org/)。

**版权声明：**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)
- Copyright (c) 2025 [CuteLeaf](https://github.com/CuteLeaf) - [Firefly](https://github.com/CuteLeaf/Firefly)
- Copyright (c) 2026 [qwc-ch](https://github.com/qwc-ch) - [Cyrene](https://github.com/qwc-ch/Cyrene)

根据 MIT 开源协议，你可以自由使用、修改、分发代码，但需保留上述版权声明。

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=qwc-ch/Cyrene&type=Date)](https://star-history.com/#qwc-ch/Cyrene&Date)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<img src="./docs/images/1131.png" width="350" height="500" alt="Cyrene" align=right />

<div align="center">

# Cyrene
> A fresh and beautiful Astro blog theme
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

📖 README:
**[English](README.en.md)** | **[简体中文](README.md)** | **[繁體中文](docs/README.zh-TW.md)** | **[日本語](docs/README.ja.md)**

🚀 Quick guide:
[**📝 Docs**](https://docs-firefly.cuteleaf.cn/) (Firefly docs, for reference only) /
[**🍀 My blog**](https://qwc-ch.github.io)

⚡ Static site generation: ultra-fast loading and SEO optimization powered by Astro

🎨 Modern design: clean and beautiful UI with customizable theme color

📱 Mobile friendly: fully responsive experience with mobile-specific optimization

🔧 Highly configurable: most modules can be customized via configuration files

## ✨ Core Features

Cyrene is developed from **Firefly**, and remains highly consistent with it at the core feature level, so you get the same mature and complete blogging experience. We won't list them all here.

Differences from Firefly:
- The mascot model is replaced with the **昔涟 (Xilian)** Spine model
- Default theme color is changed to pink

For detailed features, please refer to the [Firefly repository](https://github.com/CuteLeaf/Firefly) (for reference only).

## 📝 Roadmap

- [ ] More features coming soon...

If you have useful features or optimizations, please submit a [Pull Request](https://github.com/qwc-ch/Cyrene/pulls)

## 🚀 Quick Start

### Requirements

- Node.js ≥ 22
- pnpm ≥ 9

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/qwc-ch/Cyrene.git
   cd Cyrene
   ```

   **It is recommended to [Fork](https://github.com/qwc-ch/Cyrene/fork) the repository first, then clone your own copy. (To deploy to GitHub Pages, rename the repo to "username.github.io")**

   ```bash
   git clone https://github.com/your-github-name/Cyrene.git
   cd Cyrene
   ```

2. **Install dependencies:**

   ```bash
   # Install pnpm first if you haven't
   npm install -g pnpm

   # Install project dependencies
   pnpm install
   ```

3. **Configure your blog:**
   - Edit the configuration files in `src/config/` to customize your blog

4. **Start the development server:**

   ```bash
   pnpm dev
   ```

   The blog will be available at `http://localhost:4321`

### Deployment

- **Refer to the [official guide](https://docs.astro.build/zh-cn/guides/deploy/) to deploy the blog to Vercel, Netlify, GitHub Pages, Cloudflare Pages, EdgeOne Pages, etc.**

   Framework preset: `Astro`

   Root directory: `./`

   Output directory: `dist`

   Build command: `pnpm run build`

   Install command: `pnpm install`

## 📖 Configuration

> 📚 **Detailed docs**: see the [Firefly docs](https://docs-firefly.cuteleaf.cn/) (for reference only)

### Setting the Site Language

To set the default language, edit `src/config/siteConfig.ts`:

```typescript
// Define site language
const SITE_LANG = "zh_CN";
```

**Supported language codes:**
- `zh_CN` - Simplified Chinese
- `zh_TW` - Traditional Chinese
- `en` - English
- `ja` - Japanese
- `ru` - Russian
- `ko` - Korean

### Configuration File Structure

```
src/
├── config/
│   ├── index.ts                  # Config index file
│   ├── siteConfig.ts             # Site base config
│   ├── analyticsConfig.ts        # Analytics config
│   ├── announcementConfig.ts     # Announcement config
│   ├── backgroundWallpaper.ts    # Background wallpaper config
│   ├── commentConfig.ts          # Comment system config
│   ├── coverImageConfig.ts       # Cover image config
│   ├── displaySettingsConfig.ts  # Settings panel config
│   ├── dynamicConfig.ts          # Dynamic page config
│   ├── effectsConfig.ts          # Effects config (sakura, etc.)
│   ├── expressiveCodeConfig.ts   # Code highlight config
│   ├── fontConfig.ts             # Font config
│   ├── footerConfig.ts           # Footer config
│   ├── friendsConfig.ts          # Friend links config
│   ├── galleryConfig.ts          # Gallery config
│   ├── licenseConfig.ts          # License config
│   ├── musicConfig.ts            # Music player config
│   ├── navBarConfig.ts           # Navbar config
│   ├── pioConfig.ts              # Mascot config
│   ├── mermaidConfig.ts          # Mermaid chart config
│   ├── plantumlConfig.ts         # PlantUML chart config
│   ├── profileConfig.ts          # Profile config
│   ├── sidebarConfig.ts          # Sidebar layout config
│   └── sponsorConfig.ts          # Sponsor config
```

## ⚙️ Post Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # or use "api" to enable random cover images
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # Only needed when the post language differs from the site language
pinned: false    # Pin post
comment: true    # Enable comments
---
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                    | Action                                       |
| :------------------------- | :------------------------------------------- |
| `pnpm install`             | Install dependencies                         |
| `pnpm dev`                 | Start local dev server at `localhost:4321`   |
| `pnpm build`               | Build the site to `./dist/`                  |
| `pnpm preview`             | Preview the built site locally               |
| `pnpm check`               | Check for errors in the code                 |
| `pnpm format`              | Format your code with Biome                  |
| `pnpm new-post <filename>` | Create a new post                            |
| `pnpm new-d <content>`     | Create a new dynamic                         |
| `pnpm astro ...`           | Run `astro add`, `astro check`, etc.         |
| `pnpm astro --help`        | Show Astro CLI help                          |

## 🙏 Credits

- Thanks to [CuteLeaf](https://github.com/CuteLeaf) for the [Firefly](https://github.com/CuteLeaf/Firefly) theme, on which Cyrene is based
- Thanks to [saicaca](https://github.com/saicaca) for the [Fuwari](https://github.com/saicaca/fuwari) theme, which laid a solid foundation for many great projects
- Icons from [Iconify](https://iconify.design/)
- Part of the Xilian image assets belong to [Honkai: Star Rail](https://sr.mihoyo.com/) developer [HoYoverse](https://www.mihoyo.com/)

## 📝 License

This project is licensed under the [MIT license](https://mit-license.org/). See the [LICENSE](./LICENSE) file for details.

Originally forked from [CuteLeaf](https://github.com/CuteLeaf/Firefly) / [Firefly](https://github.com/CuteLeaf/Firefly). Thanks to the original author. The original project is licensed under the [MIT license](https://mit-license.org/).

**Copyright notice:**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)
- Copyright (c) 2025 [CuteLeaf](https://github.com/CuteLeaf) - [Firefly](https://github.com/CuteLeaf/Firefly)
- Copyright (c) 2026 [qwc-ch](https://github.com/qwc-ch) - [Cyrene](https://github.com/qwc-ch/Cyrene)

Under the MIT license, you are free to use, modify, and distribute the code, provided that the above copyright notice is retained.

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=qwc-ch/Cyrene&type=Date)](https://star-history.com/#qwc-ch/Cyrene&Date)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

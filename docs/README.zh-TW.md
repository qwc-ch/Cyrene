<img src="./docs/images/cyrene.png" width="350" height="350" alt="Cyrene" align=right />

<div align="center">

# Cyrene
> 一款清新美觀的 Astro 部落格主題模板
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
**[繁體中文](docs/README.zh-TW.md)** | **[简体中文](README.md)** | **[English](README.en.md)** | **[日本語](docs/README.ja.md)**

🚀 快速指南：
[**📝 使用文件**](https://docs-firefly.cuteleaf.cn/)（Firefly 文件，僅供參考） /
[**🍀 我的部落格**](https://qwc-ch.github.io)

⚡ 靜態站點生成: 基於 Astro 的超快載入速度和 SEO 最佳化

🎨 現代化設計: 簡潔美觀的介面，支援自訂主題色

📱 行動裝置友善: 完美的響應式體驗，行動端專項最佳化

🔧 高度可設定: 大部分功能模組均可透過設定檔自訂

## ✨ 核心功能

Cyrene 由 **Firefly** 開發而來，在核心功能層面，兩者保持高度一致，確保您能獲得同樣成熟、完善的部落格體驗，故不在此重複列舉。

與 Firefly 的差異：
- 看板娘模型替換為 **昔漣** Spine 模型
- 主題色預設調整為粉色

您可查閱 [Firefly 倉庫](https://github.com/CuteLeaf/Firefly) 了解詳細特性（僅供參考）。

## 📝 計畫中...

- [ ] 更多功能持續完善中...

如果你有好用的功能和最佳化，請提交 [Pull Request](https://github.com/qwc-ch/Cyrene/pulls)

## 🚀 快速開始

### 環境要求

- Node.js ≥ 22
- pnpm ≥ 9

### 本機開發部署

1. **克隆倉庫：**

   ```bash
   git clone https://github.com/qwc-ch/Cyrene.git
   cd Cyrene
   ```

   **先 [Fork](https://github.com/qwc-ch/Cyrene/fork) 到自己倉庫再克隆（推薦，想把部落格部署到 GitHub Pages 的話要把倉庫名改為"使用者名稱.github.io"）**

   ```bash
   git clone https://github.com/you-github-name/Cyrene.git
   cd Cyrene
   ```

2. **安裝依賴：**

   ```bash
   # 如果沒有安裝 pnpm，先安裝
   npm install -g pnpm

   # 安裝專案依賴
   pnpm install
   ```

3. **設定部落格：**
   - 編輯 `src/config/` 目錄下的設定檔自訂部落格設定

4. **啟動開發伺服器：**

   ```bash
   pnpm dev
   ```

   部落格將在 `http://localhost:4321` 可用

### 平台託管部署

- **參考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)將部落格部署至 Vercel, Netlify, GitHub Pages, Cloudflare Pages, EdgeOne Pages 等。**

   框架預設： `Astro`

   根目錄： `./`

   輸出目錄： `dist`

   建置命令： `pnpm run build`

   安裝命令： `pnpm install`

## 📖 設定說明

> 📚 **詳細設定文件**: 查看（僅供參考）[Firefly 使用文件](https://docs-firefly.cuteleaf.cn/)

### 設定網站語言

要設定部落格的預設語言，請編輯 `src/config/siteConfig.ts` 檔案：

```typescript
// 定義站點語言
const SITE_LANG = "zh_CN";
```

**支援的語言代碼：**
- `zh_CN` - 簡體中文
- `zh_TW` - 繁體中文
- `en` - 英文
- `ja` - 日文
- `ru` - 俄文
- `ko` - 韓文

### 設定檔結構

```
src/
├── config/
│   ├── index.ts                  # 設定索引檔案
│   ├── siteConfig.ts             # 站點基礎設定
│   ├── analyticsConfig.ts        # 統計分析設定
│   ├── announcementConfig.ts     # 公告設定
│   ├── backgroundWallpaper.ts    # 背景壁紙設定
│   ├── commentConfig.ts          # 評論系統設定
│   ├── coverImageConfig.ts       # 封面圖設定
│   ├── displaySettingsConfig.ts  # 設定面板設定
│   ├── dynamicConfig.ts          # 動態頁面設定
│   ├── effectsConfig.ts          # 動畫特效設定（櫻花等）
│   ├── expressiveCodeConfig.ts   # 程式碼高亮設定
│   ├── fontConfig.ts             # 字型設定
│   ├── footerConfig.ts           # 頁尾設定
│   ├── friendsConfig.ts          # 友鏈設定
│   ├── galleryConfig.ts          # 相簿設定
│   ├── licenseConfig.ts          # 許可證設定
│   ├── musicConfig.ts            # 音樂播放器設定
│   ├── navBarConfig.ts           # 導覽列設定
│   ├── pioConfig.ts              # 看板娘設定
│   ├── mermaidConfig.ts          # Mermaid 圖表設定
│   ├── plantumlConfig.ts         # PlantUML 圖表設定
│   ├── profileConfig.ts          # 使用者資料設定
│   ├── sidebarConfig.ts          # 側邊欄佈局設定
│   └── sponsorConfig.ts          # 打賞設定
```

## ⚙️ 文章 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # 或使用 "api" 來啟用隨機封面圖
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # 僅當文章語言與 `siteConfig.ts` 中的網站語言不同時需要設定
pinned: false    # 置頂
comment: true    # 是否允許評論
---
```

## 🧞 指令

下列指令均需要在專案根目錄執行：

| Command                    | Action                                 |
| :------------------------- | :------------------------------------- |
| `pnpm install`             | 安裝依賴                               |
| `pnpm dev`                 | 在 `localhost:4321` 啟動本機開發伺服器 |
| `pnpm build`               | 建置網站至 `./dist/`                   |
| `pnpm preview`             | 本機預覽已建置的網站                   |
| `pnpm check`               | 檢查程式碼中的錯誤                     |
| `pnpm format`              | 使用 Biome 格式化您的程式碼            |
| `pnpm new-post <filename>` | 建立新文章                             |
| `pnpm new-d <content>`     | 建立一則動態                           |
| `pnpm astro ...`           | 執行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`        | 顯示 Astro CLI 幫助                    |

## 🙏 致謝

- 非常感謝 [CuteLeaf](https://github.com/CuteLeaf) 開發的 [Firefly](https://github.com/CuteLeaf/Firefly) 模板，Cyrene 就是基於這個模板二次開發
- 同時也感謝 [saicaca](https://github.com/saicaca) 開發了 [Fuwari](https://github.com/saicaca/fuwari) 模板，為後續許多優秀專案奠定了堅實基礎
- 圖示來自 [Iconify](https://iconify.design/)
- 昔漣部分相關圖片素材版權歸遊戲 [《崩壞：星穹鐵道》](https://sr.mihoyo.com/) 開發商 [米哈遊](https://www.mihoyo.com/) 所有

## 📝 許可協議

本專案遵循 [MIT license](https://mit-license.org/) 開源協議，詳細檢視 [LICENSE](./LICENSE) 檔案。

最初 Fork 自 [CuteLeaf](https://github.com/CuteLeaf/Firefly) / [Firefly](https://github.com/CuteLeaf/Firefly)，感謝原作者的貢獻，原專案採用 [MIT license](https://mit-license.org/)。

**版權聲明：**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)
- Copyright (c) 2025 [CuteLeaf](https://github.com/CuteLeaf) - [Firefly](https://github.com/CuteLeaf/Firefly)
- Copyright (c) 2026 [qwc-ch](https://github.com/qwc-ch) - [Cyrene](https://github.com/qwc-ch/Cyrene)

根據 MIT 開源協議，你可以自由使用、修改、分發程式碼，但需保留上述版權聲明。

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=qwc-ch/Cyrene&type=Date)](https://star-history.com/#qwc-ch/Cyrene&Date)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

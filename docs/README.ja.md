<img src="./docs/images/1131.png" width="350" height="500" alt="Cyrene" align=right />

<div align="center">

# Cyrene
> 清潔で美しい Astro ブログテーマ
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
**[日本語](docs/README.ja.md)** | **[简体中文](README.md)** | **[繁體中文](docs/README.zh-TW.md)** | **[English](README.en.md)**

🚀 クイックガイド：
[**📝 ドキュメント**](https://docs-firefly.cuteleaf.cn/)（Firefly のドキュメント、参考用） /
[**🍀 私のブログ**](https://qwc-ch.github.io)

⚡ 静的サイト生成: Astro による超高速な読み込みと SEO 最適化

🎨 モダンなデザイン: シンプルで美しい UI、テーマカラーをカスタマイズ可能

📱 モバイルフレンドリー: 完全なレスポンシブ対応、モバイル向けに最適化

🔧 高いカスタマイズ性: ほとんどの機能モジュールは設定ファイルで変更可能

## ✨ コア機能

Cyrene は **Firefly** から開発されており、コア機能の面では両者は高い一貫性を保っています。成熟した完成度の高いブログ体験をそのまま得られますので、ここでは列挙しません。

Firefly との違い：
- マスコットモデルを **昔涟（Xilian）** Spine モデルに変更
- テーマカラーのデフォルトをピンクに変更

詳細な機能については [Firefly リポジトリ](https://github.com/CuteLeaf/Firefly) を参照してください（参考用）。

## 📝 今後の予定

- [ ] 機能を引き続き追加・改善予定...

便利な機能や最適化があれば、[Pull Request](https://github.com/qwc-ch/Cyrene/pulls) を送ってください。

## 🚀 クイックスタート

### 環境要件

- Node.js ≥ 22
- pnpm ≥ 9

### ローカル開発

1. **リポジトリをクローン：**

   ```bash
   git clone https://github.com/qwc-ch/Cyrene.git
   cd Cyrene
   ```

   **先に [Fork](https://github.com/qwc-ch/Cyrene/fork) してから自分のリポジトリをクローンすることをおすすめします（GitHub Pages にデプロイする場合はリポジトリ名を「ユーザー名.github.io」にしてください）**

   ```bash
   git clone https://github.com/your-github-name/Cyrene.git
   cd Cyrene
   ```

2. **依存関係をインストール：**

   ```bash
   # pnpm をインストールしていない場合
   npm install -g pnpm

   # プロジェクトの依存関係をインストール
   pnpm install
   ```

3. **ブログを設定：**
   - `src/config/` ディレクトリ内の設定ファイルを編集してブログをカスタマイズ

4. **開発サーバーを起動：**

   ```bash
   pnpm dev
   ```

   ブログは `http://localhost:4321` で利用できます

### デプロイ

- **[公式ガイド](https://docs.astro.build/zh-cn/guides/deploy/)を参照して、Vercel、Netlify、GitHub Pages、Cloudflare Pages、EdgeOne Pages などにデプロイできます。**

   フレームワーク： `Astro`

   ルートディレクトリ： `./`

   出力ディレクトリ： `dist`

   ビルドコマンド： `pnpm run build`

   インストールコマンド： `pnpm install`

## 📖 設定

> 📚 **詳細ドキュメント**: [Firefly のドキュメント](https://docs-firefly.cuteleaf.cn/) を参照（参考用）

### サイトの言語を設定

デフォルトの言語を設定するには、`src/config/siteConfig.ts` を編集します：

```typescript
// サイトの言語を定義
const SITE_LANG = "zh_CN";
```

**対応言語コード：**
- `zh_CN` - 簡体字中国語
- `zh_TW` - 繁体字中国語
- `en` - 英語
- `ja` - 日本語
- `ru` - ロシア語
- `ko` - 韓国語

### 設定ファイル構成

```
src/
├── config/
│   ├── index.ts                  # 設定インデックスファイル
│   ├── siteConfig.ts             # サイト基本設定
│   ├── analyticsConfig.ts        # アクセス解析設定
│   ├── announcementConfig.ts     # お知らせ設定
│   ├── backgroundWallpaper.ts    # 背景壁紙設定
│   ├── commentConfig.ts          # コメントシステム設定
│   ├── coverImageConfig.ts       # カバー画像設定
│   ├── displaySettingsConfig.ts  # 設定パネル設定
│   ├── dynamicConfig.ts          # 動的ページ設定
│   ├── effectsConfig.ts          # エフェクト設定（桜など）
│   ├── expressiveCodeConfig.ts   # コードハイライト設定
│   ├── fontConfig.ts             # フォント設定
│   ├── footerConfig.ts           # フッター設定
│   ├── friendsConfig.ts          # リンク設定
│   ├── galleryConfig.ts          # ギャラリー設定
│   ├── licenseConfig.ts          # ライセンス設定
│   ├── musicConfig.ts            # ミュージックプレイヤー設定
│   ├── navBarConfig.ts           # ナビゲーションバー設定
│   ├── pioConfig.ts              # マスコット設定
│   ├── mermaidConfig.ts          # Mermaid チャート設定
│   ├── plantumlConfig.ts         # PlantUML チャート設定
│   ├── profileConfig.ts          # プロフィール設定
│   ├── sidebarConfig.ts          # サイドバーレイアウト設定
│   └── sponsorConfig.ts          # サポート設定
```

## ⚙️ 記事の Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # または "api" でランダムカバー画像を有効化
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # 記事の言語が `siteConfig.ts` のサイト言語と異なる場合のみ必要
pinned: false    # 記事を固定
comment: true    # コメントを許可
---
```

## 🧞 コマンド

以下のコマンドはすべてプロジェクトのルートで実行します：

| Command                    | Action                                 |
| :------------------------- | :------------------------------------- |
| `pnpm install`             | 依存関係をインストール                 |
| `pnpm dev`                 | `localhost:4321` で開発サーバーを起動  |
| `pnpm build`               | `./dist/` にサイトをビルド             |
| `pnpm preview`             | ビルドしたサイトをローカルでプレビュー |
| `pnpm check`               | コードのエラーをチェック               |
| `pnpm format`              | Biome でコードをフォーマット           |
| `pnpm new-post <filename>` | 新しい記事を作成                       |
| `pnpm new-d <content>`     | 新しい動的投稿を作成                   |
| `pnpm astro ...`           | `astro add`, `astro check` などを実行  |
| `pnpm astro --help`        | Astro CLI のヘルプを表示               |

## 🙏 謝辞

- [CuteLeaf](https://github.com/CuteLeaf) 氏による [Firefly](https://github.com/CuteLeaf/Firefly) テーマに感謝します。Cyrene はこのテーマをベースに二次開発されています
- 多くの優れたプロジェクトの基盤となった [Fuwari](https://github.com/saicaca/fuwari) テーマを開発した [saicaca](https://github.com/saicaca) 氏にも感謝します
- アイコンは [Iconify](https://iconify.design/) を使用しています
- 昔涟（Xilian）関連の画像素材の一部は、ゲーム [『崩壊：スターレイル』](https://sr.mihoyo.com/) の開発元 [HoYoverse](https://www.mihoyo.com/) に帰属します

## 📝 ライセンス

このプロジェクトは [MIT license](https://mit-license.org/) のもとで公開されています。詳細は [LICENSE](./LICENSE) ファイルを参照してください。

元は [CuteLeaf](https://github.com/CuteLeaf/Firefly) / [Firefly](https://github.com/CuteLeaf/Firefly) からフォークされました。原作者に感謝します。元プロジェクトも [MIT license](https://mit-license.org/) です。

**著作権表示：**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)
- Copyright (c) 2025 [CuteLeaf](https://github.com/CuteLeaf) - [Firefly](https://github.com/CuteLeaf/Firefly)
- Copyright (c) 2026 [qwc-ch](https://github.com/qwc-ch) - [Cyrene](https://github.com/qwc-ch/Cyrene)

MIT ライセンスの下、上記の著作権表示を保持する限り、コードを自由に使用・変更・再配布できます。

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=qwc-ch/Cyrene&type=Date)](https://star-history.com/#qwc-ch/Cyrene&Date)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

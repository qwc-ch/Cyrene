# Common 公共组件

位于 `src/components/common/`

这个文件夹包含项目中通用的、可复用的 UI 组件。

## 📁 文件夹结构

```
common/
├── base/          # 基础 UI 组件
├── controls/      # 控制交互组件
└── styles/        # 样式组件
```

## 📦 base/ - 基础 UI 组件

基础的 UI 容器和组件，用于构建更复杂的界面。

### DropdownPanel (Astro & Svelte)
下拉面板容器组件，提供统一的卡片样式背景。

**文件:**
- `DropdownPanel.astro` - Astro 版本
- `DropdownPanel.svelte` - Svelte 版本

**Props:**
- `class?: string` - 可选的额外类名
- `children?: Snippet` (Svelte only)

**使用示例:**
```astro
import DropdownPanel from "@/components/common/base/DropdownPanel.astro";

<DropdownPanel class="dropdown-content">
  <!-- 下拉菜单项 -->
</DropdownPanel>
```

### DropdownItem (Astro & Svelte)
下拉面板选项组件，提供统一的按钮样式。

**文件:**
- `DropdownItem.astro` - Astro 版本
- `DropdownItem.svelte` - Svelte 版本

**Props (Astro):**
- `href?: string` - 链接地址
- `target?: string` - 链接目标
- `isActive?: boolean` - 是否为激活状态
- `isLast?: boolean` - 是否为最后一项
- `class?: string` - 额外类名
- `onclick?: string` - 点击事件

**Props (Svelte):**
- `isActive?: boolean` - 是否为激活状态
- `isLast?: boolean` - 是否为最后一项
- `class?: string` - 额外类名
- `onclick?: (event: MouseEvent) => void` - 点击事件
- `children?: Snippet`

**使用场景:**
- WallpaperSwitch.svelte - 壁纸模式切换
- LightDarkSwitch.svelte - 亮暗色主题切换
- DropdownMenu.astro - 导航栏下拉菜单

## 🎛️ controls/ - 控制交互组件

用户交互控制组件，如按钮、分页等。

### BackToTop.astro
返回顶部按钮组件。

**使用:**
```astro
import BackToTop from "@/components/common/controls/BackToTop.astro";

<BackToTop />
```

### ButtonLink.astro
链接按钮组件，用于分类等场景。

**使用:**
```astro
import ButtonLink from "@/components/common/controls/ButtonLink.astro";

<ButtonLink href="/category/tech">技术</ButtonLink>
```

### ButtonTag.astro
标签按钮组件，用于标签展示。

**使用:**
```astro
import ButtonTag from "@/components/common/controls/ButtonTag.astro";

<ButtonTag href="/tag/javascript">JavaScript</ButtonTag>
```

### Pagination.astro
静态路由分页组件，用于 Astro 原生分页（文章列表等）。

**Props:**
- `page: Page` - Astro 的 Page 对象（由 `paginate()` 生成）
- `class?: string` - 可选的额外类名
- `style?: string` - 可选的样式

**使用:**
```astro
import Pagination from "@/components/common/controls/Pagination.astro";

<Pagination page={page} />
```

**使用场景:**
- `[...page].astro` - 文章列表分页

### ClientPagination.astro
客户端 JavaScript 分页组件，用于 DOM 级别的显示/隐藏控制。

**Props:**
- `totalItems: number` - 总条目数
- `itemsPerPage: number` - 每页显示数量
- `currentPage: number` - 当前页码
- `sectionId: string` - 分页区域唯一标识

**特点:**
- 支持移动端和桌面端不同布局
- 可以响应筛选器事件（通过 `updatePagination` 自定义事件）
- 支持多个独立的分页区域（通过 `sectionId`）
- 通过 JavaScript 控制 `data-item-section` 元素的显示隐藏

**使用:**
```astro
import ClientPagination from "@/components/common/controls/ClientPagination.astro";

<ClientPagination 
  totalItems={items.length}
  itemsPerPage={12}
  currentPage={1}
  sectionId="my-section"
/>
```

**使用场景:**
- `bangumi.astro` - 番组页面的动态分页
- 任何需要客户端分页的场景

## 🎨 styles/ - 样式组件

提供统一样式的组件。

### TOCStyles.astro
目录（Table of Contents）的样式组件。

**使用:**
```astro
import TOCStyles from "@/components/common/styles/TOCStyles.astro";

<TOCStyles />
```

**使用场景:**
- SidebarTOC.astro - 侧边栏目录
- FloatingTOC.astro - 浮动目录

## 📝 样式规范

### 下拉面板
- 容器: `card-base float-panel p-2`
- 最小宽度: `min-w-[12rem]`

### 下拉选项
- 基础类: `btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95`
- 间距: 非最后一项 `mb-0.5`
- 激活: `current-theme-btn`

### 图标
- 大小: `text-[1.25rem]`
- 间距: `mr-3`

## 🔧 技术说明

### Astro vs Svelte
- **Astro 组件**: 适用于静态内容，服务端渲染
- **Svelte 组件**: 适用于需要客户端交互的场景

### Svelte 5 新特性
Base 组件使用 Svelte 5 的 **Snippet** 和 **`{@render}`** 语法：
- `children?: Snippet` - 接收子内容
- `{@render children()}` - 渲染子内容
- 完全兼容 Svelte 5 标准

## 📚 参考
- [Svelte 5 迁移指南](https://svelte.dev/docs/svelte/v5-migration-guide)

import type {
	DARK_MODE,
	LIGHT_MODE,
	SYSTEM_MODE,
	WALLPAPER_BANNER,
	WALLPAPER_NONE,
	WALLPAPER_OVERLAY,
} from "../constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;
	site_url: string;
	description?: string; // 网站描述，用于生成 <meta name="description">
	keywords?: string[]; // 站点关键词，用于生成 <meta name="keywords">

	lang: "en" | "zh_CN" | "zh_TW" | "ja" | "ru";

	themeColor: {
		hue: number;
		fixed: boolean;
		defaultMode?: LIGHT_DARK_MODE; // 默认模式：浅色、深色或跟随系统
	};

	// 字体配置
	font: FontConfig;

	// 站点开始日期，用于计算运行天数
	siteStartDate?: string; // 格式: "YYYY-MM-DD"

	// 添加bangumi配置
	bangumi?: {
		userId?: string; // Bangumi用户ID
	};

	backgroundWallpaper: BackgroundWallpaperConfig;
	generateOgImages: boolean;
	favicon: Array<{
		src: string;
		theme?: "light" | "dark";
		sizes?: string;
	}>;
	/** 导航栏Logo图标，可选类型：icon库、图片链接、本地图片 */
	navbarLogo?: {
		type: "icon" | "image";
		value: string; // icon名或图片url
		alt?: string; // 图片alt文本
	};
	navbarTitle?: string; // 导航栏标题，如果不设置则使用 title
	navbarWidthFull?: boolean; // 导航栏是否占满屏幕宽度
	showLastModified: boolean; // 控制"上次编辑"卡片显示的开关

	// 页面开关配置
	pages: {
		sponsor: boolean; // 赞助页面开关
		guestbook: boolean; // 留言板页面开关
		bangumi: boolean;
	};

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "list" | "grid"; // 默认布局模式：list=列表模式，grid=网格模式
		allowSwitch: boolean; // 是否允许用户切换布局
		grid: {
			// 网格布局配置，仅在 defaultMode 为 "grid" 或允许切换布局时生效
			// 是否开启瀑布流布局
			masonry: boolean;
		};
	};

	// 分页配置
	pagination: {
		postsPerPage: number; // 每页显示的文章数量
	};
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
	Friends = 3,
	Sponsor = 4,
	Guestbook = 5,
	Bangumi = 6,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
	icon?: string; // 菜单项图标
	children?: (NavBarLink | LinkPreset)[]; // 支持子菜单，可以是NavBarLink或LinkPreset
};

export enum NavBarSearchMethod {
	PageFind = 0,
	MeiliSearch = 1,
}

/**
 * MeiliSearch配置
 *
 * @property INDEX_NAME MeiliSearch索引名称
 * @property CONTENT_DIR 需要被索引的内容目录
 * @property MEILI_HOST MeiliSearch服务器地址
 * @property PUBLIC_MEILI_HOST 公共MeiliSearch服务器地址（前端使用）
 * @property PUBLIC_MEILI_SEARCH_KEY 公共MeiliSearch搜索密钥（前端使用）
 */
export type MeiliSearchConfig = {
	INDEX_NAME: string;
	CONTENT_DIR: string;
	MEILI_HOST: string;
	PUBLIC_MEILI_HOST: string;
	PUBLIC_MEILI_SEARCH_KEY: string;
};

export type NavBarSearchConfig = {
	method: NavBarSearchMethod;
	meiliSearchConfig?: MeiliSearchConfig;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
	searchMethod?: NavBarSearchMethod;
	meiliSearchConfig?: MeiliSearchConfig;
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
		showName?: boolean;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};
// 评论配置

export type CommentConfig = {
	/**
	 * 当前启用的评论系统类型
	 * "none" | "twikoo" | "waline" | "giscus" | "disqus" | 'artalk'
	 */
	type: "none" | "twikoo" | "waline" | "giscus" | "disqus" | "artalk";
	twikoo?: {
		envId: string;
		region?: string;
		lang?: string;
		visitorCount?: boolean;
	};
	waline?: {
		serverURL: string;
		lang?: string;
		login?: "enable" | "force" | "disable";
		visitorCount?: boolean; // 是否统计访问量，true 启用访问量，false 关闭
	};
	artalk?: {
		// 后端程序 API 地址
		server: string;
		/**
		 * 语言，支持语言如下：
		 * - "en" (English)
		 * - "zh-CN" (简体中文)
		 * - "zh-TW" (繁体中文)
		 * - "ja" (日本語)
		 * - "ko" (한국어)
		 * - "fr" (Français)
		 * - "ru" (Русский)
		 * */
		locale: string | "auto";
		// 是否统计访问量，true 启用访问量，false 关闭
		visitorCount?: boolean;
	};
	giscus?: {
		repo: string;
		repoId: string;
		category: string;
		categoryId: string;
		mapping: string;
		strict: string;
		reactionsEnabled: string;
		emitMetadata: string;
		inputPosition: string;
		lang: string;
		loading: string;
	};
	disqus?: {
		shortname: string;
	};
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof SYSTEM_MODE;

export type WALLPAPER_MODE =
	| typeof WALLPAPER_BANNER
	| typeof WALLPAPER_OVERLAY
	| typeof WALLPAPER_NONE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	pinned?: boolean;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	/** @deprecated 使用 darkTheme 和 lightTheme 代替 */
	theme?: string;
	/** 暗色主题名称（用于暗色模式） */
	darkTheme: string;
	/** 亮色主题名称（用于亮色模式） */
	lightTheme: string;
};

export type AnnouncementConfig = {
	// enable属性已移除，现在通过sidebarLayoutConfig统一控制
	title?: string; // 公告栏标题
	content: string; // 公告栏内容
	icon?: string; // 公告栏图标
	type?: "info" | "warning" | "success" | "error"; // 公告类型
	closable?: boolean; // 是否可关闭
	link?: {
		enable: boolean; // 是否启用链接
		text: string; // 链接文字
		url: string; // 链接地址
		external?: boolean; // 是否外部链接
	};
};

// 单个字体配置
export type FontItem = {
	id: string; // 字体唯一标识符
	name: string; // 字体显示名称
	src: string; // 字体文件路径或URL链接
	family: string; // CSS font-family 名称
	weight?: string | number; // 字体粗细，如 "normal", "bold", 400, 700 等
	style?: "normal" | "italic" | "oblique"; // 字体样式
	display?: "auto" | "block" | "swap" | "fallback" | "optional"; // font-display 属性
	unicodeRange?: string; // Unicode 范围，用于字体子集化
	format?:
		| "woff"
		| "woff2"
		| "truetype"
		| "opentype"
		| "embedded-opentype"
		| "svg"; // 字体格式，仅当 src 为本地文件时需要
};

// 字体配置
export type FontConfig = {
	enable: boolean; // 是否启用自定义字体功能
	selected: string | string[]; // 当前选择的字体ID，支持单个或多个字体组合
	fonts: Record<string, FontItem>; // 字体库，以ID为键的对象
	fallback?: string[]; // 全局字体回退列表
	preload?: boolean; // 是否预加载字体文件以提高性能
};

export type FooterConfig = {
	enable: boolean; // 是否启用Footer HTML注入功能
	customHtml?: string; // 自定义HTML内容，用于添加备案号等信息
};

export type CoverImageConfig = {
	enableInPost: boolean; // 是否在文章详情页显示封面图
	randomCoverImage: {
		enable: boolean; // 是否启用随机图功能
		apis: string[]; // 随机图API列表，支持 {seed} 占位符，会替换为文章slug或时间戳
		fallback?: string; // 当API请求失败时的备用图片路径
		// 加载指示器配置
		loading?: {
			// 加载指示器开关
			enable: boolean;
			image?: string; // 自定义加载图片路径（相对于public目录），默认 "/assets/images/loading.gif"
			backgroundColor?: string; // 加载指示器背景颜色，默认与loading.gif背景色一致 (#fefefe)
		};
		watermark?: {
			enable: boolean; // 是否显示水印
			text?: string; // 水印文本，默认为"随机图"
			position?:
				| "top-left"
				| "top-right"
				| "bottom-left"
				| "bottom-right"
				| "center"; // 水印位置
			opacity?: number; // 水印透明度 0-1，默认0.6
			fontSize?: string; // 字体大小，默认"0.75rem"
			color?: string; // 文字颜色，默认为白色
			backgroundColor?: string; // 背景颜色，默认为半透明黑色
		};
	};
};

// 组件配置类型定义
export type WidgetComponentType =
	| "profile"
	| "announcement"
	| "categories"
	| "tags"
	| "sidebarToc"
	| "advertisement"
	| "stats"
	| "calendar"
	| "custom";

export type WidgetComponentConfig = {
	type: WidgetComponentType; // 组件类型
	enable: boolean; // 是否启用该组件
	order: number; // 显示顺序
};

// ========== 音乐播放器类型定义（新增）==========

// 播放器类型
export type PlayerType = 'svelte' | 'aplayer';

// Svelte播放器配置
export interface SveltePlayerConfig {
  meting_api?: string;
  id?: string;
  server?: string;
  type?: string;
  local_playlist?: Array<{
    title: string;
    artist: string;
    url: string;
    cover?: string;
    lrc?: string;
  }>;
  autoplay?: boolean;
  volume?: number;
  loop?: 'all' | 'one' | 'none';
}

// 修改现有的 MusicPlayerConfig 接口（如果你有的话）
// 如果还没有这个接口，我们可以在这里添加
export interface MusicPlayerConfig {
  // 基础功能开关
  enable: boolean;
  
  // 新增：播放器类型选择
  playerType: PlayerType;
  
  // 使用方式：'meting' 或 'local'
  mode: "meting" | "local";
  
  // 原有配置字段
  meting?: {
    api: string;
    server: string;
    type: string;
    id: string;
    auth?: string;
    fallbackApis?: string[];
    jsPath?: string;
  };
  
  local?: {
    playlist: Array<{
      name: string;
      artist: string;
      url: string;
      cover?: string;
      lrc?: string;
    }>;
  };
  
  player?: {
    autoplay: boolean;
    theme: string;
    loop: string;
    order: string;
    preload: string;
    volume: number;
    mutex: boolean;
    lrcType: number;
    lrcHidden: boolean;
    listFolded: boolean;
    listMaxHeight: string;
    storageName: string;
  };
  
  responsive?: {
    mobile: {
      hide: boolean;
      breakpoint: number;
    };
  };
  
  // 新增：Svelte播放器配置
  svelte?: SveltePlayerConfig;
}

// 结束文件
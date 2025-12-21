// 音乐播放器类型定义
export type PlayerType = 'svelte' | 'aplayer';
export type MusicMode = 'meting' | 'local';

// 通用歌曲接口
export interface Song {
  id: string;
  title: string;
  artist: string;
  url: string;
  cover?: string;
  duration?: number;
}

// Svelte播放器配置
export interface SveltePlayerConfig {
  enable: boolean;
  mode: MusicMode;
  
  // Meting API 配置
  meting_api?: string;
  id?: string;
  server?: string;
  type?: string;
  
  // 本地播放列表
  local_playlist?: Song[];
  
  // 播放器行为
  autoplay?: boolean;
  volume?: number;
  loop?: 'all' | 'one' | 'none';
}

// APlayer 配置
export interface APlayerConfig {
  enable: boolean;
  mode: MusicMode;
  
  // Meting 配置
  meting?: {
    api?: string;
    server?: string;
    type?: string;
    id?: string;
    auth?: string;
  };
  
  // 本地播放列表
  local?: {
    playlist?: Song[];
  };
  
  // 播放器选项
  player?: {
    fixed?: boolean;
    mini?: boolean;
    autoplay?: boolean;
    theme?: string;
    loop?: string;
    order?: string;
    preload?: string;
    volume?: number;
    mutex?: boolean;
    listFolded?: boolean;
    listMaxHeight?: string;
    storageName?: string;
  };
  
  // 资源路径
  jsPath?: string;
  css?: {
    main?: string;
    custom?: string;
  };
}

// 完整的音乐播放器配置
export interface MusicPlayerConfig {
  // 总开关
  enable: boolean;
  
  // 选择播放器类型（用户在这里选择）
  playerType: PlayerType;
  
  // 两个播放器的配置
  svelte: SveltePlayerConfig;
  aplayer: APlayerConfig;
}
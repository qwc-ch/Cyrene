import type { Live2DModelConfig, SpineModelConfig } from "../types/config";

// Spine 看板娘配置
export const spineModelConfig: SpineModelConfig = {
	enable: true, // 启用 Spine 看板娘
	model: {
		// Spine模型文件路径
		path: "/pio/models/spine/cyene/xilian.json",
		scale: 0.05, // 模型缩放比例 - 根据8289×6919的大尺寸调整
		x: 0, // X轴偏移
		y: 0, // Y轴偏移
	},
	position: {
		// 显示位置 bottom-left，bottom-right，top-left，top-right
		corner: "bottom-left",
		offsetX: 35, // 距离边缘35px
		offsetY: 35, // 距离底部35px
	},
	size: {
		width: 300, // 容器宽度
		height: 400, // 容器高度
	},
	interactive: {
		enabled: true, // 启用交互功能
		clickAnimations: ["idle"], // 只有idle动画可用
		clickMessages: [
			"你好呀！我是昔涟~",
			"今天也要加油哦！✨",
			"想要一起去探索世界吗？🌟",
			"记得要好好休息呢~",
			"有什么想对我说的吗？💫",
			"让我们一起创造美好回忆吧！🚀",
			"每一个瞬间都值得珍惜~⭐",
			"希望能带给你温暖和快乐！💖",
			"点击我可以看到我的动作哦！",
			"喜欢这个造型吗？😊",
			"感谢你的陪伴和点击！💕",
		], // 点击时随机显示的文字消息
		messageDisplayTime: 3000, // 文字显示时间（毫秒）
		idleAnimations: ["idle"], // 待机动画列表 - 只有idle
		idleInterval: 11000, // 设置为动画时长（11秒），避免重复播放
	},
	responsive: {
		hideOnMobile: true, // 在移动端隐藏
		mobileBreakpoint: 768, // 移动端断点
	},
	zIndex: 1000, // 层级
	opacity: 1.0, // 完全不透明
};

// Live2D 看板娘配置
export const live2dModelConfig: Live2DModelConfig = {
	enable: false, // 禁用 Live2D 看板娘,这个没改,所以禁用
	model: {
		// Live2D模型文件路径
		path: "/pio/models/live2d/snow_miku/model.json",
		// path: "/pio/models/live2d/illyasviel/illyasviel.model.json",
	},
	position: {
		// 显示位置 bottom-left，bottom-right，top-left，top-right
		corner: "bottom-left", // 显示位置
		offsetX: 0, // 距离边缘20px
		offsetY: 0, // 距离底部20px
	},
	size: {
		width: 135, // 容器宽度
		height: 165, // 容器高度
	},
	interactive: {
		enabled: false, // 启用交互功能
		// motions 和 expressions 将从模型 JSON 文件中自动读取
		clickMessages: [
			"今天天气真不错呢！",
		], // 点击时随机显示的文字消息
		messageDisplayTime: 3000, // 文字显示时间（毫秒）
	},
	responsive: {
		hideOnMobile: true, // 在移动端隐藏
		mobileBreakpoint: 768, // 移动端断点
	},
};
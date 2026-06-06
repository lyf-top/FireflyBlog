import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [

	{
		title: "u7",
		imgurl: "https://avatars.githubusercontent.com/u/10252805?v=4&s=640",
		desc: "悠然的Hexo博客",
		siteurl: "https://u7u7.top",
		tags: ["Blog"],
		weight: 11, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "团子和蛋糕",
		imgurl: "https://avatars.githubusercontent.com/u/10252805?v=4&s=640",
		desc: "团子和蛋糕的博客",
		siteurl: "https://blog.tsh520.cn",
		tags: ["Blog"],
		weight: 12, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "阿夜",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "这是基于springbootvue3的博客系统",
		siteurl: "https://blog.ayeez.cn/",
		tags: ["Blog"],
		weight: 9,// 权重，数字越大排序越靠前
		enabled: true,// 是否启用
	},
	{
		title: "Fqlr",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "番茄主理人",
		siteurl: "https://fqzlr.com",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "喵斯基部落",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "运维博客",
		siteurl: "https://blog.moewah.com",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Key的blog",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "个人java学习",
		siteurl: "https://cyborg2077.github.io",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "二叉树树博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "运维博客",
		siteurl: "https://2x.nz/q",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "U-Blog",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "全栈博客",
		siteurl: "https://uluo.cloud/about",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Firefly官方博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "官方博客",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "upxuu的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "初中生的博客",
		siteurl: "https://upxuu.com/about",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Zensical的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "Zensical主题博客",
		siteurl: "https://wcowin.work",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "葱葱的小窝",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "后端八股分享",
		siteurl: "https://blog.mosicong.top",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
		{
		title: "AirTouch的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "项目推荐",
		siteurl: "https://www.xsl.im",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
		{
		title: "tsoo的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "建站备案指南",
		siteurl: "https://blog.tsoo.net",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
			{
		title: "周润发的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "开源项目指南",
		siteurl: "https://blog.zrf.me",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
			{
		title: "保研算法学习博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "江财保研算法指南",
		siteurl: "https://juniexd.cn",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
			{
		title: "woodfish的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "江财技术学习笔记",
		siteurl: "https://woodfish.site",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
		{
		title: "npiter的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "江财竞赛分享",
		siteurl: "https://npiter.de/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "mohao的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "江财题解",
		siteurl: "https://blog.mohao.me/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "hxq的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "专转本英语笔记",
		siteurl: "https://hxqblog.cn",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
{
		title: "nw177十三的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "博客搭建指南",
		siteurl: "https://blog.nw177.cn/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "yeqing的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "镜像与加速",
		siteurl: "https://blog.yeqing.net/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "yc520的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "共享资源分享",
		siteurl: "https://www.yc520.top",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "没用的小飞鼠的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "专转本英语笔记",
		siteurl: "https://feishu.xiao-feishu.top/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "vmss的博客",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "论坛加博客",
		siteurl: "https://vmss.cn/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
























	
	
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};

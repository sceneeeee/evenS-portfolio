import type { Dictionary } from './en';

export const zh = {
  siteName: 'evenS — 工程作品集',
  skip: '跳转到正文',
  nav: { home: '首页', projects: '项目', background: '背景', menu: '菜单', label: '主导航', brand: 'evenS 首页', portfolio: '工程作品集', language: '选择语言', english: '切换为英语', chinese: '切换为简体中文' },
  footer: { focus: '机器人技术 · 导航 · 系统集成', explore: '查看项目', preview: '第一阶段开发预览', pending: '简历及联系方式待补充。' },
  home: {
    title: '机器人与自主系统',
    description: 'evenS — 西交利物浦大学机械电子与机器人工程本科生。项目方向涵盖视觉导航、稀疏几何与具身 AI 系统集成。',
    eyebrow: '机械电子与机器人工程 / XJTLU',
    heading: ['理解系统。', '打通接口。'],
    introBefore: '我是 ', introAfter: '，就读于西交利物浦大学机械电子与机器人工程专业，攻读工程学士学位。目前关注机器人导航、感知接口与具身 AI 系统集成。',
    explore: '查看项目', cv: '简历待补充', focusLabel: '工程技术方向', focus: '当前关注',
    focuses: ['视觉语言导航', '稀疏几何适配', '模型与系统集成'],
    focusNotes: ['说明实现决策。', '开展受控对照。', '用失败分析指导下一步。'],
    selected: '精选项目', selectedTitle: '以项目呈现工程实践。', all: '全部项目',
    practice: '我的工程方法', practiceTitle: '明确模块与验证的边界。',
    practices: [
      { label: '01 / 接口', title: '围绕接口连接模块。', text: '从航点候选到图上的可选动作，检查每个模块的输入要求，以及信息经过下一层接口后还保留了什么。', link: '查看系统边界', anchor: 'architecture' },
      { label: '02 / 实验', title: '一次检验一个假设。', text: '开展受控对照，将静态机制检查与导航评估分开，避免混淆结论。', link: '查看实验对照', anchor: 'results' },
      { label: '03 / 失败分析', title: '保留有价值的负结果。', text: '追踪中间行为，用未成立的假设确定下一步应调查的问题。', link: '查看失败分析', anchor: 'failure-analysis' },
    ],
    background: '学习背景', backgroundTitle: ['以机电工程为基础。', '聚焦自主系统。'],
    backgroundText: ['我在西交利物浦大学（XJTLU）就读机械电子与机器人工程专业，攻读工程学士学位。项目工作主要探索感知、学习模型与导航接口如何协同运行。', '这份作品集面向工程类研究生申请与机器人软件岗位机会。各项目案例记录具体实现、个人职责以及现有证据能够支持的结论范围。'],
    development: '作品集开发中', developmentText: '关于、简历及联系页面将在后续阶段加入。目前尚未提供简历文件及公开联系地址。',
    continue: '继续了解', closing: '从具体工程证据开始。',
  },
  projects: {
    title: '项目', description: '围绕视觉导航、稀疏几何、证据感知推理与模型集成开展的工程项目。', eyebrow: '项目索引 / 01–03', heading: ['系统、接口，', '以及支撑它们的证据。'], intro: '三个机器人与自主系统方向的项目，各自具有不同的实现进度与验证范围。阅读项目时，请同时关注其状态说明。', label: '工程项目', statusTitle: '如何理解项目状态', statusText: '“研究进行中”包含已完成实验和仍在推进的研究；“模块已实现”不代表完整系统已经集成；“集成已验证”指冒烟测试通过，不代表基准评测性能。',
  },
  card: { project: '项目', finding: '工程发现', scope: '当前范围', tags: '技术方向', read: '阅读项目案例', pending: '项目案例整理中', repository: '公开代码仓库' },
  status: { research: '研究进行中', modules: '模块已实现', integration: '集成已验证' },
  moduleStatus: { implemented: '已实现', validated: '已验证', 'in-progress': '进行中', planned: '计划中' },
  case: {
    back: '← 项目索引', eyebrow: '项目案例 / 01 · 视觉语言导航', role: '我的职责', environment: '实验环境', source: '公开资料', showcase: '项目展示仓库', moduleLabel: '实现与验证状态', nav: '项目案例章节', contents: '本案例目录', checked: '公开文档核对日期', continue: '继续了解', all: '返回全部项目', docs: '阅读公开文档',
    sections: ['项目概述', '问题与动机', '个人贡献', '系统架构', '技术实现', '实验与结果', '失败分析', '局限性', '演示与媒体', '仓库与来源说明'],
  },
  media: { pending: '真实项目素材待提供', note: '开发占位区域 · 尚未提供图片', pixels: '像素' },
  diagram: {
    title: '系统边界', adaptation: '适配接口', upstream: '上游模块', label: '公开系统架构',
    nodes: [
      { label: '01 / 输入', title: 'RGB + 几何', lines: ['自然语言指令', '稠密 / 稀疏观测'] },
      { label: '02 / 研究接口', title: '航点候选生成', lines: ['几何方案：已测试', '学习式适配：进行中'] },
      { label: '03 / 上游', title: 'GraphMap', lines: ['候选关联', '拓扑表示'] },
      { label: '04 / 上游', title: '规划 → 执行', lines: ['语言条件规划', 'Habitat 中的导航执行'] },
    ],
    caption: '依据项目公开文档重绘的概念架构图。实验尽可能冻结下游模块。此图用于解释系统结构，并非实验截图。',
  },
  results: {
    label: '受控实验结果；小屏幕可横向滚动查看', captionBefore: '固定 20 个回合的 ', captionAfter: ' 开发对照集 · 用于受控比较，并非正式基准评测结果', method: '方法', baseline: '参考基线',
    methods: ['原始 ETPNav', '几何方案 V0', '几何方案 + 有界 NMS', 'MRU', 'G-Min', '稀疏深度零样本测试'],
    explanation: 'SR：成功率；SPL：按路径长度加权的成功率；NE：导航误差；OS：理想停止条件下的成功率；nDTW：归一化动态时间规整；SDTW：成功加权的 DTW。箭头表示指标的优选方向。数值引自', source: '公开研究概述', afterSource: '；本网站制作过程中未重新运行这些实验。',
  },
  notFound: { title: '页面未找到', description: '此页面暂不可用，请返回 evenS 的工程作品集。', eyebrow: '404 / 页面未找到', heading: '此地址没有对应页面。', text: '页面可能已移动，或尚未加入作品集。', home: '返回首页' },
} satisfies Dictionary;

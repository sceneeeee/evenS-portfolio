import type { ProjectAsset } from '../data/media';
import type { Locale } from './index';

const zh: Record<string, Pick<ProjectAsset, 'description' | 'caption' | 'alt'>> = {
  'ETP-01': {
    description: 'Episode 53 航点候选对比（并非深度图像）',
    caption: '同一观测下，原始稠密深度产生 4 个航点候选，MID360 类稀疏零样本产生 5 个候选，半径均为 0.75 m。这是历史输出的后处理，并非原始传感器图。',
    alt: '两张极坐标航点候选图：稠密深度 4 个候选；稀疏零样本 5 个候选全部位于 0.75 米半径。',
  },
  'ETP-02': {
    description: 'G-Min Frozen-20 GraphMap 聚合关联审计',
    caption: '聚合统计：595 个候选中，411 个成为新增 ghost（绿）、25 个与已有 ghost 合并（黄）、159 个被已访问节点吸收（红）；不是单帧 GraphMap 截图。',
    alt: 'GraphMap 聚合条形图，包含 411 个新增 ghost、25 个合并及 159 个已访问节点吸收，并按候选半径分组。',
  },
  'ETP-03': {
    description: '五个静态观测的分类器激活率汇总',
    caption: '五个独立留出静态观测：稠密输入分类器 post-ReLU 有激活 5/5；稀疏和对齐稀疏均为 0/5。这是活动率汇总，不是原始特征图或导航实验。',
    alt: '五个静态观测的激活率汇总：稠密分类器仍有激活，稀疏与统计对齐后的稀疏分类器激活为零。',
  },
  'ETP-04': {
    description: 'Frozen-20 开发集六种方案的对照图',
    caption: '六种方法在同一组 20 个 val_unseen 开发回合上的受控比较，非正式 R2R-CE 基准或独立泛化成绩。',
    alt: '六种 ETPNav 与几何方案在二十回合开发集上的多个导航指标对照图。',
  },
  'NAV-01': {
    description: '真实 Habitat 0.3.3 场景 RGB 画面',
    caption: 'skokloster-castle 测试场景真实 Habitat RGB 画面。关联工程演示使用确定性 Fake Policy，而非 NaVIDA 模型推理。',
    alt: 'Habitat 仿真器在 skokloster-castle 测试场景中渲染的真实 RGB 图像。',
  },
  'NAV-02': {
    description: '确定性演示的实际 pose 轨迹',
    caption: '根据确定性 Fake Policy 演示记录的仿真 pose 绘制；不是规划轨迹或成功寻路轨迹。',
    alt: '根据确定性 Fake Policy Habitat 演示中记录的世界坐标位姿得到的轨迹。',
  },
  'NAV-03': {
    description: 'HTTP、动作队列与环境执行的数据流程',
    caption: '系统说明示意图，不是运行时 UI 截图；图中计数与固定动作演示记录对应。',
    alt: '连接本地 HTTP 服务、原子动作队列和真实 Habitat env.step 调用的系统架构示意图。',
  },
};
export function localizedAsset(asset: ProjectAsset, locale: Locale): ProjectAsset {
  if (locale === 'en') return asset;
  const translation = zh[asset.id];
  if (!translation) throw new Error(`Missing ${locale} media translation: ${asset.id}`);
  return { ...asset, ...translation };
}

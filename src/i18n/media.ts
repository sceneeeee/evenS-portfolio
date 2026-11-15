import type { ProjectAsset } from '../data/media';
import type { Locale } from './index';

const zh: Record<string, Pick<ProjectAsset, 'description' | 'caption' | 'alt'>> = {
  'ETP-01': {
    description: '同一视点的稠密深度与 MID360 类稀疏深度观测对照',
    caption: '同一仿真视点下的一组配对观测。稀疏输入是用于受控实验的 MID360 类抽象，并非原生传感器采集。',
    alt: '同一视点的稠密深度与模拟稀疏深度，采用一致的朝向和深度标尺。',
  },
  'ETP-02': {
    description: 'GraphMap 关联前后的航点候选对照',
    caption: '可公开的审计示例：展示哪些候选成为图上的可选动作、与已有幽灵节点合并，或被已访问节点吸收。需注明实际运行及配置标识。',
    alt: '航点候选及其 GraphMap 关联结果，分别标记为新增幽灵节点、幽灵节点合并和已访问节点吸收。',
  },
  'ETP-03': {
    description: '冻结航点预测器中的稠密与稀疏输入激活追踪',
    caption: '配对激活追踪：展示编码器中保留的部分结构与下游预测器的激活塌缩。需注明网络层、量程及观测背景。',
    alt: '稠密与稀疏输入的配对激活图，展示深度编码器中保留的结构及下游分类器的激活塌缩。',
  },
};

export function localizedAsset(asset: ProjectAsset, locale: Locale): ProjectAsset {
  if (locale === 'en') return asset;
  const translation = zh[asset.id];
  if (!translation) throw new Error(`Missing ${locale} media translation: ${asset.id}`);
  return { ...asset, ...translation };
}

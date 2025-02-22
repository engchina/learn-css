// 导出所有课程组件
export const lessons = [
  {
    id: 1,
    title: '基础布局与盒模型',
    description: '学习CSS的基础布局概念和盒模型',
    path: '/lesson1'
  },
  {
    id: 2,
    title: '现代布局系统：Flexbox与Grid',
    description: '深入学习CSS现代布局系统中的Flexbox和Grid，掌握一维布局和二维布局的核心概念、实现方法和最佳实践，以创建灵活且响应式的网页布局',
    path: '/lesson2'
  },
  {
    id: 3,
    title: 'CSS动画精通',
    description: '从基础过渡效果到复杂的3D变换，掌握CSS动画的所有关键概念和技术。',
    path: '/lesson3'
  },
  {
    id: 4,
    title: 'CSS选择器和优先级',
    description: '深入理解CSS选择器和优先级规则',
    path: '/lesson4'
  },
  {
    id: 5,
    title: 'CSS伪类与伪元素',
    description: '掌握CSS伪类和伪元素的使用方法',
    path: '/lesson5'
  },
  {
    id: 6,
    title: '响应式设计基础',
    description: '学习响应式设计的基本概念和实践',
    path: '/lesson6'
  },
  {
    id: 7,
    title: 'CSS变量',
    description: '学习CSS变量（自定义属性）的使用和应用',
    path: '/lesson7'
  },
  {
    id: 8,
    title: 'CSS预处理器',
    description: '学习SCSS/SASS预处理器的核心概念和使用方法',
    path: '/lesson8'
  },
  {
    id: 9,
    title: 'CSS动画基础',
    description: '学习CSS动画和过渡效果的基础知识',
    path: '/lesson9'
  },
  {
    id: 10,
    title: 'CSS渐变和背景效果',
    description: '学习CSS渐变和背景效果的创建和应用',
    path: '/lesson10'
  },
  {
    id: 11,
    title: 'CSS滤镜和混合模式',
    description: '学习CSS滤镜和混合模式的使用和创意应用',
    path: '/lesson11'
  },
  {
    id: 13,
    title: 'CSS性能优化',
    description: '学习CSS性能优化的关键概念和最佳实践',
    path: '/lesson13'
  },
  {
    id: 14,
    title: 'CSS架构和组织',
    description: '学习CSS架构和组织的核心概念和最佳实践',
    path: '/lesson14'
  },
  {
    id: 31,
    title: 'CSS交互动效设计',
    description: '深入探讨CSS中常见的交互动效设计，包括按压效果、悬停效果、过渡动画和复杂动画等',
    path: '/lesson31'
  },
  {
    id: 32,
    title: 'CSS工程化与性能优化',
    description: '探索CSS工程化实践和性能优化策略',
    path: '/css-engineering-performance'
  }
];

export type Lesson = {
  id: number;
  title: string;
  description: string;
  path: string;
};
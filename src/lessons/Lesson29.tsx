import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';
import styled from 'styled-components';

const EngineeringDemo = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  .practice-box {
    padding: 1rem;
    background: #4a90e2;
    color: white;
    border-radius: 4px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const PerformanceDemo = styled.div`
  .monitor-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .metric-box {
      flex: 1;
      min-width: 200px;
      padding: 1rem;
      background: linear-gradient(135deg, #4a90e2, #357abd);
      color: white;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

const BuildDemo = styled.div`
  .build-flow {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .step {
      padding: 1rem;
      background: #f5f5f5;
      border-left: 4px solid #4a90e2;
      border-radius: 0 4px 4px 0;

      &:hover {
        background: #e8e8e8;
      }
    }
  }
`;

const QualityDemo = styled.div`
  .quality-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    .quality-item {
      padding: 1rem;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      &:hover {
        border-color: #4a90e2;
      }
    }
  }
`;

const CaseStudyDemo = styled.div`
  .case-container {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    .case-card {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }

      h3 {
        color: #4a90e2;
        margin-bottom: 1rem;
      }
    }
  }
`;

const Lesson29 = () => {
  return (
    <Container>
      <Title>CSS工程化与性能优化</Title>
      <Description>
        本课程将深入探讨CSS工程化实践和性能优化策略，包括工程化最佳实践、性能监控与优化、
        构建流程优化、代码质量保证以及实际应用案例。通过这些内容，我们将学习如何构建高效、
        可维护的CSS架构。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. CSS工程化最佳实践</h2>
      <Description>
        探讨CSS工程化的核心实践和策略：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>模块化组织策略</li>
          <li>命名规范和约定</li>
          <li>依赖管理</li>
          <li>版本控制最佳实践</li>
        </ul>
      </Description>
      <DemoContainer>
        <EngineeringDemo>
          <div className="practice-box">
            <h3 className="font-semibold mb-2">模块化组织</h3>
            <p>基于功能和组件的样式组织</p>
          </div>
          <div className="practice-box">
            <h3 className="font-semibold mb-2">命名规范</h3>
            <p>统一的命名约定和规则</p>
          </div>
          <div className="practice-box">
            <h3 className="font-semibold mb-2">依赖管理</h3>
            <p>样式依赖关系的管理</p>
          </div>
        </EngineeringDemo>
      </DemoContainer>
      <CodeBlock>{`/* CSS模块化示例 */
.component {
  &__element {
    /* 元素样式 */
  }

  &--modifier {
    /* 修饰符样式 */
  }
}

/* 依赖管理 */
@import 'variables';
@import 'mixins';
@import 'components';`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 性能监控与优化</h2>
      <Description>
        学习CSS性能监控和优化技术：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>性能指标监控</li>
          <li>选择器优化</li>
          <li>渲染性能优化</li>
          <li>资源加载优化</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="monitor-container">
            <div className="metric-box">
              <h3 className="font-semibold mb-2">选择器复杂度</h3>
              <p>优化CSS选择器性能</p>
            </div>
            <div className="metric-box">
              <h3 className="font-semibold mb-2">渲染时间</h3>
              <p>监控页面渲染性能</p>
            </div>
            <div className="metric-box">
              <h3 className="font-semibold mb-2">资源大小</h3>
              <p>跟踪CSS文件大小</p>
            </div>
          </div>
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`/* 性能优化示例 */
/* 选择器优化 */
.optimized {
  /* 避免过深的选择器嵌套 */
  > .child { ... }
}

/* 渲染性能 */
.hardware-accelerated {
  transform: translateZ(0);
  will-change: transform;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 构建流程优化</h2>
      <Description>
        优化CSS构建流程：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>构建工具配置</li>
          <li>代码分割策略</li>
          <li>压缩和优化</li>
          <li>自动化流程</li>
        </ul>
      </Description>
      <DemoContainer>
        <BuildDemo>
          <div className="build-flow">
            <div className="step">
              <h3 className="font-semibold mb-2">预处理</h3>
              <p>Sass/Less编译和变量处理</p>
            </div>
            <div className="step">
              <h3 className="font-semibold mb-2">后处理</h3>
              <p>PostCSS优化和转换</p>
            </div>
            <div className="step">
              <h3 className="font-semibold mb-2">打包优化</h3>
              <p>代码分割和压缩</p>
            </div>
          </div>
        </BuildDemo>
      </DemoContainer>
      <CodeBlock>{`// PostCSS配置示例
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-preset-env')
  ]
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 代码质量保证</h2>
      <Description>
        确保CSS代码质量的策略和工具：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>代码规范检查</li>
          <li>自动化测试</li>
          <li>代码审查流程</li>
          <li>文档管理</li>
        </ul>
      </Description>
      <DemoContainer>
        <QualityDemo>
          <div className="quality-grid">
            <div className="quality-item">
              <h3 className="font-semibold mb-2">Stylelint</h3>
              <p>CSS代码规范检查</p>
            </div>
            <div className="quality-item">
              <h3 className="font-semibold mb-2">测试工具</h3>
              <p>样式回归测试</p>
            </div>
            <div className="quality-item">
              <h3 className="font-semibold mb-2">文档工具</h3>
              <p>样式指南生成</p>
            </div>
          </div>
        </QualityDemo>
      </DemoContainer>
      <CodeBlock>{`// Stylelint配置示例
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'max-nesting-depth': 3
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        展示工程化和性能优化的实际应用：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>大型项目实践</li>
          <li>性能优化案例</li>
          <li>工程化改造</li>
          <li>持续优化策略</li>
        </ul>
      </Description>
      <DemoContainer>
        <CaseStudyDemo>
          <div className="case-container">
            <div className="case-card">
              <h3>电商平台优化</h3>
              <p>通过CSS工程化和性能优化提升用户体验</p>
              <ul className="list-disc pl-4 mt-2">
                <li>样式模块化重构</li>
                <li>首屏加载优化</li>
                <li>动画性能提升</li>
              </ul>
            </div>
            <div className="case-card">
              <h3>企业管理系统</h3>
              <p>大型应用的CSS架构设计</p>
              <ul className="list-disc pl-4 mt-2">
                <li>组件库开发</li>
                <li>主题系统设计</li>
                <li>构建流程优化</li>
              </ul>
            </div>
          </div>
        </CaseStudyDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson29;
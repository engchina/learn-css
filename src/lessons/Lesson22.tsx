import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';
import styled from 'styled-components';

const ThemeDemo = styled.div`
  .theme-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;

    .theme-box {
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      &.light {
        background: var(--light-bg, #fff);
        color: var(--light-text, #333);
        border: 1px solid #eee;
      }

      &.dark {
        background: var(--dark-bg, #333);
        color: var(--dark-text, #fff);
      }

      &.custom {
        background: var(--custom-bg, linear-gradient(135deg, #4a90e2, #357abd));
        color: var(--custom-text, #fff);
      }
    }
  }
`;

const ResponsiveTheme = styled.div`
  .responsive-container {
    display: grid;
    gap: 1rem;
    padding: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .content-box {
      padding: 1.5rem;
      border-radius: 8px;
      background: var(--box-bg);
      color: var(--box-text);
      border: 1px solid var(--box-border);
    }
  }
`;

const PerformanceDemo = styled.div`
  .performance-container {
    display: grid;
    gap: 1rem;
    padding: 1rem;

    .perf-box {
      padding: 1.5rem;
      border-radius: 8px;
      background: var(--perf-bg, #f5f5f5);
      color: var(--perf-text, #333);
      transition: background-color 0.3s;

      &:hover {
        background: var(--perf-hover-bg, #e0e0e0);
      }
    }
  }
`;

const CaseStudy = styled.div`
  .case-container {
    display: grid;
    gap: 1.5rem;
    padding: 1rem;

    .case-card {
      padding: 1.5rem;
      border-radius: 8px;
      background: var(--card-bg);
      color: var(--card-text);
      box-shadow: var(--card-shadow);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: var(--card-hover-shadow);
      }

      .card-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--card-title);
      }

      .card-content {
        color: var(--card-content);
      }
    }
  }
`;

const Lesson22 = () => {
  return (
    <Container>
      <Title>CSS变量和主题系统进阶</Title>
      <Description>
        本课程将深入探讨CSS变量的高级应用和主题系统的构建，包括动态主题切换、响应式主题系统、
        性能优化以及实际案例展示。通过这些内容，我们将学习如何构建一个灵活、高效的主题管理系统。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. CSS变量的高级应用</h2>
      <Description>
        探讨CSS变量的高级用法和最佳实践：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>嵌套变量和计算</li>
          <li>变量作用域管理</li>
          <li>回退值和默认值</li>
          <li>JavaScript交互</li>
        </ul>
      </Description>
      <CodeBlock>{`:root {
  --primary-hue: 210;
  --primary-saturation: 80%;
  --primary-lightness: 50%;
  --primary-color: hsl(
    var(--primary-hue),
    var(--primary-saturation),
    var(--primary-lightness)
  );
}

.component {
  --component-spacing: 1rem;
  --component-padding: calc(var(--component-spacing) * 1.5);
  padding: var(--component-padding);
  color: var(--text-color, #333);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 动态主题切换</h2>
      <Description>
        实现灵活的主题切换系统，支持多主题和自定义主题。
      </Description>
      <DemoContainer>
        <ThemeDemo>
          <div className="theme-container">
            <div className="theme-box light">浅色主题</div>
            <div className="theme-box dark">深色主题</div>
            <div className="theme-box custom">自定义主题</div>
          </div>
        </ThemeDemo>
      </DemoContainer>
      <CodeBlock>{`/* 主题变量定义 */
:root {
  --light-bg: #fff;
  --light-text: #333;
  --dark-bg: #333;
  --dark-text: #fff;
  --custom-bg: linear-gradient(135deg, #4a90e2, #357abd);
  --custom-text: #fff;
}

/* 主题切换 */
[data-theme="dark"] {
  --theme-bg: var(--dark-bg);
  --theme-text: var(--dark-text);
}

[data-theme="custom"] {
  --theme-bg: var(--custom-bg);
  --theme-text: var(--custom-text);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 响应式主题系统</h2>
      <Description>
        构建适应不同设备和屏幕尺寸的响应式主题系统。
      </Description>
      <DemoContainer>
        <ResponsiveTheme>
          <div className="responsive-container">
            <div className="content-box">响应式主题示例 1</div>
            <div className="content-box">响应式主题示例 2</div>
          </div>
        </ResponsiveTheme>
      </DemoContainer>
      <CodeBlock>{`/* 响应式主题变量 */
:root {
  --base-spacing: 1rem;
  --container-width: 100%;
}

@media (min-width: 768px) {
  :root {
    --base-spacing: 1.5rem;
    --container-width: 750px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --box-bg: #333;
    --box-text: #fff;
    --box-border: #444;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 性能优化</h2>
      <Description>
        探讨CSS变量在性能方面的考虑和优化策略：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>变量继承和重绘优化</li>
          <li>计算性能优化</li>
          <li>动画性能优化</li>
          <li>缓存策略</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="performance-container">
            <div className="perf-box">性能优化示例</div>
          </div>
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`/* 性能优化示例 */
.optimized-component {
  /* 使用CSS变量进行动画 */
  --translate-y: 0;
  transform: translateY(var(--translate-y));
  transition: --translate-y 0.3s;

  &:hover {
    --translate-y: -5px;
  }

  /* 避免频繁计算 */
  --computed-value: calc(var(--base-value) * 2);
  margin: var(--computed-value);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际案例展示</h2>
      <Description>
        通过实际案例展示CSS变量和主题系统的应用：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>企业级主题系统</li>
          <li>多品牌设计系统</li>
          <li>自定义主题生成器</li>
          <li>主题切换动画</li>
        </ul>
      </Description>
      <DemoContainer>
        <CaseStudy>
          <div className="case-container">
            <div className="case-card">
              <div className="card-title">企业主题系统</div>
              <div className="card-content">
                展示如何构建一个完整的企业级主题系统，包括品牌色、
                组件样式、布局系统等。
              </div>
            </div>
          </div>
        </CaseStudy>
      </DemoContainer>
      <CodeBlock>{`/* 企业级主题系统示例 */
:root {
  /* 品牌色系 */
  --brand-primary: #4a90e2;
  --brand-secondary: #357abd;
  --brand-accent: #ff6b6b;

  /* 组件变量 */
  --card-bg: #fff;
  --card-text: #333;
  --card-title: var(--brand-primary);
  --card-content: #666;
  --card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --card-hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  /* 响应式设计 */
  --container-padding: clamp(1rem, 5vw, 2rem);
  --content-width: min(100%, 1200px);
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson22;
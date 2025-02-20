import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';
import styled from 'styled-components';

const ResponsiveDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;

  .responsive-card {
    background: #fff;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const ContainerQueryDemo = styled.div`
  container-type: inline-size;
  container-name: card-container;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;

  .card {
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  @container card-container (min-width: 400px) {
    .card {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 1rem;
      align-items: center;
    }
  }
`;

const ComponentDemo = styled.div`
  .responsive-component {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      border-radius: 0;
      box-shadow: none;
    }
  }

  .component-header {
    padding: 1rem;
    background: #4a90e2;
    color: white;

    @media (max-width: 480px) {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }

  .component-content {
    padding: 1rem;

    @media (max-width: 480px) {
      padding: 0.5rem;
    }
  }
`;

const PerformanceDemo = styled.div`
  .performance-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      transition: transform 0.3s;

      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }
  }
`;

const CaseStudyDemo = styled.div`
  .case-study {
    display: grid;
    gap: 1rem;
    padding: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .case-card {
    background: #fff;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (hover: hover) {
      &:hover {
        transform: translateY(-5px);
        transition: transform 0.3s;
      }
    }
  }
`;

const Lesson25 = () => {
  return (
    <Container>
      <Title>CSS响应式设计进阶</Title>
      <Description>
        本课程将深入探讨响应式设计的高级概念和技术，包括响应式设计策略、容器查询、
        响应式组件设计、性能优化和实际应用案例。通过这些内容，我们将学习如何构建
        更加灵活和高效的响应式网页。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 响应式设计策略</h2>
      <Description>
        探讨现代响应式设计的核心策略：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>移动优先设计原则</li>
          <li>断点策略和设计</li>
          <li>响应式图片处理</li>
          <li>响应式排版</li>
        </ul>
      </Description>
      <DemoContainer>
        <ResponsiveDemo>
          <div className="responsive-card">
            <h3>移动优先设计</h3>
            <p>从小屏幕开始，逐步增强</p>
          </div>
          <div className="responsive-card">
            <h3>断点策略</h3>
            <p>合理的断点设置与管理</p>
          </div>
          <div className="responsive-card">
            <h3>响应式内容</h3>
            <p>适应不同屏幕的内容展示</p>
          </div>
        </ResponsiveDemo>
      </DemoContainer>
      <CodeBlock>{`/* 移动优先的媒体查询 */
.component {
  /* 移动端基础样式 */
  padding: 1rem;
  font-size: 0.9rem;

  /* 平板设备 */
  @media (min-width: 768px) {
    padding: 1.5rem;
    font-size: 1rem;
  }

  /* 桌面设备 */
  @media (min-width: 1024px) {
    padding: 2rem;
    font-size: 1.1rem;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 容器查询</h2>
      <Description>
        学习使用容器查询实现基于组件容器大小的响应式设计：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>容器查询基础</li>
          <li>容器查询与媒体查询的区别</li>
          <li>实际应用场景</li>
          <li>性能考虑</li>
        </ul>
      </Description>
      <DemoContainer>
        <ContainerQueryDemo>
          <div className="card">
            <div className="card-image" style={{ background: '#4a90e2', height: '50px' }} />
            <div className="card-content">
              <h3>容器查询示例</h3>
              <p>根据容器宽度调整布局</p>
            </div>
          </div>
        </ContainerQueryDemo>
      </DemoContainer>
      <CodeBlock>{`/* 容器查询示例 */
.container {
  container-type: inline-size;
  container-name: card-container;
}

.card {
  /* 默认样式 */
  display: block;
  padding: 1rem;

  /* 当容器宽度大于400px时应用 */
  @container card-container (min-width: 400px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 响应式组件设计</h2>
      <Description>
        探讨如何设计和实现真正响应式的组件：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>组件级响应式设计</li>
          <li>响应式状态管理</li>
          <li>可访问性考虑</li>
          <li>交互设计适配</li>
        </ul>
      </Description>
      <DemoContainer>
        <ComponentDemo>
          <div className="responsive-component">
            <div className="component-header">响应式组件示例</div>
            <div className="component-content">
              <p>组件内容会根据屏幕尺寸自动调整布局和样式</p>
            </div>
          </div>
        </ComponentDemo>
      </DemoContainer>
      <CodeBlock>{`/* 响应式组件设计 */
.responsive-component {
  /* 基础样式 */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  /* 响应式调整 */
  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
  }

  /* 触摸设备优化 */
  @media (hover: none) {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 性能优化</h2>
      <Description>
        学习响应式设计中的性能优化技巧：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>响应式图片优化</li>
          <li>CSS加载策略</li>
          <li>渲染性能</li>
          <li>用户体验优化</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="performance-container">
            <picture>
              <source media="(min-width: 800px)" srcSet="https://via.placeholder.com/800x400" />
              <source media="(min-width: 400px)" srcSet="https://via.placeholder.com/400x300" />
              <img src="https://via.placeholder.com/200x200" alt="响应式图片示例" loading="lazy" />
            </picture>
          </div>
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`/* 响应式图片优化 */
<picture>
  <source
    media="(min-width: 800px)"
    srcset="large.jpg"
  />
  <source
    media="(min-width: 400px)"
    srcset="medium.jpg"
  />
  <img
    src="small.jpg"
    alt="响应式图片"
    loading="lazy"
  />
</picture>

/* 减少动画开销 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        通过实际案例展示响应式设计的最佳实践：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>电子商务网站</li>
          <li>新闻门户</li>
          <li>应用程序界面</li>
          <li>管理系统</li>
        </ul>
      </Description>
      <DemoContainer>
        <CaseStudyDemo>
          <div className="case-study">
            <div className="case-card">
              <h3>电子商务</h3>
              <p>响应式商品展示和购物车</p>
            </div>
            <div className="case-card">
              <h3>新闻门户</h3>
              <p>自适应新闻流和导航</p>
            </div>
            <div className="case-card">
              <h3>应用界面</h3>
              <p>跨设备的一致体验</p>
            </div>
          </div>
        </CaseStudyDemo>
      </DemoContainer>
      <CodeBlock>{`/* 响应式布局系统 */
.layout-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;

  /* 响应式网格 */
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 300px), 1fr)
  );

  /* 支持悬停的设备 */
  @media (hover: hover) {
    .card:hover {
      transform: translateY(-5px);
    }
  }

  /* 打印样式 */
  @media print {
    display: block;
    .card {
      break-inside: avoid;
      margin-bottom: 1rem;
    }
  }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson25;
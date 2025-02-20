import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';
import styled from 'styled-components';

const PerformanceDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;

  .box {
    height: 100px;
    background: #4a90e2;
    transition: transform 0.3s;
    will-change: transform;
    transform: translateZ(0);

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const LayerDemo = styled.div`
  position: relative;
  height: 200px;

  .layer {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .layer1 {
    background: rgba(74, 144, 226, 0.8);
    top: 20px;
    left: 20px;
  }

  .layer2 {
    background: rgba(53, 122, 189, 0.8);
    top: 40px;
    left: 40px;
  }
`;

const AnimationDemo = styled.div`
  .animation-box {
    width: 100px;
    height: 100px;
    background: #4a90e2;
    margin: 1rem;
    animation: slide 2s infinite;
    transform: translateZ(0);
    will-change: transform;
  }

  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(200px); }
  }
`;

const CriticalDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;

  .critical-content {
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Lesson17 = () => {
  return (
    <Container>
      <Title>CSS性能优化和最佳实践</Title>
      <Description>
        本课程将深入探讨CSS性能优化的关键技术和最佳实践，包括选择器优化、重排重绘管理、
        动画性能提升、关键渲染路径优化等内容。通过实际案例，学习如何构建高性能的CSS样式系统。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 选择器性能优化</h2>
      <Description>
        了解CSS选择器的性能特点，掌握高效选择器的编写方法：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>避免过深的选择器嵌套</li>
          <li>优先使用类选择器</li>
          <li>避免通配符选择器</li>
          <li>合理使用子选择器和后代选择器</li>
        </ul>
      </Description>
      <CodeBlock>{`/* 低效的选择器 */
#header div.navigation ul li a { color: #333; }

/* 优化后的选择器 */
.nav-link { color: #333; }

/* 避免过度依赖后代选择器 */
.sidebar .menu .item { ... }  /* 低效 */
.sidebar-menu-item { ... }    /* 高效 */`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 重排和重绘优化</h2>
      <Description>
        学习如何减少页面重排（reflow）和重绘（repaint），提高渲染性能。
      </Description>
      <DemoContainer>
        <LayerDemo>
          <div className="layer layer1" />
          <div className="layer layer2" />
        </LayerDemo>
      </DemoContainer>
      <CodeBlock>{`/* 优化前：频繁触发重排 */
.element {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
}

/* 优化后：使用transform */
.element {
  position: absolute;
  transform: translate(10px, 10px);
  width: 100px;
  height: 100px;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. CSS动画性能</h2>
      <Description>
        掌握创建高性能CSS动画的技巧，了解GPU加速和性能监控。
      </Description>
      <DemoContainer>
        <AnimationDemo>
          <div className="animation-box" />
        </AnimationDemo>
      </DemoContainer>
      <CodeBlock>{`/* 优化动画性能 */
.optimized-animation {
  transform: translateZ(0);  /* 启用GPU加速 */
  will-change: transform;    /* 提示浏览器优化 */
  animation: slide 2s infinite;
}

/* 避免同时动画多个属性 */
@keyframes slide {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(200px, 0, 0); }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 关键渲染路径优化</h2>
      <Description>
        学习如何优化CSS的加载和解析过程，提高页面的首次渲染速度。
      </Description>
      <DemoContainer>
        <CriticalDemo>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="critical-content">
              关键内容 {i + 1}
            </div>
          ))}
        </CriticalDemo>
      </DemoContainer>
      <CodeBlock>{`<!-- 内联关键CSS -->
<style>
  /* 首屏关键样式 */
  .header, .hero { ... }
</style>

<!-- 异步加载非关键CSS -->
<link rel="preload" href="styles.css" as="style"
      onload="this.rel='stylesheet'">

<!-- 使用media查询延迟加载 -->
<link rel="stylesheet" href="print.css" media="print">`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        通过实际案例展示CSS性能优化的最佳实践：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>合理使用CSS预处理器和后处理器</li>
          <li>实现高效的CSS模块化方案</li>
          <li>优化大型应用的CSS架构</li>
          <li>性能监控和优化工具的使用</li>
          <li>持续优化的工作流程</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="box">性能优化示例</div>
        </PerformanceDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson17;
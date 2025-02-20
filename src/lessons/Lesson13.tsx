import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

const PerformanceDemo = styled.div`
  .inefficient {
    width: 100px;
    height: 100px;
    background: #4a90e2;
    margin-bottom: 1rem;
    position: relative;
    animation: moveLeft 3s infinite;
  }

  .efficient {
    width: 100px;
    height: 100px;
    background: #357abd;
    margin-bottom: 1rem;
    position: relative;
    transform: translateZ(0);
    will-change: transform;
    animation: moveRight 3s infinite;
  }

  @keyframes moveLeft {
    from { left: 0; }
    to { left: calc(100% - 100px); }
  }

  @keyframes moveRight {
    from { transform: translateX(0); }
    to { transform: translateX(calc(100% - 100px)); }
  }
`;

const LayerDemo = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  .layer {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s;

    &:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  .layer1 {
    background: rgba(74, 144, 226, 0.3);
    z-index: 1;
  }

  .layer2 {
    background: rgba(53, 122, 189, 0.3);
    z-index: 2;
  }
`;

const AnimationDemo = styled.div`
  .box {
    width: 100px;
    height: 100px;
    background: #4a90e2;
    margin-bottom: 1rem;
    transform: translateZ(0);
    will-change: transform;
    animation: rotate 2s infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const CriticalDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  .item {
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
  }
`;

const Lesson13 = () => {
  return (
    <Container>
      <Title>CSS性能优化</Title>
      <Description>
        CSS性能优化是提升网页性能的重要环节。本课程将介绍CSS性能优化的关键概念和最佳实践，
        包括选择器优化、重排和重绘、CSS动画性能、关键渲染路径等内容，帮助你创建高性能的网页样式。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 选择器优化</h2>
      <Description>
        CSS选择器的性能优化涉及以下几个方面：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>避免使用通配符选择器（*）</li>
          <li>减少选择器嵌套层级</li>
          <li>避免过度依赖后代选择器</li>
          <li>使用类选择器替代标签选择器</li>
        </ul>
      </Description>
      <CodeBlock>{`.inefficient {
  #header div.nav ul li a { color: blue; }
}

.efficient {
  .nav-link { color: blue; }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 重排和重绘</h2>
      <Description>
        了解浏览器的重排（reflow）和重绘（repaint）机制，优化页面渲染性能。
      </Description>
      <DemoContainer>
        <LayerDemo>
          <div className="layer layer1" />
          <div className="layer layer2" />
        </LayerDemo>
      </DemoContainer>
      <CodeBlock>{`// 触发重排的属性
width, height, margin, padding, top, left

// 触发重绘的属性
color, background-color, visibility

// 优化方案
transform: translate(-50%, -50%);
opacity: 0.8;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. CSS动画性能</h2>
      <Description>
        使用性能友好的CSS属性创建流畅的动画效果。
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="inefficient">低效动画</div>
          <div className="efficient">优化动画</div>
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`// 优化前
.inefficient {
  left: 0;
  animation: moveLeft 3s infinite;
}

// 优化后
.efficient {
  transform: translateZ(0);
  will-change: transform;
  animation: moveRight 3s infinite;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 关键渲染路径</h2>
      <Description>
        优化CSS的关键渲染路径，提高页面的首次渲染速度。
      </Description>
      <DemoContainer>
        <CriticalDemo>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="item">
              关键内容 {i + 1}
            </div>
          ))}
        </CriticalDemo>
      </DemoContainer>
      <CodeBlock>{`// 内联关键CSS
<style>
  /* 首屏关键样式 */
  .header { ... }
  .hero { ... }
</style>

// 异步加载非关键CSS
<link rel="preload" href="styles.css" as="style" 
      onload="this.rel='stylesheet'">`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 最佳实践</h2>
      <Description>
        CSS性能优化的一些重要建议：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>合理使用CSS预处理器</li>
          <li>压缩和合并CSS文件</li>
          <li>使用CSS Containment优化渲染</li>
          <li>避免@import导入CSS</li>
          <li>使用CSS GPU加速</li>
        </ul>
      </Description>
      <DemoContainer>
        <AnimationDemo>
          <div className="box">GPU加速</div>
        </AnimationDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson13;
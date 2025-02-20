import { Container, Title, Description, DemoContainer, CodeBlock } from "../components/Common";
import styled from "styled-components";

const PerformanceDemo = styled.div`
  .demo-box {
    width: 100px;
    height: 100px;
    background: #4a90e2;
    margin: 20px;

    &.inefficient {
      left: 0;
      animation: moveLeft 2s infinite;
    }

    &.efficient {
      transform: translateZ(0);
      will-change: transform;
      animation: moveRight 2s infinite;
    }
  }

  @keyframes moveLeft {
    to { left: calc(100% - 120px); }
  }

  @keyframes moveRight {
    to { transform: translateX(calc(100% - 120px)); }
  }
`;

const MemoryDemo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .memory-box {
    width: 80px;
    height: 80px;
    background: #4a90e2;
    opacity: 0;
    transition: opacity 0.3s;

    &.visible {
      opacity: 1;
    }
  }
`;

const GPUDemo = styled.div`
  .gpu-box {
    width: 150px;
    height: 150px;
    background: linear-gradient(45deg, #4a90e2, #63b3ed);
    border-radius: 8px;
    margin: 20px;
    transform: translateZ(0);
    will-change: transform;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

const TimingDemo = styled.div`
  .timing-box {
    width: 120px;
    height: 120px;
    background: #4a90e2;
    margin: 20px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s, transform 0.3s;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CaseStudyDemo = styled.div`
  .card {
    width: 280px;
    height: 180px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transform: translateZ(0);
    will-change: transform;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    .card-image {
      height: 120px;
      background: linear-gradient(45deg, #4a90e2, #63b3ed);
      transform: translateZ(0);
    }

    .card-content {
      padding: 15px;
      transform: translateZ(0);
    }
  }
`;

const Lesson20 = () => {
  return (
    <Container>
      <Title>CSS动画性能优化</Title>
      <Description>
        本课程将深入探讨CSS动画性能优化的关键技术，包括硬件加速、动画触发时机、内存管理等方面，
        帮助你创建流畅、高效的动画效果，提升用户体验。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 动画性能分析</h2>
      <Description>
        了解浏览器渲染动画的过程和性能瓶颈：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>浏览器渲染流水线</li>
          <li>重排和重绘的影响</li>
          <li>动画性能监控工具</li>
          <li>常见性能问题分析</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="demo-box inefficient" />
          <div className="demo-box efficient" />
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`/* 低效的动画实现 */
.inefficient {
  left: 0;
  animation: moveLeft 2s infinite;
}

/* 优化后的动画 */
.efficient {
  transform: translateZ(0);
  will-change: transform;
  animation: moveRight 2s infinite;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 硬件加速技巧</h2>
      <Description>
        学习如何利用GPU加速提升动画性能：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>启用GPU加速的属性</li>
          <li>3D变换和层级管理</li>
          <li>will-change属性的使用</li>
          <li>避免过度使用GPU加速</li>
        </ul>
      </Description>
      <DemoContainer>
        <GPUDemo>
          <div className="gpu-box" />
        </GPUDemo>
      </DemoContainer>
      <CodeBlock>{`.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 动画触发时机</h2>
      <Description>
        优化动画的触发时机和执行过程：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>requestAnimationFrame的使用</li>
          <li>CSS动画性能监控</li>
          <li>动画帧率优化</li>
          <li>动画节流和防抖</li>
        </ul>
      </Description>
      <DemoContainer>
        <TimingDemo>
          <div className="timing-box visible" />
        </TimingDemo>
      </DemoContainer>
      <CodeBlock>{`/* 优化动画触发时机 */
requestAnimationFrame(() => {
  element.classList.add('animate');
});

.animate {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 内存管理</h2>
      <Description>
        学习如何管理动画相关的内存消耗：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>减少DOM操作</li>
          <li>优化图层合成</li>
          <li>清理不需要的动画</li>
          <li>内存泄漏防范</li>
        </ul>
      </Description>
      <DemoContainer>
        <MemoryDemo>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="memory-box visible" />
          ))}
        </MemoryDemo>
      </DemoContainer>
      <CodeBlock>{`/* 优化内存使用 */
.element {
  opacity: 0;
  transform: translateZ(0);
  transition: opacity 0.3s;
}

// 及时清理不需要的动画
element.addEventListener('transitionend', () => {
  element.style.transform = '';
});`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际案例展示</h2>
      <Description>
        通过实际案例展示动画性能优化：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>图片加载动画优化</li>
          <li>滚动动画性能</li>
          <li>悬浮效果优化</li>
          <li>列表动画优化</li>
        </ul>
      </Description>
      <DemoContainer>
        <CaseStudyDemo>
          <div className="card">
            <div className="card-image" />
            <div className="card-content">
              <h3 className="font-semibold">优化后的卡片动画</h3>
            </div>
          </div>
        </CaseStudyDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson20;
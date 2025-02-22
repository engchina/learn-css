import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

// 基础过渡动画示例
const TransitionBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4a90e2;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.2) rotate(45deg);
    background-color: #357abd;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

// 关键帧动画示例
const KeyframeBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4a90e2;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

// 高级关键帧动画示例
const AdvancedKeyframes = styled.div`
  .ball {
    width: 50px;
    height: 50px;
    background: #4a90e2;
    border-radius: 50%;
    animation: bounce-rotate 2s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  @keyframes bounce-rotate {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-100px) rotate(180deg); }
    100% { transform: translateY(0) rotate(360deg); }
  }
`;

// 3D变换示例
const Transform3D = styled.div`
  perspective: 1000px;
  perspective-origin: center;

  .cube {
    width: 100px;
    height: 100px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate3d 5s infinite linear;

    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(74, 144, 226, 0.8);
      border: 2px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }

    .front { transform: translateZ(50px); }
    .back { transform: translateZ(-50px) rotateY(180deg); }
    .right { transform: translateX(50px) rotateY(90deg); }
    .left { transform: translateX(-50px) rotateY(-90deg); }
    .top { transform: translateY(-50px) rotateX(90deg); }
    .bottom { transform: translateY(50px) rotateX(-90deg); }
  }

  @keyframes rotate3d {
    from { transform: rotateX(0) rotateY(0); }
    to { transform: rotateX(360deg) rotateY(360deg); }
  }
`;

// 交互动画组件
const InteractiveCard = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .front {
    background: linear-gradient(45deg, #4a90e2, #357abd);
    color: white;
  }

  .back {
    background: white;
    color: #4a90e2;
    transform: rotateY(180deg);
    border: 2px solid #4a90e2;
  }
`;

// 性能优化示例
const PerformanceDemo = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;

  .optimized {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100px;
    height: 100px;
    background: #4a90e2;
    border-radius: 8px;
    will-change: left;
    animation: slide 3s infinite linear;
  }

  @keyframes slide {
    from { left: 0; }
    to { left: calc(100% - 100px); }
  }
`;

const Lesson4 = () => {
  return (
    <Container>
      <Title>CSS动画精通</Title>
      <Description>
        从基础过渡效果到复杂的3D变换，掌握CSS动画的所有关键概念和技术。
        本课程将帮助你深入理解CSS动画，并在实际项目中创建引人入胜的交互体验。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 基础过渡动画</h2>
      <Description>
        使用CSS transition属性创建平滑的状态过渡效果，结合transform和其他属性实现丰富的交互效果。
      </Description>
      <DemoContainer>
        <TransitionBox />
      </DemoContainer>
      <CodeBlock>{`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  transform: scale(1.2) rotate(45deg);
  background-color: #357abd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

&:active {
  transform: scale(0.95);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 关键帧动画基础</h2>
      <Description>
        使用@keyframes和animation属性创建基础的动画效果。
      </Description>
      <DemoContainer>
        <KeyframeBox />
      </DemoContainer>
      <CodeBlock>{`@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 高级关键帧动画</h2>
      <Description>
        创建复杂的动画序列，包括多个属性的同时变化和精确的时间控制。
      </Description>
      <DemoContainer>
        <AdvancedKeyframes>
          <div className="ball" />
        </AdvancedKeyframes>
      </DemoContainer>
      <CodeBlock>{`@keyframes bounce-rotate {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-100px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
}

animation: bounce-rotate 2s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55);`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 3D变换动画</h2>
      <Description>
        使用CSS 3D变换属性创建立体效果和空间动画，包括透视、旋转和变换样式。
      </Description>
      <DemoContainer>
        <Transform3D>
          <div className="cube">
            <div className="face front">前</div>
            <div className="face back">后</div>
            <div className="face right">右</div>
            <div className="face left">左</div>
            <div className="face top">上</div>
            <div className="face bottom">下</div>
          </div>
        </Transform3D>
      </DemoContainer>
      <CodeBlock>{`perspective: 1000px;
transform-style: preserve-3d;

.cube {
  animation: rotate3d 5s infinite linear;
}

.front { transform: translateZ(50px); }
.back { transform: translateZ(-50px) rotateY(180deg); }
.right { transform: translateX(50px) rotateY(90deg); }
.left { transform: translateX(-50px) rotateY(-90deg); }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 交互动画</h2>
      <Description>
        创建响应用户交互的动画效果，提升用户体验。这个示例展示了一个3D翻转卡片效果。
      </Description>
      <DemoContainer>
        <InteractiveCard>
          <div className="face front">翻转卡片正面</div>
          <div className="face back">翻转卡片背面</div>
        </InteractiveCard>
      </DemoContainer>
      <CodeBlock>{`transform-style: preserve-3d;
transition: transform 0.6s;

&:hover {
  transform: rotateY(180deg);
}

.back {
  transform: rotateY(180deg);
  backface-visibility: hidden;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">6. 性能优化</h2>
      <Description>
        了解CSS动画性能优化的关键点：
      </Description>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>使用transform和opacity进行动画，避免改变布局属性</li>
        <li>使用will-change提示浏览器优化渲染</li>
        <li>适当使用硬件加速</li>
        <li>控制动画范围和复杂度</li>
        <li>使用requestAnimationFrame进行复杂动画</li>
      </ul>
      <DemoContainer>
        <PerformanceDemo>
          <div className="optimized" />
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`will-change: transform;
transform: translateZ(0);
animation: slide 3s infinite;

@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(calc(100% - 100px)); }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson4;
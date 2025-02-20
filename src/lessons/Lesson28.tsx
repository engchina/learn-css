import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

const ComplexAnimationDemo = styled.div`
  display: flex;
  gap: 1rem;
  
  .animation-box {
    width: 100px;
    height: 100px;
    background-color: #4a90e2;
    border-radius: 8px;
    animation: complex-sequence 4s infinite;
    
    @keyframes complex-sequence {
      0% { transform: scale(1) rotate(0deg); }
      25% { transform: scale(1.2) rotate(90deg); }
      50% { transform: scale(1) rotate(180deg); }
      75% { transform: scale(0.8) rotate(270deg); }
      100% { transform: scale(1) rotate(360deg); }
    }
  }
`;

const GestureAnimationDemo = styled.div`
  .gesture-box {
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #4a90e2, #357abd);
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: scale(1.05);
    }
    
    &:active {
      transform: scale(0.95);
    }
  }
`;

const Transform3DDemo = styled.div`
  perspective: 1000px;
  
  .cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate3d 8s infinite linear;
    
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
      font-size: 1.2rem;
    }
    
    .front { transform: translateZ(100px); }
    .back { transform: translateZ(-100px) rotateY(180deg); }
    .right { transform: translateX(100px) rotateY(90deg); }
    .left { transform: translateX(-100px) rotateY(-90deg); }
    .top { transform: translateY(-100px) rotateX(90deg); }
    .bottom { transform: translateY(100px) rotateX(-90deg); }
    
    @keyframes rotate3d {
      from { transform: rotateX(0) rotateY(0); }
      to { transform: rotateX(360deg) rotateY(360deg); }
    }
  }
`;

const PerformanceDemo = styled.div`
  .performance-box {
    width: 100px;
    height: 100px;
    background-color: #4a90e2;
    border-radius: 8px;
    will-change: transform;
    transform: translateZ(0);
    animation: slide 3s infinite;
    
    @keyframes slide {
      from { transform: translateX(0); }
      to { transform: translateX(calc(100% - 100px)); }
    }
  }
`;

const PracticalDemo = styled.div`
  .card-container {
    perspective: 1000px;
    width: 300px;
    height: 200px;
    cursor: pointer;
    
    .card {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      
      &:hover {
        transform: rotateY(180deg);
      }
      
      .front, .back {
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
    }
  }
`;

const Lesson28 = () => {
  return (
    <Container>
      <Title>CSS动画高级交互</Title>
      <Description>
        本课程将深入探讨CSS动画的高级应用，包括复杂动画序列、手势动画交互、3D变换动画、
        性能优化以及实际应用案例。通过这些内容，我们将学习如何创建更加丰富和专业的动画效果。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 复杂动画序列</h2>
      <Description>
        使用关键帧动画创建复杂的动画序列，包括多个属性的同时变化和精确的时间控制。
      </Description>
      <DemoContainer>
        <ComplexAnimationDemo>
          <div className="animation-box" />
          <div className="animation-box" style={{ animationDelay: '1s' }} />
          <div className="animation-box" style={{ animationDelay: '2s' }} />
        </ComplexAnimationDemo>
      </DemoContainer>
      <CodeBlock>{`@keyframes complex-sequence {
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(90deg); }
  50% { transform: scale(1) rotate(180deg); }
  75% { transform: scale(0.8) rotate(270deg); }
  100% { transform: scale(1) rotate(360deg); }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 手势动画交互</h2>
      <Description>
        创建响应用户手势的动画效果，使用过渡和变换实现流畅的交互体验。
      </Description>
      <DemoContainer>
        <GestureAnimationDemo>
          <div className="gesture-box" />
        </GestureAnimationDemo>
      </DemoContainer>
      <CodeBlock>{`.gesture-box {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover { transform: scale(1.05); }
  &:active { transform: scale(0.95); }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 3D变换动画</h2>
      <Description>
        使用CSS 3D变换创建立体效果，包括透视、旋转和变换样式。
      </Description>
      <DemoContainer>
        <Transform3DDemo>
          <div className="cube">
            <div className="face front">正面</div>
            <div className="face back">背面</div>
            <div className="face right">右面</div>
            <div className="face left">左面</div>
            <div className="face top">顶面</div>
            <div className="face bottom">底面</div>
          </div>
        </Transform3DDemo>
      </DemoContainer>
      <CodeBlock>{`perspective: 1000px;
transform-style: preserve-3d;

.face {
  position: absolute;
  width: 100%;
  height: 100%;
}

.front { transform: translateZ(100px); }
.back { transform: translateZ(-100px) rotateY(180deg); }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 性能优化</h2>
      <Description>
        学习如何优化CSS动画性能，包括使用硬件加速和优化动画属性。
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="performance-box" />
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`will-change: transform;
transform: translateZ(0);
// 使用transform代替left/top来触发硬件加速`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        将学到的动画技术应用到实际的UI组件中。
      </Description>
      <DemoContainer>
        <PracticalDemo>
          <div className="card-container">
            <div className="card">
              <div className="front">翻转卡片正面</div>
              <div className="back">翻转卡片背面</div>
            </div>
          </div>
        </PracticalDemo>
      </DemoContainer>
      <CodeBlock>{`.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
  
  &:hover {
    transform: rotateY(180deg);
  }
  
  .back {
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson28;
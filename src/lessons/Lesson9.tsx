import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
  color: #666;
`;

const DemoContainer = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f0f9ff;
  border: 2px dashed #4a90e2;
  border-radius: 8px;
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
`;

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

const PerformanceDemo = styled.div`
  .optimized {
    width: 100px;
    height: 100px;
    background: #4a90e2;
    will-change: transform;
    transform: translateZ(0);
    animation: slide 3s infinite;
  }

  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(calc(100% - 100px)); }
  }
`;

const SVGAnimation = styled.div`
  svg {
    width: 200px;
    height: 200px;

    path {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: draw 3s forwards;
    }
  }

  @keyframes draw {
    to { stroke-dashoffset: 0; }
  }
`;

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

const ParallaxCard = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:hover {
    transform: rotateY(-20deg) rotateX(10deg);
  }

  .card-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #4a90e2, #357abd);
    border-radius: 10px;
    transform: translateZ(-10px);
  }

  .card-content {
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 10px;
    padding: 20px;
    transform: translateZ(10px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .floating-element {
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(74, 144, 226, 0.2);
    border-radius: 50%;
    transform: translateZ(30px);
    animation: float 3s infinite ease-in-out;
  }

  @keyframes float {
    0%, 100% { transform: translateZ(30px) translateY(0); }
    50% { transform: translateZ(30px) translateY(-20px); }
  }
`;

const Lesson9 = () => {
  return (
    <Container>
      <Title>CSS动画高级应用</Title>
      <Description>
        本课程将深入探讨CSS动画的高级特性和应用技巧，包括复杂的关键帧动画、性能优化、
        SVG动画、3D变换以及实际应用案例，帮助你创建更加丰富和专业的网页动画效果。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 关键帧动画进阶</h2>
      <Description>
        使用复杂的关键帧动画和贝塞尔曲线实现更加流畅和自然的动画效果。
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

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 动画性能优化</h2>
      <Description>
        学习如何使用will-change、transform和opacity等属性优化动画性能。
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="optimized" />
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`.optimized {
  will-change: transform;
  transform: translateZ(0);
  animation: slide 3s infinite;
}

@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(calc(100% - 100px)); }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. SVG动画</h2>
      <Description>
        结合CSS和SVG创建路径动画和描边动画效果。
      </Description>
      <DemoContainer>
        <SVGAnimation>
          <svg viewBox="0 0 100 100">
            <path
              fill="none"
              stroke="#4a90e2"
              strokeWidth="2"
              d="M20,50 Q50,20 80,50 T140,50"
            />
          </svg>
        </SVGAnimation>
      </DemoContainer>
      <CodeBlock>{`svg path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 3s forwards;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. CSS 3D变换</h2>
      <Description>
        使用CSS 3D变换属性创建立体效果和空间动画。
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

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        综合运用各种动画技巧创建具有视差效果的交互式卡片。
      </Description>
      <DemoContainer>
        <ParallaxCard>
          <div className="card-bg" />
          <div className="card-content">
            <h3 className="text-xl font-semibold mb-4">视差卡片</h3>
            <p className="text-gray-600">悬停查看3D效果</p>
          </div>
          <div className="floating-element" style={{ top: '20%', left: '20%' }} />
          <div className="floating-element" style={{ top: '60%', right: '20%' }} />
        </ParallaxCard>
      </DemoContainer>
      <CodeBlock>{`transform-style: preserve-3d;
transition: transform 0.5s;

&:hover {
  transform: rotateY(-20deg) rotateX(10deg);
}

.card-bg { transform: translateZ(-10px); }
.card-content { transform: translateZ(10px); }
.floating-element { transform: translateZ(30px); }`}</CodeBlock>
    </Container>
  );
};

export default Lesson9;
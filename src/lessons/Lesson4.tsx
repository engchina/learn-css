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
  padding: 1rem;
  background-color: #f0f9ff;
  border: 2px dashed #4a90e2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
`;

// 基础过渡效果示例
const TransitionBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4a90e2;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #357abd;
    transform: scale(1.1);
  }
`;

// 动画示例
const AnimatedBox = styled.div`
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

// 变换示例
const TransformBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4a90e2;
  transition: transform 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: rotate(45deg) scale(1.2);
  }
`;

// 动画时间函数示例
const TimingBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #4a90e2;
  position: relative;
  animation: moveRight 3s infinite;

  @keyframes moveRight {
    from {
      left: 0;
    }
    to {
      left: calc(100% - 50px);
    }
  }
`;

// 实际应用示例
const Card = styled.div`
  width: 300px;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const Lesson4 = () => {
  return (
    <Container>
      <Title>CSS动画与过渡</Title>
      <Description>
        CSS动画和过渡效果可以为网页添加生动的交互体验。通过使用transition、animation和transform属性，
        我们可以创建流畅的动画效果，提升用户体验。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 基础过渡效果</h2>
      <Description>
        使用 <code>transition</code> 属性可以让样式改变平滑过渡，常用于悬停效果。
      </Description>
      <DemoContainer>
        <TransitionBox />
      </DemoContainer>
      <CodeBlock>{`transition: all 0.3s ease;

&:hover {
  background-color: #357abd;
  transform: scale(1.1);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. CSS关键帧动画</h2>
      <Description>
        使用 <code>@keyframes</code> 和 <code>animation</code> 属性创建更复杂的动画效果。
      </Description>
      <DemoContainer>
        <AnimatedBox />
      </DemoContainer>
      <CodeBlock>{`@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

animation: bounce 1s infinite;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 变换效果</h2>
      <Description>
        使用 <code>transform</code> 属性可以对元素进行旋转、缩放、倾斜和平移。
      </Description>
      <DemoContainer>
        <TransformBox />
      </DemoContainer>
      <CodeBlock>{`transform: rotate(45deg) scale(1.2);
transition: transform 0.5s ease;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 动画时间函数</h2>
      <Description>
        使用不同的时间函数（timing functions）可以控制动画的速度变化。
      </Description>
      <DemoContainer style={{ overflow: 'hidden' }}>
        <TimingBox />
      </DemoContainer>
      <CodeBlock>{`animation: moveRight 3s infinite;

@keyframes moveRight {
  from { left: 0; }
  to { left: calc(100% - 50px); }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        将动画和过渡效果应用到实际UI组件中。
      </Description>
      <DemoContainer>
        <Card>
          <h3 className="text-lg font-semibold mb-2">交互式卡片</h3>
          <p className="text-gray-600">悬停时会有上浮和阴影加深的效果</p>
        </Card>
      </DemoContainer>
      <CodeBlock>{`transition: all 0.3s ease;

&:hover {
  transform: translateY(-10px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson4;
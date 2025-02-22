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
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
`;

// 基础动画示例
const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4a90e2;
  transition: all 0.3s ease;
  margin: 1rem;

  &:hover {
    transform: scale(1.2) rotate(45deg);
    background-color: #357abd;
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

// 3D变换示例
const ThreeDContainer = styled.div`
  perspective: 1000px;
  padding: 2rem;
`;

const ThreeDBox = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate3d 5s infinite linear;

  @keyframes rotate3d {
    from {
      transform: rotateX(0) rotateY(0);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
`;

const Face = styled.div<{ transform: string }>`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(74, 144, 226, 0.8);
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transform: ${props => props.transform};
`;

// 交互动画组件
const InteractiveButton = styled.button`
  padding: 1rem 2rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

const CSSAnimationMastery = () => {
  return (
    <Container>
      <Title>CSS动画精通</Title>
      <Description>
        从基础过渡效果到复杂的3D变换，掌握CSS动画的所有关键概念和技术。
        本课程将帮助你深入理解CSS动画，并在实际项目中创建引人入胜的交互体验。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 基础过渡动画</h2>
      <Description>
        使用CSS transition属性创建平滑的状态过渡效果。
      </Description>
      <DemoContainer>
        <AnimatedBox />
      </DemoContainer>
      <CodeBlock>{
`transition: all 0.3s ease;

&:hover {
  transform: scale(1.2) rotate(45deg);
  background-color: #357abd;
}`
      }</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 关键帧动画</h2>
      <Description>
        使用@keyframes和animation属性创建复杂的动画序列。
      </Description>
      <DemoContainer>
        <KeyframeBox />
      </DemoContainer>
      <CodeBlock>{
`@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}`
      }</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 3D变换</h2>
      <Description>
        使用CSS 3D变换属性创建立体效果和空间转换。
      </Description>
      <DemoContainer>
        <ThreeDContainer>
          <ThreeDBox>
            <Face transform="translateZ(100px)">前</Face>
            <Face transform="translateZ(-100px) rotateY(180deg)">后</Face>
            <Face transform="translateX(100px) rotateY(90deg)">右</Face>
            <Face transform="translateX(-100px) rotateY(-90deg)">左</Face>
            <Face transform="translateY(-100px) rotateX(90deg)">上</Face>
            <Face transform="translateY(100px) rotateX(-90deg)">下</Face>
          </ThreeDBox>
        </ThreeDContainer>
      </DemoContainer>
      <CodeBlock>{
`transform-style: preserve-3d;
perspective: 1000px;
transform: rotateX(45deg) rotateY(45deg);`
      }</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 交互动画</h2>
      <Description>
        创建响应用户交互的动画效果，提升用户体验。
      </Description>
      <DemoContainer>
        <InteractiveButton>交互按钮</InteractiveButton>
      </DemoContainer>
      <CodeBlock>{
`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

&:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`
      }</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 动画性能优化</h2>
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
    </Container>
  );
};

export default CSSAnimationMastery;
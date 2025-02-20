import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

const Scene3D = styled.div`
  perspective: 1000px;
  perspective-origin: 50% 50%;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cube = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s infinite linear;

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: transform 0.3s;
  }

  .front { 
    background: rgba(74, 144, 226, 0.8);
    transform: translateZ(75px);
  }
  .back { 
    background: rgba(74, 144, 226, 0.8);
    transform: translateZ(-75px) rotateY(180deg);
  }
  .right { 
    background: rgba(53, 122, 189, 0.8);
    transform: translateX(75px) rotateY(90deg);
  }
  .left { 
    background: rgba(53, 122, 189, 0.8);
    transform: translateX(-75px) rotateY(-90deg);
  }
  .top { 
    background: rgba(41, 98, 155, 0.8);
    transform: translateY(-75px) rotateX(90deg);
  }
  .bottom { 
    background: rgba(41, 98, 155, 0.8);
    transform: translateY(75px) rotateX(-90deg);
  }

  @keyframes rotate {
    from { transform: rotateX(0) rotateY(0); }
    to { transform: rotateX(360deg) rotateY(360deg); }
  }
`;

const PerspectiveDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  .perspective-box {
    perspective: 800px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
      width: 150px;
      height: 200px;
      background: linear-gradient(45deg, #4a90e2, #357abd);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      transform-style: preserve-3d;
      transition: transform 0.5s;

      &:hover {
        transform: rotateY(45deg);
      }
    }

    &.perspective-1000 { perspective: 1000px; }
    &.perspective-500 { perspective: 500px; }
    &.perspective-200 { perspective: 200px; }
  }
`;

const FlipCard = styled.div`
  width: 200px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s;

    &:hover {
      transform: rotateY(180deg);
    }
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-front {
    background: linear-gradient(135deg, #4a90e2, #357abd);
    color: white;
  }

  .card-back {
    background: linear-gradient(135deg, #357abd, #4a90e2);
    color: white;
    transform: rotateY(180deg);
  }
`;

const Carousel3D = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  .carousel {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: rotate3D 15s infinite linear;

    .item {
      position: absolute;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: white;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      background: linear-gradient(45deg, #4a90e2, #357abd);

      &:nth-child(1) { transform: rotateY(0) translateZ(250px); }
      &:nth-child(2) { transform: rotateY(72deg) translateZ(250px); }
      &:nth-child(3) { transform: rotateY(144deg) translateZ(250px); }
      &:nth-child(4) { transform: rotateY(216deg) translateZ(250px); }
      &:nth-child(5) { transform: rotateY(288deg) translateZ(250px); }
    }
  }

  @keyframes rotate3D {
    from { transform: rotateY(0); }
    to { transform: rotateY(360deg); }
  }
`;

const Lesson16 = () => {
  return (
    <Container>
      <Title>CSS 3D变换与高级动画</Title>
      <Description>
        CSS 3D变换和高级动画效果可以为网页添加令人印象深刻的视觉体验。本课程将探讨如何使用
        CSS transform-style、perspective、backface-visibility等属性创建3D效果，并结合动画
        制作复杂的空间交互效果。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 3D立方体</h2>
      <Description>
        使用CSS 3D变换创建一个可旋转的立方体，展示transform-style: preserve-3d的应用。
      </Description>
      <DemoContainer>
        <Scene3D>
          <Cube>
            <div className="face front">前</div>
            <div className="face back">后</div>
            <div className="face right">右</div>
            <div className="face left">左</div>
            <div className="face top">上</div>
            <div className="face bottom">下</div>
          </Cube>
        </Scene3D>
      </DemoContainer>
      <CodeBlock>{`transform-style: preserve-3d;
perspective: 1000px;

.face {
  position: absolute;
  width: 100%;
  height: 100%;
}

.front { transform: translateZ(75px); }
.back { transform: translateZ(-75px) rotateY(180deg); }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 透视效果演示</h2>
      <Description>
        通过不同的perspective值展示3D效果的深度感知差异。
      </Description>
      <DemoContainer>
        <PerspectiveDemo>
          <div className="perspective-box perspective-1000">
            <div className="card">1000px</div>
          </div>
          <div className="perspective-box perspective-500">
            <div className="card">500px</div>
          </div>
          <div className="perspective-box perspective-200">
            <div className="card">200px</div>
          </div>
        </PerspectiveDemo>
      </DemoContainer>
      <CodeBlock>{`perspective: 1000px;
transform-style: preserve-3d;

&:hover {
  transform: rotateY(45deg);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 翻转卡片效果</h2>
      <Description>
        使用backface-visibility和transform创建卡片翻转动画。
      </Description>
      <DemoContainer>
        <FlipCard>
          <div className="card-inner">
            <div className="card-face card-front">
              <p>正面内容</p>
            </div>
            <div className="card-face card-back">
              <p>背面内容</p>
            </div>
          </div>
        </FlipCard>
      </DemoContainer>
      <CodeBlock>{`backface-visibility: hidden;
transform-style: preserve-3d;

&:hover {
  transform: rotateY(180deg);
}

.card-back {
  transform: rotateY(180deg);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 3D轮播效果</h2>
      <Description>
        结合3D变换和动画创建环形轮播效果。
      </Description>
      <DemoContainer>
        <Carousel3D>
          <div className="carousel">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="item">{num}</div>
            ))}
          </div>
        </Carousel3D>
      </DemoContainer>
      <CodeBlock>{`perspective: 1000px;
transform-style: preserve-3d;

.item {
  position: absolute;
  &:nth-child(1) { transform: rotateY(0) translateZ(250px); }
  &:nth-child(2) { transform: rotateY(72deg) translateZ(250px); }
  // ...
}

@keyframes rotate3D {
  from { transform: rotateY(0); }
  to { transform: rotateY(360deg); }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 性能优化建议</h2>
      <Description>
        在使用CSS 3D变换时需要注意以下几点：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>使用transform-style: preserve-3d时要注意层级关系</li>
          <li>合理设置perspective值以获得最佳3D效果</li>
          <li>使用will-change属性提示浏览器优化渲染</li>
          <li>避免过度使用3D变换，可能影响性能</li>
          <li>考虑使用GPU加速来提升动画性能</li>
        </ul>
      </Description>
    </Container>
  );
};

export default Lesson16;